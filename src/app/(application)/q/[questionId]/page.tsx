import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";
import { use } from "react";
import { Button } from "../../../../components/button";

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
          <div className="p-4 border border-neutral-300 flex justify-between gap-2 bg-neutral-100 rounded-sm">
            <h1 className="text-3xl bold">{question.title}</h1>
          </div>
          <div className="py-6 px-10 border-b border-x border-neutral-300 bg-neutral-100 rounded-sm">
            <div className="flex gap-2 mb-6">
              {question.tags.map((tag: any) => (
                <button
                  key={tag.tagId}
                  className="bg-brand-shadow text-brand-primary px-2 rounded-sm"
                >
                  {tag.tagId}
                </button>
              ))}
            </div>
            <p className="pb-6">{question.content}</p>
            <div className="flex gap-2 justify-end mt-3">
              <div className="flex gap-1 items-center">
                <span className="text-brand-primary">
                  {question.author.firstName} {question.author.lastName}
                </span>
                <span> · </span>
                {formatRelative(new Date(question.createdAt), new Date(), {
                  locale: ptBR,
                })}
              </div>
            </div>
          </div>
        </>
      )}
      {answers && (
        <ul>
          {answers.map((answer: any) => (
            <li
              key={answer.id}
              className="py-6 px-10 border-b border-neutral-300"
            >
              <p className="pb-6">{answer.content}</p>
              <div className="flex gap-2 justify-end mt-3">
                <div className="flex gap-1">
                  <span className="text-brand-primary">
                    {answer.author.firstName} {answer.author.lastName}
                  </span>
                  <span> · </span>
                  {formatRelative(new Date(answer.createdAt), new Date(), {
                    locale: ptBR,
                  })}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-20 grid">
        <h2 className="p-4 mb-4 text-3xl bold">Enviar Resposta</h2>
        <textarea
          className="bg-white border px-2 py-1 border-neutral-300 rounded-sm outline outline-4 outline-transparent focus-within:border-neutral-500 focus-within:outline-neutral-200"
          id="answer"
          name="answer"
          rows={8}
        ></textarea>
        <Button className="mt-8 ml-auto">Responder</Button>
      </div>
    </>
  );
}
