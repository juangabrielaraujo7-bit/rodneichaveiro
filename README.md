# Rodnei Chaveiro — Freguesia do Ó

Website em Next.js App Router, TypeScript e Tailwind CSS. Marca original fornecida pelo responsável. Conteúdo principal renderizado no servidor e páginas de serviços pré-renderizadas.

## Executar

Requer Node.js 22 ou superior e npm. Execute `npm ci`, depois `npm run dev`. Acesse `http://127.0.0.1:3000`.

Para produção: `npm run build` e `npm start`. O build usa as mesmas variáveis definidas na Vercel.

## Verificações

- `npm run lint`
- `npm run typecheck`
- `npm test` — proteção de indexação e domínio.
- `npm run build`
- `npx playwright install chromium` e, com `npm start` em execução, `npm run test:e2e` — páginas, links internos, contatos, acessibilidade, responsividade e 404.

## Publicação Vercel

1. Entre na conta Vercel e importe **o repositório existente** `juangabrielaraujo7-bit/rodneichaveiro`. Não crie outro repositório.
2. Escolha Next.js, raiz do projeto `.`, Node.js 24, instalação `npm ci`, build `npm run build`, saída automática. Conecte a branch de produção `main`; a integração Git deverá executar os próximos deploys após push. Veja a [documentação oficial](https://vercel.com/docs/git).
3. Para demonstração, mantenha `INDEXING_ENABLED=false`, deixe `SITE_URL` vazio e não associe domínio definitivo. As páginas enviam `noindex`, robots bloqueia rastreamento e o sitemap fica sem URLs. Não há canonical provisório da Vercel.
4. Confira build, página inicial, serviços, contatos, `robots.txt`, `sitemap.xml` e cabeçalho `X-Robots-Tag` na URL gerada. A demonstração não foi publicada nesta entrega por ausência de sessão autenticada disponível.

O bloqueio de indexação não restringe acesso à URL. Se desejar restringir visitantes, use as opções de proteção de deploy da própria hospedagem, conforme disponibilidade da conta.

## Ativar o domínio aprovado e indexação

Somente após aprovação comercial e editorial: associe o domínio HTTPS, defina `SITE_URL=https://DOMINIO-APROVADO`, `INDEXING_ENABLED=true` **apenas em Production**, e faça novo build/deploy. O texto `DOMINIO-APROVADO` é instrução e não deve ser usado como configuração real. Não use URL `vercel.app`. Ambientes `VERCEL_ENV=preview` permanecem bloqueados. Confira canonical absoluto, sitemap, robots e respostas HTTP no domínio final antes de solicitar indexação. Propriedades de ambiente são avaliadas no build; alterá-las exige novo deploy.

## Analytics e Search Console

Copie `.env.example` para `.env.local` apenas no seu computador. Nunca publique arquivos de credenciais. Na Vercel, configure variáveis pelo painel.

- `NEXT_PUBLIC_GA_ID`: ID real `G-...`. Sem valor, nenhum script GA4 é carregado. Com valor, estatísticas só carregam após aceitar. A escolha é salva localmente; a página de privacidade permite revê-la.
- Eventos: `whatsapp_click`, `phone_click`, `maps_click`. Parâmetros: `page_path` e `conversion_origin`, identificando página e botão. Nenhuma conversa é enviada.
- `GOOGLE_SITE_VERIFICATION`: conteúdo do código fornecido pelo Search Console, sem a tag HTML completa. A propriedade por domínio pode exigir verificação DNS manual.

Sem IDs do proprietário, a entrega valida o preparo e os links; não comprova recebimento de eventos em uma propriedade GA4 real nem verificação Search Console.

## Manutenção

- Contatos, bairros, sete serviços e FAQs: `src/lib/content.ts`.
- Guias: `src/lib/guides.ts`. Seus slugs alimentam sitemap e rotas.
- Marca oficial: `public/brand/`. Os SVGs originais usam texto em fonte declarada no próprio arquivo; as versões PNG do ZIP permanecem como material local. Se necessário, solicitar ao designer arquivos com letras convertidas em contornos para reprodução tipográfica rigorosa em qualquer sistema.
- Tokens e responsividade: `src/app/globals.css`. Manrope e Inter são hospedadas pelo próprio build via Fontsource.
- Publicação segura: `src/lib/publishing.mjs`.
- Metadados: `src/lib/site.ts` e Metadata API de cada página.
- Não adicionar `aggregateRating`, preços, tempos de chegada ou garantias sem evidência.
- Ao receber fotos, use `next/image` com medidas explícitas, alt objetivo e formatos modernos. Não marcar fotos novas como trabalho realizado sem confirmação. A imagem hero deve receber prioridade; as demais devem carregar sob demanda.

Consulte [pesquisa e decisões SEO](docs/SEO.md), [pendências e melhorias](docs/PENDENCIAS.md) e [validação](docs/VALIDACAO.md).
