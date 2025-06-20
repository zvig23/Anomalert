import {  useAtomValue } from "jotai";
import { DrawerMenu } from "../Drawer/DrawerMenu";
import { flightPlotsAtom } from "../../store/store";
import { FlightPlot } from "../../moudles/FlightPlot";

export const FlightsMenu = () => {
  const FlightPlots = useAtomValue<Array<FlightPlot>>(flightPlotsAtom);
  return <DrawerMenu items={FlightPlots} header={"Flights"} />;
};
