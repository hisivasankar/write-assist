import React from "react";
import { Link } from "react-router-dom";

import "./AppHeader.css";

export const AppHeader = props => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Editor</Link>
          </li>
          <li>
            <Link to="/essays">Essay Listing</Link>
          </li>
          <li>
            <Link to="/insights">Writing Insights</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
