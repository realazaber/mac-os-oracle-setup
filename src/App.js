import "./css/main.css";

import { Fragment } from "react";

import Header from "./Header";
import Main from "./Main";
import Download from "./Download";
import Contact from "./Contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Download />
      <Contact />
    </Fragment>
  );
}

export default App;
