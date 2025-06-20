import {  useAtomValue } from "jotai";
import { flightPlotsAtom } from "../../store/store";
import { FlightPlot } from "../../moudles/FlightMoudles/FlightPlot";
import { DrawerMenu } from "../UI/Drawer/DrawerMenu";

export const FlightsMenu = () => {
  const FlightPlots = useAtomValue<Array<FlightPlot>>(flightPlotsAtom);
  return <DrawerMenu items={FlightPlots} header={"Flights"} />;
};
