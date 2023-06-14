import { Tag } from "@prisma/client";
import { use } from "react";
import { Button } from "../../components/button";
import { Question } from "../../components/question";

interface Question {
  id: string;
  title: string;
  score: number;
  createdAt: string;
  updatedAt: string;
  tags: [
    {
      tagId: string;
    }
  ];
  author: {
    id: string;
    firstName: string;
    lastName: string;
  };
  answers: Array<{
    id: string;
  }>;
}

async function fetchQuestions() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/question`);
  return res.json();
}

async function fetchTags() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/tag`);
  return res.json();
}

export default function HomePage() {
  const questions = use<Question[]>(fetchQuestions());
  const tags = use<Tag[]>(fetchTags());

  return (
    <>
      <div className="p-4 flex justify-between">
        <h1 className="text-3xl bold">Perguntas Recentes</h1>
        <Button href="/ask">Nova Pergunta</Button>
      </div>
      <ul className="min-h-screen pb-10">
        {questions.map((question: Question) => (
          <>
            <Question key={question.id} question={question} />
          </>
        ))}
      </ul>
    </>
  );
}
