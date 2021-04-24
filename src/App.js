import React from "react";
import Header from "./components/Header";
import ImageScreen from "./components/ImageScreen";
import CameraScreen from "./components/CameraScreen";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Header />
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
