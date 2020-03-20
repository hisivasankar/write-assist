import React from "react";

const regex = /(\s\s+)|(\n)/g;

export const WordCount = ({ data = "" }) => {
  let content = data.trim();
  content = content.replace(regex, " ");
  const words = !!content ? content.split(" ") : [];
  const count = words.length;
  return (
    <span className="word-count">
      Word Count: <b>{count}</b>
    </span>
  );
};
