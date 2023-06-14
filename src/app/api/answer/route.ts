import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { questionId, content, authorId } = await request.json();

  const answer = await prisma.answer.create({
    data: {
      questionId,
      content,
      authorId,
    },
  });

  return NextResponse.json({ answer, success: true });
}
