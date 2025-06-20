import { useAtomValue } from "jotai";
import { flightPlotsAtom } from "../../store/store";
import { Plot } from "./Plot";
import { FlightPlot } from "../../moudles/FlightMoudles/FlightPlot";

export const Plots = () => {
  const plots: Array<FlightPlot> = useAtomValue(flightPlotsAtom);
  return plots.map((plot) => {
    return <Plot plot={plot} />;
  });
};
