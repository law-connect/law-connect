import { PrismaClient, Role } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const natalie = await prisma.user.upsert({
    where: { oab: "12345" },
    create: {
      email: "natalie@lawconnect.com",
      oab: "12345",
      password: await hash("1aw_C0nnect", 10),
      firstName: "Natalie",
      lastName: "Macedo",
      role: Role.ADMIN,
    },
    update: {
      email: "natalie@lawconnect.com",
      oab: "12345",
      password: await hash("1aw_C0nnect", 10),
      firstName: "Natalie",
      lastName: "Macedo",
      role: Role.ADMIN,
    },
  });

  const alice = await prisma.user.upsert({
    where: { oab: "12346" },
    create: {
      email: "alice@lawconnect.com",
      oab: "12346",
      password: await hash("1aw_C0nnect", 10),
      firstName: "Alice",
      lastName: "Silva",
    },
    update: {
      email: "alice@lawconnect.com",
      oab: "12346",
      password: await hash("1aw_C0nnect", 10),
      firstName: "Alice",
      lastName: "Silva",
    },
  });

  const bob = await prisma.user.upsert({
    where: { oab: "12347" },
    create: {
      email: "bob@lawconnect.com",
      oab: "12347",
      password: await hash("1aw_C0nnect", 10),
      firstName: "Bob",
      lastName: "Souza",
    },
    update: {
      email: "bob@lawconnect.com",
      oab: "12347",
      password: await hash("1aw_C0nnect", 10),
      firstName: "Bob",
      lastName: "Souza",
    },
  });

  const pedro = await prisma.user.upsert({
    where: { oab: "12348" },
    create: {
      email: "pedro@lawconnect.com",
      oab: "12348",
      password: await hash("1aw_C0nnect", 10),
      firstName: "Pedro",
      lastName: "Carvalho",
    },
    update: {
      email: "pedro@lawconnect.com",
      oab: "12348",
      password: await hash("1aw_C0nnect", 10),
      firstName: "Pedro",
      lastName: "Carvalho",
    },
  });

  const tag_penal = await prisma.tag.upsert({
    where: { tag: "direito-penal" },
    create: {
      tag: "direito-penal",
    },
    update: {
      tag: "direito-penal",
    },
  });

  const tag_civil = await prisma.tag.upsert({
    where: { tag: "direito-civil" },
    create: {
      tag: "direito-civil",
    },
    update: {
      tag: "direito-civil",
    },
  });

  const q1 = await prisma.question.upsert({
    where: { id: "clivp6qh10001ml08tlrdtjzx" },
    create: {
      id: "clivp6qh10001ml08tlrdtjzx",
      title: "Posso processar meus pais por terem me feito burro?",
      content: "Mesma do título",
      authorId: pedro.id,
      createdAt: "2023-06-14T12:38:04.166Z",
      updatedAt: "2023-06-14T12:38:04.166Z",
    },
    update: {
      id: "clivp6qh10001ml08tlrdtjzx",
      title: "Posso processar meus pais por terem me feito burro?",
      content: "Mesma do título",
      authorId: pedro.id,
      createdAt: "2023-06-14T12:38:04.166Z",
      updatedAt: "2023-06-14T12:38:04.166Z",
    },
  });

  await prisma.answer.upsert({
    where: { id: "clivq006p0005m508dar7op49" },
    create: {
      id: "clivq006p0005m508dar7op49",
      content: "Isso é um pouco vago, o que eles fizeram com você?",
      authorId: bob.id,
      questionId: q1.id,
      createdAt: "2023-06-14T13:00:49.662Z",
      updatedAt: "2023-06-14T13:00:49.662Z",
    },
    update: {
      id: "clivq006p0005m508dar7op49",
      content: "Isso é um pouco vago, o que eles fizeram com você?",
      authorId: bob.id,
      questionId: q1.id,
      createdAt: "2023-06-14T13:00:49.662Z",
      updatedAt: "2023-06-14T13:00:49.662Z",
    },
  });

  const q2 = await prisma.question.upsert({
    where: { id: "clivpgurv0003ml08ll9wpkqm" },
    create: {
      id: "clivpgurv0003ml08ll9wpkqm",
      title:
        "Quais são os requisitos legais para obter a guarda de um filho em caso de divórcio?",
      content:
        "Estou com dificuldades em um caso de divórcio e gostaria de ter esta dúvida sanada",
      authorId: natalie.id,
      createdAt: "2023-06-14T12:45:56.185Z",
      updatedAt: "2023-06-14T12:45:56.185Z",
    },
    update: {
      id: "clivpgurv0003ml08ll9wpkqm",
      title:
        "Quais são os requisitos legais para obter a guarda de um filho em caso de divórcio?",
      content:
        "Estou com dificuldades em um caso de divórcio e gostaria de ter esta dúvida sanada",
      authorId: natalie.id,
      createdAt: "2023-06-14T12:45:56.185Z",
      updatedAt: "2023-06-14T12:45:56.185Z",
    },
  });

  await prisma.answer.upsert({
    where: { id: "clivpk17a0001m508lkgccej9" },
    create: {
      id: "clivpk17a0001m508lkgccej9",
      content:
        "Os requisitos legais para obter a guarda de um filho em caso de divórcio variam dependendo da legislação do seu país. Geralmente, os tribunais levam em consideração o melhor interesse da criança, considerando fatores como estabilidade, saúde e capacidade dos pais de cuidar do filho. Espero ter ajudado 😊",
      authorId: alice.id,
      questionId: q2.id,
      createdAt: "2023-06-14T12:48:24.483Z",
      updatedAt: "2023-06-14T12:48:24.483Z",
    },
    update: {
      id: "clivpk17a0001m508lkgccej9",
      content:
        "Os requisitos legais para obter a guarda de um filho em caso de divórcio variam dependendo da legislação do seu país. Geralmente, os tribunais levam em consideração o melhor interesse da criança, considerando fatores como estabilidade, saúde e capacidade dos pais de cuidar do filho. Espero ter ajudado 😊",
      authorId: alice.id,
      questionId: q2.id,
      createdAt: "2023-06-14T12:48:24.483Z",
      updatedAt: "2023-06-14T12:48:24.483Z",
    },
  });

  const q3 = await prisma.question.upsert({
    where: { id: "clivplp4m0003m508jitgnxvn" },
    create: {
      id: "clivplp4m0003m508jitgnxvn",
      title:
        "Quais estratégias você recomendaria ao lidar com um cliente difícil durante uma negociação ou mediação?",
      content:
        "Tenho um cliente não-cooperativo em um caso, e gostaria de informações de como lidar com ele, obrigado.",
      authorId: alice.id,
      createdAt: "2023-06-14T12:49:42.148Z",
      updatedAt: "2023-06-14T12:49:42.148Z",
    },
    update: {
      id: "clivplp4m0003m508jitgnxvn",
      title:
        "Quais estratégias você recomendaria ao lidar com um cliente difícil durante uma negociação ou mediação?",
      content:
        "Tenho um cliente não-cooperativo em um caso, e gostaria de informações de como lidar com ele, obrigado.",
      authorId: alice.id,
      createdAt: "2023-06-14T12:49:42.148Z",
      updatedAt: "2023-06-14T12:49:42.148Z",
    },
  });

  await prisma.answer.upsert({
    where: { id: "clivpmorv0001l608jackl9nq" },
    create: {
      id: "clivpmorv0001l608jackl9nq",
      content:
        "Ao lidar com um cliente difícil durante uma negociação ou mediação, é importante manter a calma e a empatia. Tente estabelecer uma comunicação clara e transparente com o cliente, ouvindo suas preocupações e explicando as opções disponíveis. Se necessário, apresente informações objetivas e realistas para ajudar o cliente a tomar decisões informadas. Além disso, trabalhe em conjunto para identificar interesses comuns e buscar soluções que atendam aos melhores interesses do cliente.",
      authorId: bob.id,
      questionId: q3.id,
      createdAt: "2023-06-14T12:50:28.460Z",
      updatedAt: "2023-06-14T12:50:28.460Z",
    },
    update: {
      id: "clivpmorv0001l608jackl9nq",
      content:
        "Ao lidar com um cliente difícil durante uma negociação ou mediação, é importante manter a calma e a empatia. Tente estabelecer uma comunicação clara e transparente com o cliente, ouvindo suas preocupações e explicando as opções disponíveis. Se necessário, apresente informações objetivas e realistas para ajudar o cliente a tomar decisões informadas. Além disso, trabalhe em conjunto para identificar interesses comuns e buscar soluções que atendam aos melhores interesses do cliente.",
      authorId: bob.id,
      questionId: q3.id,
      createdAt: "2023-06-14T12:50:28.460Z",
      updatedAt: "2023-06-14T12:50:28.460Z",
    },
  });

  await prisma.answer.upsert({
    where: { id: "clivpmorv0001l608jackl9nq" },
    create: {
      id: "clivpmorv0001l608jackl9nq",
      content:
        "Ao lidar com um cliente difícil durante uma negociação ou mediação, é essencial adotar uma abordagem de gestão de conflitos eficaz. Primeiro, é importante estabelecer uma relação de confiança com o cliente, demonstrando empatia e compreensão em relação às suas preocupações. Ouça atentamente suas necessidades e expectativas, permitindo que eles se sintam ouvidos e respeitados.\n\nEm seguida, é fundamental adotar uma postura colaborativa, explicando ao cliente a importância de um ambiente de negociação construtivo. Forneça informações claras sobre os riscos e benefícios de cada curso de ação, ajudando o cliente a tomar decisões informadas. Se surgirem emoções intensas, procure acalmar os ânimos e direcionar a discussão para soluções práticas.\n\nAlém disso, esteja preparado para gerenciar conflitos internos entre partes adversas. Isso pode incluir a identificação de interesses comuns e a exploração de opções de ganho mútuo. Mantenha a comunicação aberta, incentivando a negociação direta entre as partes sempre que possível.\n\nPor fim, se o cliente continuar sendo difícil ou intransigente, é importante estabelecer limites claros e realistas. Explique as consequências potenciais de suas ações e forneça aconselhamento profissional sobre a melhor estratégia a ser adotada.\n\nNo entanto, cada cliente e situação são únicos, e é essencial adaptar a abordagem conforme necessário. A experiência e a intuição do advogado desempenham um papel fundamental ao lidar com clientes difíceis, equilibrando as necessidades legais e emocionais envolvidas.",
      authorId: natalie.id,
      questionId: q3.id,
      createdAt: "2023-06-14T12:51:57.776Z",
      updatedAt: "2023-06-14T12:51:57.776Z",
    },
    update: {
      id: "clivpmorv0001l608jackl9nq",
      content:
        "Ao lidar com um cliente difícil durante uma negociação ou mediação, é essencial adotar uma abordagem de gestão de conflitos eficaz. Primeiro, é importante estabelecer uma relação de confiança com o cliente, demonstrando empatia e compreensão em relação às suas preocupações. Ouça atentamente suas necessidades e expectativas, permitindo que eles se sintam ouvidos e respeitados.\n\nEm seguida, é fundamental adotar uma postura colaborativa, explicando ao cliente a importância de um ambiente de negociação construtivo. Forneça informações claras sobre os riscos e benefícios de cada curso de ação, ajudando o cliente a tomar decisões informadas. Se surgirem emoções intensas, procure acalmar os ânimos e direcionar a discussão para soluções práticas.\n\nAlém disso, esteja preparado para gerenciar conflitos internos entre partes adversas. Isso pode incluir a identificação de interesses comuns e a exploração de opções de ganho mútuo. Mantenha a comunicação aberta, incentivando a negociação direta entre as partes sempre que possível.\n\nPor fim, se o cliente continuar sendo difícil ou intransigente, é importante estabelecer limites claros e realistas. Explique as consequências potenciais de suas ações e forneça aconselhamento profissional sobre a melhor estratégia a ser adotada.\n\nNo entanto, cada cliente e situação são únicos, e é essencial adaptar a abordagem conforme necessário. A experiência e a intuição do advogado desempenham um papel fundamental ao lidar com clientes difíceis, equilibrando as necessidades legais e emocionais envolvidas.",
      authorId: natalie.id,
      questionId: q3.id,
      createdAt: "2023-06-14T12:51:57.776Z",
      updatedAt: "2023-06-14T12:51:57.776Z",
    },
  });

  const q4 = await prisma.question.upsert({
    where: { id: "clivpw1fj0005ml08hqtx5ppj" },
    create: {
      id: "clivpw1fj0005ml08hqtx5ppj",
      title:
        "Como fazer um divórcio judicial por meio de acordo entre as partes?",
      content:
        "Meus clientes estão em comum acordo, mas tem filhos menores de idade. Sei que isso faz com que eu não possa realizar esse divórcio de forma extrajudicial, o que fazer?",
      authorId: bob.id,
      createdAt: "2023-06-14T12:57:45.880Z",
      updatedAt: "2023-06-14T12:57:45.880Z",
    },
    update: {
      id: "clivpw1fj0005ml08hqtx5ppj",
      title:
        "Como fazer um divórcio judicial por meio de acordo entre as partes?",
      content:
        "Meus clientes estão em comum acordo, mas tem filhos menores de idade. Sei que isso faz com que eu não possa realizar esse divórcio de forma extrajudicial, o que fazer?",
      authorId: bob.id,
      createdAt: "2023-06-14T12:57:45.880Z",
      updatedAt: "2023-06-14T12:57:45.880Z",
    },
  });

  await prisma.answer.upsert({
    where: { id: "clivpx5v60003l60817okppdz" },
    create: {
      id: "clivpx5v60003l60817okppdz",
      content:
        "Olá Bob, \n\nÉ bem simples. Tudo que você precisa fazer é redigir o acordo, confirmar que as partes anuem com que está escrito, adicione as assinaturas dessas e assine como advogado. Após isso, é só protocolar na vara cível ou de família que seja competente, peça pela homologação do acordo e pronto.\n\nBoa mediação!",

      authorId: natalie.id,
      questionId: q4.id,
      createdAt: "2023-06-14T12:58:37.055Z",
      updatedAt: "2023-06-14T12:58:37.055Z",
    },
    update: {
      id: "clivpx5v60003l60817okppdz",
      content:
        "Olá Bob, \n\nÉ bem simples. Tudo que você precisa fazer é redigir o acordo, confirmar que as partes anuem com que está escrito, adicione as assinaturas dessas e assine como advogado. Após isso, é só protocolar na vara cível ou de família que seja competente, peça pela homologação do acordo e pronto.\n\nBoa mediação!",

      authorId: natalie.id,
      questionId: q4.id,
      createdAt: "2023-06-14T12:58:37.055Z",
      updatedAt: "2023-06-14T12:58:37.055Z",
    },
  });

  const q5 = await prisma.question.upsert({
    where: { id: "clivq30b00003mr08x0rgzoc0" },
    create: {
      id: "clivq30b00003mr08x0rgzoc0",
      title: "Primeira audiência penal",
      content:
        "Sou advogada criminal e vou fazer minha primeira audiência, como devo me portar e o que fazer?",
      authorId: alice.id,
      createdAt: "2023-06-14T13:03:09.046Z",
      updatedAt: "2023-06-14T13:03:09.046Z",
    },
    update: {
      id: "clivq30b00003mr08x0rgzoc0",
      title: "Primeira audiência penal",
      content:
        "Sou advogada criminal e vou fazer minha primeira audiência, como devo me portar e o que fazer?",
      authorId: alice.id,
      createdAt: "2023-06-14T13:03:09.046Z",
      updatedAt: "2023-06-14T13:03:09.046Z",
    },
  });

  await prisma.answer.upsert({
    where: { id: "clivq3t530007m508glf6bwis" },
    create: {
      id: "clivq3t530007m508glf6bwis",
      content:
        "Que legal, seja bem vinda a esse mundo, vou te dar algumas dicas para que você faça uma boa estréia:\n\n1 -Estude bem o processo. É extremamente importante o conhecimento sobre todas as partes do processo, faça anotações sobre os pontos mais relevantes e esquematize os seus passos.\n2-  Tenha uma cópia do processo impressa, desta forma você poderá fazer anotações e verificar divergências entre o que é dito na audiência e o que consta no processo.\n3- Em caso de ter algum pedido válido negado, peça para que conste em ata e alegue cerceamento de defesa\n4- Se houver testemunha, você deve olhar diretamente para ela durante a inquirição.\n5- Não permita a inversão de ordem das testemunhas, se o juiz pedir para que as testemunhas de defesa sejam ouvidas primeiro, negue!\n6- Se o seu cliente estiver algemado, peça para que este seja ouvida sem as algemas, use a súmula vinculante número 11.\n7-Por fim, lembre de sempre manter o profissionalismo, ser técnico e educado. \n\nBoa audiência!",
      authorId: natalie.id,
      questionId: q5.id,
      createdAt: "2023-06-14T13:03:47.271Z",
      updatedAt: "2023-06-14T13:03:47.271Z",
    },
    update: {
      id: "clivq3t530007m508glf6bwis",
      content:
        "Que legal, seja bem vinda a esse mundo, vou te dar algumas dicas para que você faça uma boa estréia:\n\n1 -Estude bem o processo. É extremamente importante o conhecimento sobre todas as partes do processo, faça anotações sobre os pontos mais relevantes e esquematize os seus passos.\n2-  Tenha uma cópia do processo impressa, desta forma você poderá fazer anotações e verificar divergências entre o que é dito na audiência e o que consta no processo.\n3- Em caso de ter algum pedido válido negado, peça para que conste em ata e alegue cerceamento de defesa\n4- Se houver testemunha, você deve olhar diretamente para ela durante a inquirição.\n5- Não permita a inversão de ordem das testemunhas, se o juiz pedir para que as testemunhas de defesa sejam ouvidas primeiro, negue!\n6- Se o seu cliente estiver algemado, peça para que este seja ouvida sem as algemas, use a súmula vinculante número 11.\n7-Por fim, lembre de sempre manter o profissionalismo, ser técnico e educado. \n\nBoa audiência!",
      authorId: natalie.id,
      questionId: q5.id,
      createdAt: "2023-06-14T13:03:47.271Z",
      updatedAt: "2023-06-14T13:03:47.271Z",
    },
  });

  await prisma.tagOnQuestion.upsert({
    where: { tagId_questionId: { questionId: q1.id, tagId: tag_civil.tag } },
    create: { questionId: q1.id, tagId: tag_civil.tag },
    update: { questionId: q1.id, tagId: tag_civil.tag },
  });

  await prisma.tagOnQuestion.upsert({
    where: { tagId_questionId: { questionId: q2.id, tagId: tag_civil.tag } },
    create: { questionId: q2.id, tagId: tag_civil.tag },
    update: { questionId: q2.id, tagId: tag_civil.tag },
  });

  await prisma.tagOnQuestion.upsert({
    where: { tagId_questionId: { questionId: q3.id, tagId: tag_civil.tag } },
    create: { questionId: q3.id, tagId: tag_civil.tag },
    update: { questionId: q3.id, tagId: tag_civil.tag },
  });

  await prisma.tagOnQuestion.upsert({
    where: { tagId_questionId: { questionId: q4.id, tagId: tag_civil.tag } },
    create: { questionId: q4.id, tagId: tag_civil.tag },
    update: { questionId: q4.id, tagId: tag_civil.tag },
  });

  await prisma.tagOnQuestion.upsert({
    where: { tagId_questionId: { questionId: q5.id, tagId: tag_penal.tag } },
    create: { questionId: q5.id, tagId: tag_penal.tag },
    update: { questionId: q5.id, tagId: tag_penal.tag },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
