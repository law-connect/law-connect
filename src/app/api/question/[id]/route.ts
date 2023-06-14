import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();

  const questions = await prisma.question.findUnique({
    where: { id: id! },
    include: {
      tags: true,
      author: true,
      answers: {
        include: {
          author: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(questions), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function DELETE(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();

  await prisma.tagOnQuestion.deleteMany({ where: { questionId: id! } });
  await prisma.answer.deleteMany({ where: { questionId: id! } });
  await prisma.question.delete({ where: { id: id! } });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
