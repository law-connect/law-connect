import { PrismaClient, Role } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const natalie = await prisma.user.upsert({
    where: { oab: "00001" },
    create: {
      email: "natalie@lawconnect.com",
      oab: "12345",
      password: await hash("12345", 10),
      firstName: "Natalie",
      lastName: "Macedo",
      role: Role.ADMIN,
    },
    update: {
      email: "natalie@lawconnect.com",
      oab: "00001",
      password: await hash("12345", 10),
      firstName: "Natalie",
      lastName: "Macedo",
      role: Role.ADMIN,
    },
  });

  const alice = await prisma.user.upsert({
    where: { oab: "00002" },
    create: {
      email: "alice@lawconnect.com",
      oab: "12346",
      password: await hash("12345", 10),
      firstName: "Alice",
      lastName: "Silva",
    },
    update: {
      email: "alice@lawconnect.com",
      oab: "12346",
      password: await hash("12345", 10),
      firstName: "Alice",
      lastName: "Silva",
    },
  });

  const bob = await prisma.user.upsert({
    where: { oab: "00003" },
    create: {
      email: "bob@lawconnect.com",
      oab: "12347",
      password: await hash("12345", 10),
      firstName: "Bob",
      lastName: "Souza",
    },
    update: {
      email: "bob@lawconnect.com",
      oab: "12347",
      password: await hash("12345", 10),
      firstName: "Bob",
      lastName: "Souza",
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

  const question_penal = await prisma.question.upsert({
    where: { id: "clgpdlvxz000008l6bbs4ajqo" },
    create: {
      id: "clgpdlvxz000008l6bbs4ajqo",
      title: "Pergunta sobre direito penal",
      content: "Pergunta blablabla blablab blablabla blabla",
      authorId: natalie.id,
      tags: { create: { tagId: tag_penal.tag } },
    },
    update: {
      id: "clgpdlvxz000008l6bbs4ajqo",
      title: "Pergunta sobre direito penal",
      content: "Pergunta blablabla blablab blablabla blabla",
      authorId: natalie.id,
      tags: { create: { tagId: tag_penal.tag } },
    },
  });

  const answer_penal_1 = await prisma.answer.upsert({
    where: { id: "clgpdu4ym000108l4hqcjbjgv" },
    create: {
      id: "clgpdu4ym000108l4hqcjbjgv",
      content: "Resposta da Alice blablabla blablab blablabla blabla",
      authorId: alice.id,
      questionId: question_penal.id,
    },
    update: {
      id: "clgpdu4ym000108l4hqcjbjgv",
      content: "Resposta da Alice blablabla blablab blablabla blabla",
      authorId: alice.id,
      questionId: question_penal.id,
    },
  });

  const answer_penal_2 = await prisma.answer.upsert({
    where: { id: "clgpduwr4000208l4chvegu6c" },
    create: {
      id: "clgpduwr4000208l4chvegu6c",
      content: "Resposta do Bob blablabla blablab blablabla blabla",
      authorId: bob.id,
      questionId: question_penal.id,
    },
    update: {
      id: "clgpduwr4000208l4chvegu6c",
      content: "Resposta da Bob blablabla blablab blablabla blabla",
      authorId: bob.id,
      questionId: question_penal.id,
    },
  });

  const question_civil = await prisma.question.upsert({
    where: { id: "clgpdvuus000408l4hrmmb044" },
    create: {
      id: "clgpdvuus000408l4hrmmb044",
      title: "Pergunta sobre direito civil",
      content: "Pergunta blablabla blablab blablabla blabla",
      authorId: alice.id,
      tags: { create: { tagId: tag_civil.tag } },
    },
    update: {
      id: "clgpdvuus000408l4hrmmb044",
      title: "Pergunta sobre direito civil",
      content: "Pergunta blablabla blablab blablabla blabla",
      authorId: alice.id,
      tags: { create: { tagId: tag_civil.tag } },
    },
  });

  const answer_civil_1 = await prisma.answer.upsert({
    where: { id: "clgpdw38q000508l4cu2t6j7v" },
    create: {
      id: "clgpdw38q000508l4cu2t6j7v",
      content: "Resposta da Natalie blablabla blablab blablabla blabla",
      authorId: natalie.id,
      questionId: question_civil.id,
    },
    update: {
      id: "clgpdw38q000508l4cu2t6j7v",
      content: "Resposta da Natalie blablabla blablab blablabla blabla",
      authorId: natalie.id,
      questionId: question_civil.id,
    },
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
