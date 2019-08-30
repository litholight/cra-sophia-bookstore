import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/home.component";
import Header from "./components/header/header.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
