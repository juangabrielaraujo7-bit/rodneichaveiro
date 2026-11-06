# Validação — 6 de novembro de 2026

## Implementação do conceito aprovado 03

Home reconstruída a partir da referência aprovada, arquivada em `docs/reference/home-approved.png`: preto, branco e amarelo queimado, retrato ilustrativo, curvas, serviços editoriais e proporções menores. Imagens originais geradas separadamente e otimizadas em WebP. Build, lint, TypeScript e três testes de proteção da publicação passaram. Primeira rodada de navegador: três cenários aprovados em 37,3 s, com 16 páginas, links, contatos, acessibilidade e cinco larguras sem overflow. As capturas desktop e mobile foram comparadas visualmente com a direção aprovada. Os resultados Lighthouse das versões anteriores abaixo são históricos, não uma nova medição desta implementação.

Confirmação sobre o build final: os três cenários Playwright passaram em 32,4 s, incluindo as páginas internas após o ajuste dos CTAs para a nova paleta. Não houve violações automáticas de acessibilidade nos critérios cobertos.

## Avaliações e novo topo

Três avaliações de cinco estrelas foram transcritas das capturas fornecidas pelo usuário, com identificação dos trechos incompletos e sem nota média geral inventada. O monograma grande do hero foi substituído por composição de fechadura e chave automotiva, a chamada ficou mais curta e o título móvel foi ajustado para 38 px. Build, lint, TypeScript e três testes unitários de publicação aprovados. A rodada final de navegador passou seus três cenários em 33,8 segundos, cobrindo as 16 páginas e as capturas próprias de avaliações em computador e celular. A fonte e os limites da transcrição estão em `docs/AVALIACOES.md`.

## Revisão visual: azul, amarelo e imagens dos serviços

O usuário escolheu azul e amarelo e autorizou ilustrações geradas por IA. Sete originais PNG tiveram o canal alpha verificado; sete versões WebP foram geradas para o site, preservando transparência, com aproximadamente 59–114 KB cada. Build, lint, TypeScript e testes de publicação passaram após a implementação. A conferência de navegador identificou um link amarelo com contraste de 4,41:1 sobre azul; o tom desse texto foi clareado antes da confirmação final. Os resultados Lighthouse abaixo pertencem à versão inicial e não devem ser apresentados como uma medição nova da revisão visual.

Confirmação final da revisão: **3 cenários Playwright aprovados em 32,4 segundos**, incluindo as 16 páginas, axe sem violações nos critérios verificados, cinco larguras sem overflow, carregamento de imagens, contatos, navegação e FAQ. Capturas de computador e celular foram conferidas, incluindo recortes próprios da seção de serviços.

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

GA4 e Search Console estão preparados por variáveis; não há IDs do proprietário para comprovar coleta ou verificação reais. A Vercel abriu no login, portanto não houve criação de projeto, conexão de deploy automático nem URL pública validada. Fotos próprias continuam pendentes; as três avaliações fornecidas posteriormente pelo usuário já estão implementadas. Há documentação para concluir as demais etapas sem inventar informações.

## Como reproduzir

`npm ci`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`. Em outro terminal, `npm start`; depois `npm run test:e2e`. O navegador de testes pode ser instalado com `npx playwright install chromium`.

## Atualização: cards e Google Maps — 06/11/2026

`npm run verify` aprovado (lint, TypeScript, testes e build). `npm run test:e2e`: 3 testes aprovados em 35,4 s, cobrindo as 16 páginas, navegação, contatos, acessibilidade e larguras de 360 a 1440 px. Inspeção visual dos cards e da localização em desktop e celular. O iframe carregou o Google Maps com marcador na Rua Dr. Elviro Carrilho, 309; capturas locais em `.impeccable/review/location-desktop.png` e `location-mobile.png`.

## Amarelo vivo de alerta — 06/11/2026

Interface alterada para #FFDF00, com hover #FFF04A e texto #101010 (contraste medido de 14,32:1). Links sobre branco usam preto; foco de teclado combina preto e amarelo para se destacar em fundos claros e escuros. Build aprovado; três testes de navegador aprovados em 37,0 s, incluindo acessibilidade das 16 páginas e telas de 360 a 1440 px. Capturas desktop e celular conferidas visualmente.

## Serviços compactos no formato da referência Capucho — 06/11/2026

Cards em faixa horizontal com setas, imagens realistas e links. Medidas conferidas: 277 × 330 px em tela de 1440 px e 280 × 325 px no celular de 390 px. Testados avanço, retorno, limites do carrossel e navegação no celular; sem rolagem horizontal da página e sem violações Axe na seção. Verificação completa aprovada e três testes gerais de navegador aprovados em 38,8 s. Ajuste final do alinhamento confirmado no navegador.

## Plaquinha neon 24H — 06/11/2026

Destaque 24H com fundo escuro, moldura iluminada e brilho amarelo estático em CSS. Build aprovado; inspeção visual em desktop e celular e checagem de ausência de rolagem horizontal em 360, 390, 768 e 1440 px.
