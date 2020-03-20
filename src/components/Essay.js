import React from "react";

import { Timer } from "./Timer";
import { WordCount } from "./SFComponents";
import "./Essay.css";

export class Essay extends React.Component {
  constructor() {
    super();
    this.state = {
      fontSize: 22,
      editorValue: ""
    };
  }
  render() {
    const styles = {
      fontSize: this.state.fontSize
    };
    return (
      <div className="editor">
        <div className="controls">
          <Timer />
          <WordCount data={this.state.editorValue} />
        </div>
        <textarea
          class="editor-input"
          style={styles}
          placeholder="Write here..."
          autoComplete="off"
          spellcheck="false"
          onChange={this.handleEdit}
        ></textarea>
      </div>
    );
  }

  handleEdit = event => {
    this.setState({
      editorValue: event.target.value
    });
  };
}
