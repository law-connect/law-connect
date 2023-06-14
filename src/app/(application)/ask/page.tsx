import { use } from "react";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

export default function AskPage() {
  return (
    <>
      <div className="p-4 border-b border-neutral-300 flex justify-between gap-2">
        <h1 className="text-3xl bold">Nova Pergunta</h1>
      </div>
      <div className="mt-6 grid gap-4">
        <Input id="title" label="Assunto" />
        <Input id="tags" label="Tags" />
        <div className="grid">
          <label htmlFor="question">Pergunta</label>
          <textarea
            className="bg-white border px-2 py-1 border-neutral-300 rounded-sm outline outline-4 outline-transparent focus-within:border-neutral-500 focus-within:outline-neutral-200"
            id="question"
            name="question"
            rows={8}
          ></textarea>
        </div>
        <Button className="mt-4 ml-auto">Enviar Pergunta</Button>
      </div>
    </>
  );
}
