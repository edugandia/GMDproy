import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import MainPage from "../pages/mainPage";
import LegalPage from "../pages/legalPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/aviso-legal" render={() => <LegalPage />} />
      </Switch>
    </div>
  );
};

export default App;
