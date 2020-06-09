import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "../../routes";
import Topbar from "../Topbar";
import Footer from "../Footer";

import "../../styles/globalStyles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
        <Topbar />

        <Routes />

        <Footer 
          authorName="Thiago Jacinto"
          githubLink="https://github.com/thiagojacinto"
          twitterLink="https://twitter.com/higuetari"
        />
      </BrowserRouter>

    </div>
  );
}

export default App;
