export const company = {
  name: "Rodnei Chaveiro - Freguesia do Ó",
  phone: "(11) 96087-7257",
  tel: "tel:+5511960877257",
  whatsapp: "5511960877257",
  address: "Rua Dr. Elviro Carrilho, 309",
  district: "Vila Albertina",
  city: "São Paulo",
  state: "SP",
  zip: "02729-010",
  maps: "https://maps.app.goo.gl/9tToG9PfWxTvTuhDA",
  instagram: "https://www.instagram.com/rodnei_chaveiro/",
};
export const regions = [
  "Freguesia do Ó",
  "Vila Albertina",
  "Vila Palmeiras",
  "Vila Siqueira",
  "Limão",
];
export type Faq = { question: string; answer: string };
export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  intro: string;
  icon: "clock" | "car" | "chip" | "home" | "door" | "lock" | "key";
  situations: string[];
  explanation: string;
  prepare: string[];
  message: string;
  faq: Faq[];
  related: string[];
};
export const services: Service[] = [
  {
    slug: "chaveiro-24-horas",
    name: "Chaveiro 24 horas",
    short:
      "Atendimento a qualquer hora. Informe sua localização e o serviço necessário.",
    title: "Chaveiro 24 horas na Freguesia do Ó",
    description:
      "Atendimento de chaveiro 24 horas na Freguesia do Ó e bairros próximos. Fale com o Rodnei por WhatsApp ou telefone e informe sua necessidade.",
    intro:
      "Perdeu a chave ou ficou para fora? Entre em contato a qualquer hora e informe onde você está e o que aconteceu.",
    icon: "clock",
    situations: [
      "Chave perdida ou esquecida dentro do imóvel",
      "Porta que não abre ou fechadura travada",
      "Problemas com a chave do veículo",
    ],
    explanation:
      "O primeiro contato ajuda a identificar o tipo de serviço e a localização. A possibilidade de atendimento, o orçamento e a previsão de deslocamento são combinados diretamente com o Rodnei. Atendimento 24 horas não significa um prazo fixo de chegada: cada situação precisa ser avaliada.",
    prepare: [
      "Endereço e ponto de referência",
      "Foto da fechadura ou dados do veículo, se possível",
      "Descrição do problema e se há uma chave reserva",
    ],
    message:
      "Olá, encontrei o site e preciso de atendimento de chaveiro 24 horas.",
    faq: [
      {
        question: "Posso ligar durante a madrugada?",
        answer:
          "Sim. O Rodnei oferece atendimento 24 horas. Ligue ou envie uma mensagem para consultar o atendimento para sua situação.",
      },
      {
        question: "Em quanto tempo o chaveiro chega?",
        answer:
          "A previsão depende da localização e da disponibilidade no momento. Confirme diretamente no contato, antes de combinar o atendimento.",
      },
    ],
    related: [
      "abertura-de-portas",
      "chaveiro-automotivo",
      "chaveiro-residencial",
    ],
  },
  {
    slug: "chaveiro-automotivo",
    name: "Chaveiro automotivo",
    short: "Atendimento para perda de chaves e problemas de acesso ao veículo.",
    title: "Chaveiro automotivo na Freguesia do Ó",
    description:
      "Precisa de chaveiro automotivo na Freguesia do Ó? Fale com o Rodnei e informe a marca, o modelo e o ano do veículo para consultar o atendimento.",
    intro:
      "Uma chave perdida ou um problema de acesso ao carro pede uma avaliação específica. Conte com atendimento automotivo e consulte a solução para o seu veículo.",
    icon: "car",
    situations: [
      "Chave do carro perdida",
      "Chave trancada no interior do veículo",
      "Dúvidas sobre reposição ou cópia da chave",
    ],
    explanation:
      "Chaves e sistemas de acesso variam conforme a marca, o modelo e o ano do veículo. Informe esses dados no primeiro contato. A compatibilidade do serviço é confirmada caso a caso, incluindo situações com chave codificada. A análise evita indicar uma solução antes de conhecer o sistema do carro.",
    prepare: [
      "Marca, modelo e ano do veículo",
      "Local onde o veículo se encontra",
      "Informe se possui uma chave reserva e envie uma foto, se possível",
    ],
    message:
      "Olá, encontrei o site e preciso de atendimento com chave automotiva.",
    faq: [
      {
        question: "Vocês atendem qualquer modelo de carro?",
        answer:
          "A compatibilidade é verificada individualmente. Envie marca, modelo, ano e o problema para confirmar se o serviço está disponível para o seu veículo.",
      },
      {
        question: "Preciso ter uma chave reserva?",
        answer:
          "Informe se existe uma chave reserva. Essa informação ajuda na avaliação, mas a possibilidade de atendimento depende do sistema do veículo e da situação.",
      },
    ],
    related: ["chaves-codificadas", "chaveiro-24-horas", "copia-de-chaves"],
  },
  {
    slug: "chaves-codificadas",
    name: "Chaves codificadas",
    short:
      "Cópia e reposição de chaves com chip, conforme a compatibilidade do veículo.",
    title: "Chaves codificadas na Freguesia do Ó",
    description:
      "Serviço de chaves codificadas na Freguesia do Ó. Consulte compatibilidade, cópia ou reposição informando marca, modelo e ano do veículo ao Rodnei.",
    intro:
      "A chave codificada faz parte do sistema de identificação do veículo. Para avaliar cópia ou reposição, o primeiro passo é conhecer o seu carro.",
    icon: "chip",
    situations: [
      "Necessidade de uma chave reserva",
      "Perda de chave com chip",
      "Chave que não é reconhecida pelo veículo",
    ],
    explanation:
      "Uma chave codificada possui um componente eletrônico que precisa ser reconhecido pelo sistema do veículo. O corte da lâmina, por si só, pode não ser suficiente para permitir a partida. A avaliação precisa considerar o sistema eletrônico, a existência de outra chave e o modelo exato do carro. Consulte a compatibilidade antes de agendar.",
    prepare: [
      "Marca, modelo e ano",
      "Foto da chave disponível, quando houver",
      "Informe se a chave abre a porta, mas o veículo não permite a partida",
    ],
    message:
      "Olá, encontrei o site e gostaria de consultar um serviço de chave codificada.",
    faq: [
      {
        question: "Uma cópia da lâmina já liga o carro?",
        answer:
          "Em um veículo com imobilizador, a lâmina e o reconhecimento eletrônico têm funções diferentes. A necessidade de codificação depende do sistema do veículo.",
      },
      {
        question: "Como consultar o valor de uma chave codificada?",
        answer:
          "Envie marca, modelo, ano e informe se há outra chave funcionando. O orçamento depende da avaliação de compatibilidade e do serviço necessário.",
      },
    ],
    related: ["chaveiro-automotivo", "copia-de-chaves", "chaveiro-24-horas"],
  },
  {
    slug: "chaveiro-residencial",
    name: "Chaveiro residencial",
    short: "Soluções para as chaves e fechaduras da sua casa.",
    title: "Chaveiro residencial na Freguesia do Ó",
    description:
      "Chaveiro residencial na Freguesia do Ó e Vila Albertina. Consulte abertura de portas, troca de fechaduras e cópia de chaves com o Rodnei.",
    intro:
      "Da chave esquecida à fechadura com problema, o atendimento residencial começa com uma conversa sobre a porta e a sua necessidade.",
    icon: "home",
    situations: [
      "Porta trancada com a chave dentro de casa",
      "Fechadura com dificuldade para girar",
      "Mudança de imóvel e revisão do acesso",
    ],
    explanation:
      "A escolha entre abertura, troca de segredo e substituição da fechadura depende do estado do conjunto e do objetivo do serviço. Uma foto da porta e da fechadura ajuda na avaliação inicial. Evite forçar uma chave que esteja presa ou difícil de girar e consulte a orientação para o seu caso.",
    prepare: [
      "Foto da fechadura e da lateral da porta",
      "Descrição do defeito e se a porta está aberta ou trancada",
      "Bairro e endereço para consulta do atendimento",
    ],
    message:
      "Olá, encontrei o site e preciso de um serviço de chaveiro residencial.",
    faq: [
      {
        question: "É sempre necessário trocar a fechadura inteira?",
        answer:
          "Não é possível definir sem avaliar. Em alguns casos, uma intervenção no cilindro pode ser considerada; em outros, o conjunto precisa ser substituído. Consulte a solução para sua fechadura.",
      },
      {
        question: "Vocês atendem em Vila Albertina?",
        answer:
          "Sim. O Rodnei está na Rua Dr. Elviro Carrilho, 309, Vila Albertina, e atende a Freguesia do Ó e os bairros informados na página de regiões.",
      },
    ],
    related: ["abertura-de-portas", "troca-de-fechaduras", "copia-de-chaves"],
  },
  {
    slug: "abertura-de-portas",
    name: "Abertura de portas",
    short:
      "Atendimento para portas trancadas, chaves perdidas e fechaduras travadas.",
    title: "Abertura de portas na Freguesia do Ó",
    description:
      "Precisa abrir uma porta na Freguesia do Ó? Fale com o Rodnei Chaveiro 24 horas. Informe o tipo de fechadura, a situação e sua localização.",
    intro:
      "Chave esquecida, perdida ou uma porta que deixou de abrir: descreva a situação para avaliar o atendimento adequado.",
    icon: "door",
    situations: [
      "Porta fechada com a chave no interior",
      "Perda de acesso após extravio da chave",
      "Fechadura travada ou chave que não gira",
    ],
    explanation:
      "A forma de abertura depende da fechadura, do material da porta e do defeito encontrado. Por isso, não é possível prometer previamente um método ou ausência de danos em qualquer situação. Evite tentativas improvisadas e envie uma foto para a avaliação inicial. Pode ser necessário comprovar a autorização de acesso ao imóvel.",
    prepare: [
      "Se a porta apenas bateu ou foi trancada com chave",
      "Foto da fechadura, sem expor informações pessoais",
      "Endereço e confirmação de que você tem autorização de acesso",
    ],
    message: "Olá, encontrei o site e preciso de abertura de porta.",
    faq: [
      {
        question: "A abertura pode ser feita sem trocar a fechadura?",
        answer:
          "Isso depende do mecanismo e do estado da fechadura. A necessidade de troca deve ser avaliada e combinada no atendimento.",
      },
      {
        question: "Devo tentar forçar a porta enquanto espero?",
        answer:
          "Evite forçar a porta ou a chave. Isso pode agravar o problema. Descreva o que aconteceu e solicite orientação diretamente ao profissional.",
      },
    ],
    related: [
      "chaveiro-24-horas",
      "troca-de-fechaduras",
      "chaveiro-residencial",
    ],
  },
  {
    slug: "troca-de-fechaduras",
    name: "Troca de fechaduras",
    short:
      "Troca de fechaduras ou de segredo, conforme o modelo e o estado do mecanismo.",
    title: "Troca de fechaduras na Freguesia do Ó",
    description:
      "Troca de fechaduras na Freguesia do Ó e bairros próximos. Consulte o Rodnei sobre compatibilidade, troca de segredo e substituição de fechaduras.",
    intro:
      "Mudou de imóvel, perdeu a chave ou percebeu uma falha na fechadura? Consulte a melhor forma de revisar o acesso à sua porta.",
    icon: "lock",
    situations: [
      "Mudança de moradores ou entrega de imóvel",
      "Chave extraviada e necessidade de rever o acesso",
      "Fechadura desgastada ou danificada",
    ],
    explanation:
      "Trocar o segredo e substituir a fechadura são serviços diferentes. A troca de segredo altera a combinação de acesso quando o mecanismo permite; a substituição troca componentes ou o conjunto. A compatibilidade com os recortes da porta e o estado das peças precisam ser avaliados antes da escolha.",
    prepare: [
      "Fotos da frente e da lateral da fechadura",
      "Informe o material da porta",
      "Explique se pretende alterar o acesso ou resolver um defeito",
    ],
    message:
      "Olá, encontrei o site e gostaria de solicitar um orçamento para a troca de fechadura.",
    faq: [
      {
        question: "Troca de segredo é igual a troca de fechadura?",
        answer:
          "Não. A troca de segredo modifica a combinação de acesso de um mecanismo compatível. Já a substituição envolve a troca de componentes ou do conjunto da fechadura.",
      },
      {
        question: "Posso comprar uma fechadura antes do atendimento?",
        answer:
          "Consulte primeiro a compatibilidade. Medidas, recortes e o tipo de porta influenciam a escolha e podem exigir adaptações.",
      },
    ],
    related: ["chaveiro-residencial", "abertura-de-portas", "copia-de-chaves"],
  },
  {
    slug: "copia-de-chaves",
    name: "Cópia de chaves",
    short:
      "Precisa de uma chave reserva? Consulte a disponibilidade de cópia para o seu modelo.",
    title: "Cópia de chaves na Freguesia do Ó",
    description:
      "Consulte cópia de chaves na Freguesia do Ó com o Rodnei Chaveiro, na Rua Dr. Elviro Carrilho, 309. Verifique disponibilidade para seu tipo de chave.",
    intro:
      "Uma chave reserva ajuda a organizar a rotina. Informe o tipo de chave ou envie uma foto para consultar a possibilidade de cópia.",
    icon: "key",
    situations: [
      "Preparar uma chave reserva",
      "Organizar o acesso entre moradores",
      "Substituir uma cópia com dificuldade de uso",
    ],
    explanation:
      "A qualidade da chave apresentada e a disponibilidade de um modelo compatível influenciam a cópia. Se a chave estiver torta, quebrada ou muito desgastada, avise antes. Para chaves automotivas com chip, a reprodução física pode precisar de avaliação eletrônica adicional. Consulte o atendimento antes de se deslocar.",
    prepare: [
      "A chave original, quando disponível",
      "Foto para identificar o tipo de chave",
      "Informe se a chave atual gira normalmente na fechadura",
    ],
    message:
      "Olá, encontrei o site e gostaria de consultar uma cópia de chave.",
    faq: [
      {
        question: "Vocês copiam todo tipo de chave?",
        answer:
          "A disponibilidade depende do modelo. Envie uma foto ou descreva a chave para confirmar antes da visita.",
      },
      {
        question: "Posso fazer cópia de uma chave desgastada?",
        answer:
          "O desgaste pode interferir no resultado. Informe as condições da chave para avaliar se ela serve como referência ou se outra solução é necessária.",
      },
    ],
    related: [
      "chaves-codificadas",
      "chaveiro-residencial",
      "chaveiro-automotivo",
    ],
  },
];
export const homeFaq: Faq[] = [
  {
    question: "O Rodnei Chaveiro atende 24 horas?",
    answer:
      "Sim. Entre em contato pelo telefone (11) 96087-7257 ou pelo WhatsApp a qualquer hora. Informe o problema e sua localização para combinar o atendimento.",
  },
  {
    question: "Quais bairros são atendidos?",
    answer:
      "Freguesia do Ó, Vila Albertina, Vila Palmeiras, Vila Siqueira e Limão. Para outro endereço, consulte a possibilidade de atendimento diretamente pelo WhatsApp.",
  },
  {
    question: "Como pedir um orçamento?",
    answer:
      "Descreva o serviço de que precisa, informe o bairro e envie uma foto da chave ou da fechadura, se possível. Para veículos, inclua a marca, o modelo e o ano. O valor é informado após a avaliação do serviço.",
  },
  {
    question: "Onde fica o Rodnei Chaveiro?",
    answer:
      "Na Rua Dr. Elviro Carrilho, 309, Vila Albertina, São Paulo, SP, CEP 02729-010. Antes de ir, entre em contato para combinar sua visita.",
  },
  {
    question: "O atendimento inclui chaves codificadas?",
    answer:
      "Sim. Envie a marca, o modelo e o ano do veículo para confirmar a compatibilidade e a possibilidade de atendimento para sua chave.",
  },
];
