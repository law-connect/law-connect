"use client";
import { DeleteFilled } from "@ant-design/icons";
import { Answer, Question, Tag, User } from "@prisma/client";
import { Editor } from "@tinymce/tinymce-react";
import { Button as AntButton, Popconfirm, Skeleton } from "antd";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../../../../components/button";

export default function QuestionPage({
  params,
}: {
  params: { questionId: string };
}) {
  const { push } = useRouter();
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState(
    {} as Question & { answers: Answer[]; tags: Tag[]; author: User }
  );

  const fetchQuestion = useCallback(async () => {
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/question/${params.questionId}`
    );
    const data: Question & { answers: Answer[]; tags: Tag[]; author: User } =
      await res.json();

    setQuestion(data);
    setLoading(false);
  }, [params.questionId]);

  useEffect(() => {
    fetchQuestion();
  }, [fetchQuestion]);

  const answers = question?.answers;

  const { data: session } = useSession();
  const user = session?.user;

  const [content, setContent] = useState("");

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/answer`, {
      method: "POST",
      body: JSON.stringify({
        content,
        authorId: user?.id,
        questionId: params.questionId,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    setContent("");
    await fetchQuestion();
  }

  async function handleDeleteQuestion() {
    await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/question/${params.questionId}`,
      {
        method: "DELETE",
      }
    );

    push("/");
  }

  async function handleDeleteAnswer(answerId: string) {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/answer/${answerId}`, {
      method: "DELETE",
    });

    await fetchQuestion();
  }

  return (
    <>
      {loading ? (
        <>
          <>
            <div className="p-4 border border-neutral-300 flex justify-between gap-2 bg-neutral-100 rounded-t-sm">
              <Skeleton.Input active />
            </div>
            <div className="py-6 px-10 border-b border-x border-neutral-300 bg-neutral-100 rounded-b-sm">
              <Skeleton active />
            </div>
          </>
          <ul className="min-h-screen pb-10">
            {[1, 2, 3, 4, 5].map((value: number) => (
              <div
                key={value}
                className="py-6 px-10 border-b border-neutral-300"
              >
                <Skeleton active />
              </div>
            ))}
          </ul>
        </>
      ) : (
        <>
          {question && (
            <>
              <div className="p-4 border border-neutral-300 flex justify-between gap-2 bg-neutral-100 rounded-t-sm">
                <h1 className="text-3xl bold">{question.title}</h1>
              </div>
              <div className="py-6 px-10 border-b border-x border-neutral-300 bg-neutral-100 rounded-b-sm">
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
                <div
                  className="pb-6"
                  dangerouslySetInnerHTML={{ __html: question.content }}
                />
                <div className="flex gap-2 justify-between mt-3">
                  {user?.id === question.authorId ? (
                    <Popconfirm
                      title="Tem certeza que deseja apagar sua pergunta?"
                      description="Essa ação é irreversível"
                      onConfirm={handleDeleteQuestion}
                      onCancel={() => {}}
                      okText="Apagar"
                      cancelText="Cancelar"
                    >
                      <AntButton
                        type="link"
                        shape="circle"
                        icon={<DeleteFilled />}
                      />
                    </Popconfirm>
                  ) : (
                    <div></div>
                  )}
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
                  <div
                    className="pb-6"
                    dangerouslySetInnerHTML={{ __html: answer.content }}
                  />
                  <div className="flex gap-2 justify-between mt-3">
                    {user?.id === answer.authorId ? (
                      <Popconfirm
                        title="Tem certeza que deseja apagar sua resposta?"
                        description="Essa ação é irreversível"
                        onConfirm={() => handleDeleteAnswer(answer.id)}
                        onCancel={() => {}}
                        okText="Apagar"
                        cancelText="Cancelar"
                      >
                        <AntButton
                          type="link"
                          shape="circle"
                          icon={<DeleteFilled />}
                        />
                      </Popconfirm>
                    ) : (
                      <div></div>
                    )}
                    <div className="flex gap-1 items-center">
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
          <form onSubmit={handleSubmit} className="mt-20 grid">
            <h2 className="p-4 mb-4 text-3xl bold">Responder</h2>
            <div className="border border-neutral-300 rounded-sm focus-within:border-brand-primary">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINY_API}
                initialValue={content}
                init={{
                  branding: false,
                  skin: "borderless",
                  content_css: "borderless",
                  height: 400,
                  menubar: false,
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
                onChange={(e) => setContent(e.target.getContent())}
              />
            </div>

            <Button type="submit" className="mt-8 ml-auto">
              Enviar Resposta
            </Button>
          </form>
        </>
      )}
    </>
  );
}
