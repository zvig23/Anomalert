import { useState } from "react";
import { Map } from "./components/Map/Map";
import "./App.css";
import { FlightsMenu } from "./components/FlightMenu/FlightsMenu";

export const App = () => {
  return (
    <>
      <FlightsMenu />
        <Map />
    </>
  );
};
