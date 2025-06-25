import { useAtomValue } from "jotai";
import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import { visableFlightTracksAtom } from "../../store/store";
import { Track } from "./Track";

export const Tracks = () => {
  const tracks: Array<FlightTrack> = useAtomValue(visableFlightTracksAtom);

  return tracks.map((track: FlightTrack) => {
    return <Track track={track} />;
  });
};
