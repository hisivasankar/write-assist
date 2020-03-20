import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import wordcount from "wordcount";

import "./Essays.css";

import metadata from "../../metadata/essays.json";

export const Essays = props => {
  const allEssays = metadata.map(essay => {
    return (
      <li>
        <Essay key={essay.id} title={essay.title} content={essay.content} />
      </li>
    );
  });
  return (
    <div className="essays">
      <ol>{allEssays}</ol>
    </div>
  );
};

class Essay extends React.Component {
  constructor(props) {
    super();
    const { title, content } = props;
    this.state = {
      title: title,
      essay: content
    };
  }
  render() {
    const { title, essay } = this.state;
    const content = essay || "";
    const count = wordcount(content);
    return (
      <div className="essay">
        <p className="title">{title}</p>
        <p className="metadata">
          <b>{count} </b>Words
        </p>
        <TextareaAutosize
          value={content.trim()}
          onChange={this.handleChange}
          width="100vw"
        />
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      essay: event.target.value
    });
  };
}
