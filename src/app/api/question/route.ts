import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const questions = await prisma.question.findMany({
    include: {
      tags: true,
      author: true,
      answers: true,
    },
  });

  return NextResponse.json(questions);
}

export async function POST(request: Request) {
  const { title, content, authorId, tags } = await request.json();

  const question = await prisma.question.create({
    data: {
      title,
      content,
      authorId,
    },
  });

  tags.forEach(async (tag: string) => {
    await prisma.tag.upsert({
      where: { tag },
      create: { tag },
      update: { tag },
    });
    await prisma.tagOnQuestion.create({
      data: { questionId: question.id, tagId: tag },
    });
  });

  return NextResponse.json({ question, success: true });
}
