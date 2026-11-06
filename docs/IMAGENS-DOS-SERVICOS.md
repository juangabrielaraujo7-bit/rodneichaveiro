# Imagens dos cards de serviços

Sete imagens criadas com a ferramenta integrada `image_gen`, uma por serviço, em fotografia realista de produto, sem fundo e com composição flutuante. Os prompts completos e os caminhos dos arquivos estão em `assets/service-card-prompts.json`.

Os arquivos finais ficam em `public/images/services/*-card-v2.webp`, com transparência preservada, até 640 px de largura e entre 19 e 53 KB por imagem. As imagens anteriores foram preservadas. O sufixo novo impede a reutilização de versões antigas no cache de imagens.

Os cards usam imagens decorativas com texto alternativo vazio, pois o nome do serviço já identifica o link. A altura da imagem é de 138 px no desktop e 150 px no celular. A imagem inteira permanece visível, sem recorte.

Verificação: lint, TypeScript, testes e build aprovados; os três testes de navegador passaram em 30,6 s. As sete imagens carregaram e a página não apresentou rolagem horizontal em 390 px. Inspeção visual em desktop e celular.
