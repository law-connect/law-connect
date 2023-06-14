"use client";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";

interface QuestionProps {
  question: {
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
      firstName: string;
      lastName: string;
    };
    answers: Array<{
      id: string;
    }>;
  };
}

export function Question({ question }: QuestionProps) {
  return (
    <li
      key={question.id}
      className="border-t last:border-b border-collapse border-neutral-300 px-10 py-6"
    >
      <Link href={`/q/${question.id}`}>
        <span className="text-xl font-semibold text-brand-primary hover:underline">
          {question.title}
        </span>
      </Link>
      <div className="flex gap-2 justify-between mt-3 flex-col md:flex-row">
        <div className="flex gap-2">
          {question.tags.map((tag: any) => (
            <button
              key={tag.tagId}
              className="bg-brand-shadow text-brand-primary px-2 rounded-sm"
            >
              {tag.tagId}
            </button>
          ))}
        </div>
        <div className="self-end md:self-center flex gap-1 items-center">
          <span>
            {question.answers.length}
            {question.answers.length === 1 ? " resposta" : " respostas"}
          </span>
          <span> · </span>
          <span className="text-brand-primary">
            {question.author.firstName} {question.author.lastName}
          </span>
          <span> · </span>
          {formatRelative(new Date(question.createdAt), new Date(), {
            locale: ptBR,
          })}
        </div>
      </div>
    </li>
  );
}
