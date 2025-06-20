import { Polyline } from "react-leaflet";
import { toLatLng } from "../../moudles/BasicMoudles/Waypoint";
import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import { PathOptions } from "leaflet";

const redOptions: PathOptions = { color: "red" };

interface TrackProps {
  track: FlightTrack;
}

export const Track = ({ track }: TrackProps) => {
  return (
    <>
      <Polyline positions={track.waypoint.map(toLatLng)} />
      {track.anomaly ? (
        <Polyline
          positions={track.anomaly.waypoint.map(toLatLng)}
          pathOptions={redOptions}
        />
      ) : (
        <></>
      )}
    </>
  );
};
