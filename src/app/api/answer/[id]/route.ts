import { prisma } from "@/lib/prisma";

export async function DELETE(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();

  await prisma.answer.delete({ where: { id: id! } });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
