import { Map } from "./components/Map/Map";
import "./App.css";
import { FlightsMenu } from "./components/FlightMenu/FlightsMenu";
import { fetchFlightPlots } from "./services/fetchPlots";
import { useSetAtom } from "jotai";
import { flightPlotsAtom } from "./store/store";
import { FlightPlot } from "./moudles/FlightMoudles/FlightPlot";

export const App = () => {
  const plotsSetter = useSetAtom(flightPlotsAtom);
  fetchFlightPlots().then((FlightPlots : Array<FlightPlot>) => {
    plotsSetter(FlightPlots);
  });
  return (
    <>
      <FlightsMenu />
      <Map />
    </>
  );
};
