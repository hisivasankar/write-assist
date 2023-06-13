"use client";

import { useState, useTransition } from "react";

import TimerControl from "@/ui/timer";
import { WordCount } from "@/ui/word-count";
import Button from "@/ui/button";

import { RefreshCw, Eraser } from "lucide-react";

import { saveAnswer } from "@/server/actions";

interface QueuestionProps {
  question: string;
  onChange: Function;
  onRefresh: Function;
}

const getRandomQuestion = async () => {
  const response = await fetch("/api/question/random");
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const Question = (props: QueuestionProps) => {
  return (
    <>
      <div className="flex gap-2">
        <label htmlFor="question" className="text-xl">
          Question
        </label>
        <div className="flex-align-center items-center content-center">
          <button
            className="mt-1 hover:text-slate-600"
            onClick={() => {
              props.onRefresh();
            }}
          >
            <RefreshCw />
          </button>
        </div>
      </div>
      <textarea
        name="question"
        id="question"
        placeholder="Enter your question or click on the 'Get Random Question'"
        className="w-full h-[6rem] border-b outline-none resize-none text-sm font-sans font-normal focus:border-teal-700 focus:border-b-2"
        autoComplete="off"
        spellCheck="false"
        value={props.question}
        required
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
      ></textarea>
    </>
  );
};

interface AnswerProps {
  answer: string;
  onChange: Function;
  onReset: Function;
  onSubmit: Function;
}

const Answer = (props: AnswerProps) => {
  let [isPending, startTransition] = useTransition();
  return (
    <>
      <div className="flex justify-between">
        <label htmlFor="answer" className="text-xl">
          Answer
        </label>
        <div className="inline-flex items-center gap-2">
          <Button className="h-full" onClick={props.onReset}>
            <Eraser /> <span>Reset</span>
          </Button>
          <Button
            onClick={() => {
              startTransition(() => {
                props.onSubmit();
              });
            }}
            disabled={isPending}
          >
            Submit
          </Button>
        </div>
      </div>
      <textarea
        name="answer"
        id="answer"
        required
        placeholder="Start writing now..."
        className="w-full h-full min-h-[50rem] border p-2 rounded-sm text-sm font-sans font-normal outline-none focus:border-teal-700 focus:border-2 resize-none"
        autoComplete="off"
        spellCheck="false"
        value={props.answer}
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
      />
    </>
  );
};

interface ActionProps {}

const Actions = (props: ActionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl border-b">Actions</h2>
      <div>
        <TimerControl />
      </div>
    </div>
  );
};

interface InsightsProps {
  answer: string;
}
const Insights = (props: InsightsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl">Insights</h2>
      <hr />
      <p>Maximumn allowed word count is 500</p>
      <WordCount data={props.answer} />
    </div>
  );
};

export default function Editor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  return (
    <div className="w-full md:grid md:grid-cols-12 md:gap-4">
      <div className="md:col-span-10 flex flex-col gap-2 mt-10 mb-20">
        <div className="flex flex-col gap-4">
          <Question
            question={question}
            onChange={setQuestion}
            onRefresh={async () => {
              const response = await getRandomQuestion();
              setQuestion(response.question);
            }}
          />
          <Answer
            answer={answer}
            onChange={setAnswer}
            onSubmit={saveAnswer}
            onReset={() => setAnswer("")}
          />
        </div>
      </div>
      <aside className="flex flex-col gap-4 md:col-span-2 mt-10 w-1/2 md:w-full">
        <Actions />
        <Insights answer={answer} />
      </aside>
    </div>
  );
}
