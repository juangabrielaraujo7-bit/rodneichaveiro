# Validação — 6 de novembro de 2026

## Resultado observado

- Build de produção Next.js 16.4.5: concluído, com páginas estáticas e serviços pré-renderizados.
- ESLint: sem erros e sem avisos na última execução.
- TypeScript: sem erros.
- Testes de publicação: 3 aprovados (demonstração bloqueada, rejeição de domínios temporários/inválidos e ativação apenas com domínio e ambiente adequados).
- Playwright Chromium: 3 cenários aprovados, cobrindo as 16 páginas de conteúdo. A execução sobre o build final durou 30,3 segundos.
- Verificadas respostas 200, um H1 por página, títulos exclusivos, descrições presentes, links internos, número dos contatos e mensagens WhatsApp.
- WhatsApp e telefone: destinos e mensagens validados; não foram enviadas mensagens nem feitas ligações.
- Axe: nenhuma violação detectada nas 16 páginas desktop e sete serviços mobile para os critérios automáticos WCAG 2 A/AA e WCAG 2.1 AA usados. Isso não equivale a certificação ou auditoria manual completa.
- Responsividade: larguras 1440, 1280, 768, 390 e 360 px sem overflow horizontal; menu móvel e FAQ funcionando.
- 404, redirecionamento `/home`, schema empresarial, imagem Open Graph, carregamento das imagens e dados de contato verificados.
- Demonstração: `noindex` em meta e HTTP, robots bloqueado, sitemap sem URLs e nenhum canonical temporário.
- Dependências de produção: `npm audit --omit=dev --audit-level=high` informou zero vulnerabilidades conhecidas na consulta.
- Detector visual: um aviso de animação de largura no sublinhado foi corrigido para transformação. Revisão independente: **ship para demonstração**, sem bloqueador material no escopo observado (home desktop/mobile e código conferido). Páginas internas foram verificadas pelos testes, sem revisão visual independente de cada uma.

## Lighthouse local — mobile simulado

Relatório completo: `lighthouse-mobile.json`. Uma execução local, com limitação simulada de dispositivo/rede, não representa dados de campo nem garante a mesma nota na hospedagem.

| Item | Resultado |
|---|---:|
| Desempenho | 92/100 |
| Acessibilidade | 100/100 |
| Boas práticas | 100/100 |
| SEO | 66/100 |
| First Contentful Paint | 0,9 s |
| Largest Contentful Paint | 0,9 s |
| Total Blocking Time | 350 ms |
| Cumulative Layout Shift | 0,001 |

A nota SEO é reduzida pelo bloqueio intencional de indexação da demonstração (`is-crawlable` reprovado). Não liberar rastreamento apenas para melhorar a nota. Repetir a medição no domínio final após aprovação, com dados reais de campo quando disponíveis. INP não foi medido em campo nesta entrega.

## Limites da entrega

GA4 e Search Console estão preparados por variáveis; não há IDs do proprietário para comprovar coleta ou verificação reais. A Vercel abriu no login, portanto não houve criação de projeto, conexão de deploy automático nem URL pública validada. Fotos e avaliações autênticas não foram fornecidas. Há documentação para concluir essas etapas sem inventar informações.

## Como reproduzir

`npm ci`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`. Em outro terminal, `npm start`; depois `npm run test:e2e`. O navegador de testes pode ser instalado com `npx playwright install chromium`.
