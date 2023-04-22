import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const questions = await prisma.question.findMany({
    include: {
      tags: true,
      author: true,
    },
  });

  return new Response(JSON.stringify(questions), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
