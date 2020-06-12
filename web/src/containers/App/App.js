import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../redux/store";

import Routes from "../../routes";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";

import "../../styles/globalStyles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app" data-testid="app">
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
    </Provider>
  );
}

export default App;
