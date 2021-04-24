import React from "react";
import Header from "./components/Header";
import ImageScreen from "./components/ImageScreen";
import CameraScreen from "./components/CameraScreen";
import { Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="container-body">
      <div className="header">
        <Header />
        <Menu />
      </div>
      <Switch>
        <Route path="/" exact>
          <ImageScreen />
        </Route>
        <Route path="/camera">
          <CameraScreen />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
