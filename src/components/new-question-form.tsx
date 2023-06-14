"use client";
import { Editor } from "@tinymce/tinymce-react";
import { Input, Select } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./button";

interface NewQuestionFormProps {
  existingTags: string[];
}

export function NewQuestionForm({ existingTags }: NewQuestionFormProps) {
  const { push } = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/question`, {
      method: "POST",
      body: JSON.stringify({ title, content, authorId: user?.id, tags }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    return push("/");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <div className="grid">
        <label htmlFor="title">Título</label>
        <Input
          style={{ width: "100%" }}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id="title"
          required
        />
      </div>
      <div className="grid">
        <label htmlFor="tags">Tags</label>
        <Select
          mode="tags"
          style={{ width: "100%" }}
          onChange={(value) => setTags(value)}
          tokenSeparators={[",", " "]}
          options={existingTags.map((tag) => ({ label: tag, value: tag }))}
          id="tags"
        />
      </div>
      <div className="grid">
        <label htmlFor="question">Pergunta</label>
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
      </div>
      <Button type="submit" className="mt-4 ml-auto">
        Enviar Pergunta
      </Button>
    </form>
  );
}
