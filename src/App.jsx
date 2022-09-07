/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./App.css";

import Sena from "./components/mega/Sena";
import Contador from "./components/contador/Contador";
import Card from "./components/layout/Card";


export default () => (
  <div className="App">
    <h1>Contador (React) </h1>
    <div className="Cards">
      <Card titulo="#13 - Mega Sena" color="#35a262">
        <Sena qtde={6}></Sena>
      </Card>

      <Card titulo="#12 - Contador" color="#541f14">
        <Contador numeroInicial={10}></Contador>
      </Card>
    </div>
  </div>
);
