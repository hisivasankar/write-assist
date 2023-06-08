"use client";

import { useState } from "react";

import Timer from "@/ui/timer";
import { WordCount } from "@/ui/word-count";
import Button from "@/ui/button";

interface QueuestionProps {
  question: string;
  onChange: Function;
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
      <label htmlFor="question" className="text-xl">
        Question
      </label>
      <textarea
        name="question"
        id="question"
        placeholder="Enter your question or click on the 'Get Random Question'"
        className="w-full h-[6rem] border-b outline-none resize-none text-sm font-sans font-normal focus:border-teal-700 focus:border-b-2"
        autoComplete="off"
        spellCheck="false"
        value={props.question}
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
}

const Answer = (props: AnswerProps) => {
  return (
    <>
      <label htmlFor="answer" className="text-xl">
        Answer
      </label>
      <textarea
        name="answer"
        id="answer"
        placeholder="Start writing now..."
        className="w-full min-h-[50rem] border p-2 rounded-xl text-sm font-sans font-normal outline-none focus:border-teal-700 focus:border-2 resize-none"
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

interface ActionProps {
  onQuestionChange: Function;
}

const Actions = (props: ActionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">Actions</h2>
      <div className="flex flex-col gap-4">
        <label htmlFor="">Select a question type</label>
        <Button
          onClick={() => {
            props.onQuestionChange();
          }}
        >
          Get a random question
        </Button>
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
};

interface InsightsProps {
  answer: string;
}
const Insights = (props: InsightsProps) => {
  return (
    <div>
      <h2 className="text-xl">Insights</h2>
      <WordCount data={props.answer} />
    </div>
  );
};

export default function Page() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  return (
    <div className="w-full h-screen md:grid md:grid-cols-12 md:gap-4">
      <div className="md:col-span-10 flex flex-col gap-2 mt-10 mb-20">
        <div className="flex flex-col gap-4">
          <Question question={question} onChange={setQuestion} />
          <Answer answer={answer} onChange={setAnswer} />
        </div>
      </div>
      <aside className="flex flex-col gap-4 md:col-span-2 mt-10 w-1/2 md:w-full">
        <Actions
          onQuestionChange={async () => {
            const response = await getRandomQuestion();
            setQuestion(response.question);
          }}
        />
        <hr />
        <Insights answer={answer} />
      </aside>
    </div>
  );
}
