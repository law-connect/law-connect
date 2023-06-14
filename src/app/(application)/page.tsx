"use client";
import { useState, useEffect } from "react";
import { Button } from "../../components/button";
import { Question } from "../../components/question";
import { Skeleton } from "antd";

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

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/question`);
      const data = await res.json();
      setQuestions(data);
      setLoading(false);
    }

    fetchQuestions();
  }, []);

  return (
    <>
      <div className="p-4 flex justify-between">
        <h1 className="text-3xl bold">Perguntas Recentes</h1>
        <Button href="/ask">Nova Pergunta</Button>
      </div>
      {loading ? (
        <ul className="min-h-screen pb-10">
          {[1, 2, 3, 4, 5].map((value: number) => (
            <div
              key={value}
              className="border-t last:border-b border-collapse border-neutral-300 px-10 py-6"
            >
              <Skeleton active />
            </div>
          ))}
        </ul>
      ) : (
        <ul className="min-h-screen pb-10">
          {questions.map((question: Question) => (
            <Question key={question.id} question={question} />
          ))}
        </ul>
      )}
    </>
  );
}
