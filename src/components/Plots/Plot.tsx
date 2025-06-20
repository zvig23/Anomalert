import { FlightPlot } from "../../moudles/FlightMoudles/FlightPlot";
import { Marker } from "react-leaflet";
import { toLatLng } from "../../moudles/BasicMoudles/Waypoint";

interface PlotProps {
  plot: FlightPlot;
}

export const Plot = ({ plot }: PlotProps) => {
  return <Marker position={toLatLng(plot.Waypoint)} />;
};
