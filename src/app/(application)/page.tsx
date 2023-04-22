import { Question, TagOnQuestion } from "@prisma/client";
import Link from "next/link";
import { use } from "react";

async function fetchQuestions() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/question`);
  return res.json();
}

export default function HomePage() {
  const questions = use<
    (Question & {
      tags: TagOnQuestion[];
    })[]
  >(fetchQuestions());

  return (
    <>
      <ul>
        {questions.map((question: any) => (
          <li key={question.id}>
            <Link href={`/q/${question.id}`}>{question.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
