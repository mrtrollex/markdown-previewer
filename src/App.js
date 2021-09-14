/*IMPORTS*/
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import defaultText from './defaultText';

function App() {
  let [markdown, setMarkdown] = useState(defaultText);

  return (
    <React.Fragment>
      <div className="comic-text">Markdown Previewer</div>
      <div className="markdown-container">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <ReactMarkdown children={markdown} className="markdown-preview" />
      </div>
    </React.Fragment>
  );
}

export default App;
