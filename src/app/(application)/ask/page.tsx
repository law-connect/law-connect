"use client";
import { useState, useEffect } from "react";
import { NewQuestionForm } from "../../../components/new-question-form";
import { Tag } from "@prisma/client";

export default function AskPage() {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    async function fetchTags() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tag`);
      const data: Tag[] = await res.json();
      setTags(data.map((tag) => tag.tag));
    }

    fetchTags();
  }, []);

  return (
    <>
      <div className="p-4 border-b border-neutral-300 flex justify-between gap-2">
        <h1 className="text-3xl bold">Nova Pergunta</h1>
      </div>
      <NewQuestionForm existingTags={tags} />
    </>
  );
}
