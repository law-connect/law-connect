import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const tags = await prisma.tag.findMany({
    include: {
      questions: true,
    },
  });

  return new Response(JSON.stringify(tags), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
