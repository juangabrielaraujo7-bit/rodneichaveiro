# Imagens dos serviços e nova paleta

Atualização solicitada em 6 de novembro de 2026. O usuário escolheu **azul e amarelo** para deixar a interface mais viva e solicitou imagens muito realistas, sem fundo e com aparência flutuante. Essa escolha atualiza a paleta anterior da interface; o logotipo original permanece preservado.

- Azul principal: `#1453DD`, para destaques, fundos e navegação.
- Amarelo: `#FFD32C`, para ações e detalhes.
- Texto: `#142747`; fundo claro: `#F7FAFF`; superfícies de apoio: `#EAF1FF`.
- Botão amarelo com texto escuro; em chamadas sobre amarelo, botão azul com texto branco.

As sete imagens foram produzidas com a ferramenta integrada **OpenAI image_gen**, uma por serviço. São ilustrações de objetos genéricos, sem marcas comerciais: chaves, chave automotiva, chave codificada, maçanetas e fechadura. Não comprovam trabalhos executados nem equipamentos pertencentes à empresa.

Originais PNG: `assets/services/`. Versões WebP para o site: `public/images/services/`. Todos os prompts completos, nomes e finalidade estão em `assets/services/manifest.json`. A transparência foi verificada na leitura dos arquivos; a conversão preserva o canal alpha. `scripts/prepare-service-images.mjs` permite repetir a otimização dos originais.

As imagens substituem os ícones nos cards e aparecem nas páginas individuais. O recorte real, a perspectiva, a sombra suave e a pequena elevação no hover dão a aparência de flutuação. Movimento reduzido é respeitado. A home identifica a natureza ilustrativa das imagens. Fotos reais de trabalhos continuam pendentes; as três avaliações fornecidas posteriormente pelo usuário já estão implementadas.
