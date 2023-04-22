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
