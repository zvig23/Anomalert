import { Polyline } from "react-leaflet";
import { toLatLng } from "../../moudles/BasicMoudles/Waypoint";
import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import { PathOptions } from "leaflet";

const redOptions: PathOptions = { color: "red" };
const blackOptions: PathOptions = { color: "black" };

interface TrackProps {
  track: FlightTrack;
}

export const Track = ({ track }: TrackProps) => {
  console.log(track);

  return (
    <>
      <Polyline
        positions={track.plots.map((plot) => {
          return toLatLng(plot.waypoint);
        })}
        pathOptions={blackOptions}
      />
      {track.anomaly && (
        <Polyline
          positions={track.anomaly.plots.map((plot) => {
            return toLatLng(plot.waypoint);
          })}
          pathOptions={redOptions}
        />
      )}
    </>
  );
};
