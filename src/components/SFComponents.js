import React from "react";

export const WordCount = ({ data }) => {
  const content = data.trim();
  const count = content.split(" ").length;
  return <span className="word-count">Word Count: {count}</span>;
};
