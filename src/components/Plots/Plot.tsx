import { FlightPlot } from "../../moudles/FlightMoudles/FlightPlot";
import { Marker } from "react-leaflet";
import { toLatLng } from "../../moudles/BasicMoudles/Waypoint";
import { createRotatedIcon } from "./RotatedMarker";

interface PlotProps {
  plot: FlightPlot;
}

export const Plot = ({ plot }: PlotProps) => {
  
  return <Marker position={toLatLng(plot.waypoint)} icon={createRotatedIcon(plot.heading.value)}/>;
};
