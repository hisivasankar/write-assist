import React from "react";

export const WordCount = ({ data = "" }) => {
  const content = data.trim();
  const count = !!content ? content.split(" ").length : 0;
  return <span className="word-count">Word Count: {count}</span>;
};
