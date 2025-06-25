import { useAtomValue } from "jotai";
import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import { Track } from "./Track";
import { flightTracksAtom } from "../../store/store";

export const Tracks = () => {
  const tracks: Array<FlightTrack> = useAtomValue(flightTracksAtom);

  return tracks.map((track: FlightTrack) => {
    return track.onMap && <Track track={track} />;
  });
};
