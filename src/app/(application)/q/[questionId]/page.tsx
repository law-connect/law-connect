import { prisma } from "@/lib/prisma";
import { use } from "react";

async function fetchQuestion({ questionId }: { questionId: string }) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/question/${questionId}`
  );
  return res.json();
}

export default function QuestionPage({
  params,
}: {
  params: { questionId: string };
}) {
  const question = use(fetchQuestion({ questionId: params.questionId }));

  const answers = question?.answers;

  return (
    <>
      {question && (
        <>
          <h1>{question.title}</h1>
          <p>{question.content}</p>
          <p>
            {question.author.firstName} {question.author.lastName}
          </p>
        </>
      )}
      <ul>
        {answers &&
          answers.map((answer: any) => (
            <li key={answer.id}>
              <p>{answer.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
