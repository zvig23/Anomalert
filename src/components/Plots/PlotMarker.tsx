import { FlightPlot } from "../../moudles/FlightMoudles/FlightPlot";
import { Marker } from "react-leaflet";
import { toLatLng } from "../../moudles/BasicMoudles/Waypoint";
import { createRotatedIcon } from "./RotatedMarker";
import { PlotPopup } from "./PlotPopup";

interface PlotMarkerProps {
  plot: FlightPlot;
}

export const PlotMarker = ({ plot }: PlotMarkerProps) => {

  return (
    <>
      {plot.hasAnomaly ? (
        <Marker
          position={toLatLng(plot.waypoint)}
          icon={createRotatedIcon(plot.heading.value, "red")}
        >
          <PlotPopup trackID={plot.trackID} />
        </Marker>
      ) : (
        <Marker
          position={toLatLng(plot.waypoint)}
          icon={createRotatedIcon(plot.heading.value, "black")}
        >
          <PlotPopup trackID={plot.trackID} />
        </Marker>
      )}
    </>
  );
};
