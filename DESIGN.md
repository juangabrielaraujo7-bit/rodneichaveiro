---
name: Rodnei Chaveiro
description: Sistema visual implementado para a demonstração do site.
colors:
  graphite: "#142747"
  ivory: "#F7FAFF"
  blue: "#1453DD"
  yellow: "#FFD32C"
  white: "#FFFFFF"
  muted: "#4F607B"
  line: "#D3DFF3"
  soft-surface: "#EAF1FF"
  yellow-hover: "#FFE16B"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(42px, 4.45vw, 64px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(30px, 3.2vw, 44px)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Inter Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "Inter Variable, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  button: "4px"
  service: "5px"
spacing:
  button-gap: "10px"
  grid-gap: "14px"
  section: "96px"
  section-mobile: "65px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.button}"
    padding: "15px 20px"
    typography: "{typography.button}"
  button-primary-hover:
    backgroundColor: "{colors.yellow-hover}"
  button-dark:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.button}"
    padding: "15px 20px"
  service-card:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.service}"
    padding: "26px"
---

# Design System: Rodnei Chaveiro

## Overview

**Creative North Star: "Precisão local"**

Nome descritivo documental, inferido da implementação; não é uma nova proposta de identidade. O briefing definiu a marca e concedeu autonomia para a interface. A demonstração usa os SVGs fornecidos, com remoção apenas de área vazia nas aplicações horizontais para web.

**Key Characteristics:**
- Superfícies claras e contraste grafite.
- Azul e amarelo vivos, escolhidos pelo usuário.
- Tipografia legível e divisórias finas.
- Ícones Lucide com traço consistente.

## Colors

### Primary
Azul vivo orienta títulos, navegação e grandes superfícies. Amarelo destaca ações com texto escuro; azul com texto branco acompanha chamadas sobre fundo amarelo. A combinação foi escolhida pelo usuário na revisão. O latão permanece apenas no logotipo original.

### Neutral
Um branco frio é a superfície principal; azul atende seções de destaque e o rodapé usa azul profundo; branco destaca a disponibilidade. A superfície suave separa grupos e o tom muted atende textos secundários.

## Typography

Manrope conduz títulos; Inter atende leitura, navegação e controles. Ambas são servidas pelo build via Fontsource. O corpo mantém medida máxima de 66 caracteres. A home usa título de 42 px no celular; páginas internas ajustam seus títulos ao espaço disponível. Não aplicar essas medidas ao texto incorporado nos logotipos fornecidos.

## Layout

Contêiner central de até 1240 px, com largura disponível menos 112 px; passa a margens de 32 px abaixo de 1150 px e 20 px no celular. Quebras observadas: 1500, 1150, 900 e 640 px. Seções comuns usam 96 px de respiro vertical no desktop e 65 px no celular. Grades de serviços passam de quatro para duas colunas e depois uma no celular; o último serviço ocupa a largura restante no desktop. Páginas internas usam composição própria dentro do mesmo sistema.

## Elevation & Depth

Separação por superfícies e bordas, sem sombra nos cards de serviço. Sombras suaves limitadas ao aviso de disponibilidade e ao consentimento de estatísticas. Valores exatos constam no sidecar e no CSS.

## Shapes

Botões discretamente arredondados; cards quase retos. Linhas de 1 px definem separações. Preservar os contornos do monograma original; não redesenhar a marca como um ícone genérico.

## Components

Botões principais têm fundo amarelo, texto escuro e altura mínima de 52 px. Os secundários usam borda, e a variante escura acompanha fundos claros. Hover altera superfície em 0,2 s; foco usa contorno de 2 px, deslocado 5 px.

Cards de serviços são links completos, com imagem de produto realista e transparente, título, texto e seta. O primeiro é azul. As imagens são ilustrativas, não trabalhos comprovados; o hover eleva levemente o objeto. Navegação tem sublinhado animado por transformação; no celular há menu recolhível e barra fixa de contatos. FAQ usa `details`/`summary` nativos. O monograma tem uma chegada de 0,8 s somente no desktop; `prefers-reduced-motion` desativa movimentos.

## Do's and Don'ts

### Do:
- Do preservar os SVGs e a paleta fornecidos.
- Do manter foco visível, texto legível e contatos acessíveis.
- Do usar fotografias e avaliações autênticas quando fornecidas.

### Don't:
- Don't usar dourado metálico, reflexos 3D ou gradientes brilhantes na marca.
- Don't apresentar o painel de marca como fotografia de um trabalho.
- Don't inventar provas comerciais para preencher espaço visual.

