"use client";
import { title } from "process";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { Select } from "antd";
import type { SelectProps } from "antd";

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function AskPage() {
  return (
    <>
      <div className="p-4 border-b border-neutral-300 flex justify-between gap-2">
        <h1 className="text-3xl bold">Nova Pergunta</h1>
      </div>
      <div className="mt-6 grid gap-4">
        <Input id="title" label="Assunto" />
        <div className="grid">
          <label htmlFor="title">Título</label>
          <Input
            style={{ width: "100%" }}
            onChange={(e) => console.log(e.target.value)}
            value={title}
            id="title"
          />
        </div>
        <div className="grid">
          <label htmlFor="tags">Tags</label>
          <Select
            mode="tags"
            style={{ width: "100%" }}
            onChange={handleChange}
            tokenSeparators={[",", " "]}
            options={options}
            id="tags"
          />
        </div>
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
