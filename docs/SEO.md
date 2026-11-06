# Estratégia de pesquisa e arquitetura

Consulta em 6 de novembro de 2026. Pesquisa web para descoberta de páginas orgânicas, seguida de leitura das páginas e de seu HTML. Não é um levantamento de posições ao vivo do Google. A ordem e a presença dos resultados variam conforme localização e consulta. O arquivo `seo-observations.json` registra a inspeção HTTP reproduzível; falhas de acesso não são tratadas como ausência de recurso.

A inspeção HTTP local teve timeout em parte das páginas Almeida; home, página automotiva e índice regional foram lidos pela ferramenta de pesquisa. O blog respondeu à inspeção direta, permitindo observar título, descrição presente, canonical e tipos de dados estruturados. O Chaveiro do Paulista apresentou uma tela intermediária ao cliente HTTP; o conteúdo foi analisado pela ferramenta de pesquisa. Não se concluiu que as páginas inacessíveis não possuam recursos de SEO.

## Referência Almeida

Na [home](https://chaveiroalmeidamaringa.com.br/), o menu separa serviços, regiões e blog. URLs descritivas e links do rodapé conectam a página principal a páginas específicas. A [página automotiva](https://chaveiroalmeidamaringa.com.br/chaves-automotivas-em-maringa/) apresenta explicação, imagens, FAQ, CTA e serviços relacionados. A página de [regiões](https://chaveiroalmeidamaringa.com.br/enderecos/) extraída nesta consulta possui navegação local, mas pouco conteúdo próprio. A arquitetura oferece caminhos de descoberta; essa observação não prova que seja a causa de um desempenho orgânico.

Decisão: páginas completas por intenção de serviço, links relacionados, navegação curta e endereço consistente. Criar uma página regional útil, sem repetir automaticamente o mesmo texto em dezenas de bairros. Depoimentos da referência não pertencem ao Rodnei e não foram reutilizados. O blog não foi copiado; foram escritos três guias próprios para dúvidas práticas.

## Concorrência descoberta na pesquisa orgânica

- [Chaveiro do Paulista](https://chaveirodopaulista.com.br/chaveiro-freguesia-do-o/): página dedicada à região, menu por especialidade, FAQ e CTAs. O conteúdo inclui afirmações amplas sobre rapidez e cobertura que não constituem evidência para o Rodnei. Oportunidade: informação concisa, endereço verificável e condições combinadas no contato.
- [GSM](https://www.gsmchaveiro.com.br/chaveiro-24horas-na-freguesia-do-o.php): seções residencial, automotiva e comercial, além de extensa malha de links geográficos. Oportunidade: reduzir repetição, melhorar hierarquia e usar apenas bairros confirmados.
- [Chaveiro Automotivo São Paulo](https://chaveiroautomotivosp.com.br/freguesia-do-o/): organiza situações, processo de atendimento, FAQ e contato. Oportunidade: explicar compatibilidade por modelo sem transferir alegações de equipamentos, chegada ou garantia para o Rodnei.

Diretórios como Locais do Brasil, Chaveiros.net e Bendito Guia também apareceram. São páginas orgânicas de terceiros; não foram confundidas com posições do Maps nem usadas para importar notas ou depoimentos.

## Maps e site

As médias Whitespark 26,8 / 28,7 / 12,6 / 4,1 foram fornecidas no briefing e dizem respeito ao Perfil da Empresa, grade 5×5, espaçamento 1 km. Não foram recalculadas e não medem o site. O site complementa o perfil com conteúdo indexável, NAP consistente e contato. Não há promessa de ranking.

## Implementação

Home concentra Freguesia do Ó; sete páginas de serviços têm título, descrição, explicação, informações para o contato, FAQ, breadcrumbs e links relacionados próprios. Regiões lista somente os cinco bairros confirmados. Três guias relacionam dúvidas aos serviços. Dados estruturados usam `Locksmith`/`LocalBusiness`, endereço, telefone, atendimento e áreas confirmadas. Não há estrelas, quantidade de clientes ou `aggregateRating` inventado.

Na demonstração, meta robots, cabeçalho HTTP e robots.txt bloqueiam indexação; o sitemap não publica URLs. Canonical, `@id` e URLs definitivas só são criados a partir de `SITE_URL` válido. Pré-visualizações Vercel continuam bloqueadas mesmo quando há domínio configurado. A indexação exige domínio HTTPS definitivo, aprovação e ativação explícita. Robots.txt não é controle de acesso: a demonstração pode ser visitada por quem tiver sua URL.

Fontes técnicas: [Next.js robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots), [Google LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business). A marcação facilita interpretação; não garante uma apresentação especial nos resultados.
