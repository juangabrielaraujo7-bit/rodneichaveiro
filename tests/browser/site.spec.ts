import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const serviceSlugs = [
  "chaveiro-24-horas",
  "chaveiro-automotivo",
  "chaves-codificadas",
  "chaveiro-residencial",
  "abertura-de-portas",
  "troca-de-fechaduras",
  "copia-de-chaves",
];
const paths = [
  "/",
  ...serviceSlugs.map((s) => `/${s}`),
  "/sobre",
  "/contato",
  "/regioes-atendidas",
  "/privacidade",
  "/orientacoes",
  "/orientacoes/perdi-a-chave-de-casa",
  "/orientacoes/chave-codificada-e-chave-comum",
  "/orientacoes/troca-de-segredo-ou-fechadura",
];
test("all pages: rendered content, links, metadata, demo protection and accessibility", async ({
  page,
  request,
}) => {
  const titles = new Set<string>();
  for (const path of paths) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(200);
    expect(response?.headers()["x-robots-tag"]).toContain("noindex");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
    const title = await page.title();
    expect(titles.has(title), `duplicate ${title}`).toBe(false);
    titles.add(title);
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description?.length).toBeGreaterThan(50);
    const links = await page
      .locator("a")
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")!));
    for (const href of links) {
      if (href.startsWith("https://wa.me/")) {
        const u = new URL(href);
        expect(u.pathname).toBe("/5511960877257");
        expect(u.searchParams.get("text")?.length).toBeGreaterThan(10);
      }
      if (href.startsWith("tel:")) expect(href).toBe("tel:+5511960877257");
    }
    for (const href of [...new Set(links.filter((x) => x.startsWith("/")))]) {
      expect(
        (await request.get(href.split("#")[0] || "/")).status(),
        `${path} -> ${href}`,
      ).toBe(200);
    }
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
      `accessibility ${path}`,
    ).toEqual([]);
  }
});
test("responsive layouts, mobile navigation, FAQ and screenshots", async ({
  page,
}) => {
  for (const width of [1440, 1280, 768, 390, 360]) {
    console.log(`Checking viewport ${width}`);
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `overflow ${width}`,
    ).toBe(true);
    if (width === 1440 || width === 390) {
      await page.locator(".site-footer").scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          page
            .locator("img")
            .evaluateAll((imgs) =>
              imgs.every(
                (img) =>
                  img instanceof HTMLImageElement &&
                  img.complete &&
                  img.naturalWidth > 0,
              ),
            ),
        )
        .toBe(true);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        path: `.impeccable/review/${width === 1440 ? "desktop" : "mobile"}.png`,
        fullPage: true,
        animations: "disabled",
      });
      await page.screenshot({
        path: `.impeccable/review/${width === 1440 ? "desktop" : "mobile"}-viewport.png`,
        animations: "disabled",
      });
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  console.log("Checking mobile menu");
  await page.goto("/");
  console.log("Checking FAQ");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await expect(
    page.getByRole("button", { name: "Fechar menu" }),
  ).toHaveAttribute("aria-expanded", "true");
  await page
    .locator("#mobile-menu")
    .getByRole("link", { name: "Regiões atendidas" })
    .click();
  await expect(page).toHaveURL(/regioes-atendidas/);
  await expect(page.locator("#mobile-menu")).toHaveCount(0);
  await page.goto("/");
  await page
    .locator("summary")
    .filter({ hasText: "O Rodnei Chaveiro atende 24 horas?" })
    .click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  for (const slug of serviceSlugs) {
    console.log(`Checking mobile service ${slug}`);
    await page.goto(`/${slug}`);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `overflow ${slug}`,
    ).toBe(true);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
      `mobile accessibility ${slug}`,
    ).toEqual([]);
  }
});
test("404, robots, sitemap, schema, OG and redirects", async ({
  page,
  request,
}) => {
  expect((await request.get("/pagina-inexistente")).status()).toBe(404);
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "Disallow: /",
  );
  expect(await (await request.get("/sitemap.xml")).text()).not.toContain(
    "<url>",
  );
  expect(
    (await request.get("/opengraph-image")).headers()["content-type"],
  ).toContain("image/png");
  await page.goto("/");
  const data = JSON.parse(
    (await page
      .locator('script[type="application/ld+json"]')
      .first()
      .textContent()) || "{}",
  );
  expect(data.telephone).toBe("+5511960877257");
  expect(data.address.postalCode).toBe("02729-010");
  expect(data.aggregateRating).toBeUndefined();
  const redirect = await request.get("/home", { maxRedirects: 0 });
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe("/");
  await expect(page.locator("img").first()).toBeVisible();
  await page.locator(".site-footer").scrollIntoViewIfNeeded();
  await expect
    .poll(
      async () =>
        await page
          .locator("img")
          .evaluateAll((imgs) =>
            imgs.every(
              (img) =>
                img instanceof HTMLImageElement &&
                img.complete &&
                img.naturalWidth > 0,
            ),
          ),
    )
    .toBe(true);
});
