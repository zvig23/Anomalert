import { FlightPlot } from "../../moudles/FlightMoudles/FlightPlot";
import { Marker } from "react-leaflet";
import { toLatLng } from "../../moudles/BasicMoudles/Waypoint";
import { createRotatedIcon } from "./RotatedMarker";
import { PlotPopup } from "./PlotPopup";

interface PlotMarkerProps {
  plot: FlightPlot;
}

export const PlotMarker = ({ plot }: PlotMarkerProps) => {
  console.log(plot.hasAnomaly);

  return (
    <>
      {plot.hasAnomaly ? (
        <Marker
          position={toLatLng(plot.waypoint)}
          icon={createRotatedIcon(plot.heading.value, "red", 35, [15,30])}
        />
      ) : (
        <></>
      )}
      <Marker
        position={toLatLng(plot.waypoint)}
        icon={createRotatedIcon(plot.heading.value,  "black", 25, [10,25])}
      >
        <PlotPopup trackID={plot.trackID} />
      </Marker>
    </>
  );
};
