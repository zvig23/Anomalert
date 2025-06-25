import { atom } from "jotai";
import { flightTracksAtom } from "./store";

const addTrackToMap = atom(
  null,
  (get, set, { trackID }: { trackID: number }) => {
    const tracks = get(flightTracksAtom);

    const updatedTracks = tracks.map((track) =>
      track.trackID === trackID ? { ...track, onMap: true } : track
    );

    set(flightTracksAtom, updatedTracks);
  }
);

const removeTrackfromMap = atom(
  null,
  (get, set, { trackID }: { trackID: number }) => {
    const tracks = get(flightTracksAtom);

    const updatedTracks = tracks.map((track) =>
      track.trackID === trackID ? { ...track, onMap: false } : track
    );

    set(flightTracksAtom, updatedTracks);
  }
);

export { addTrackToMap, removeTrackfromMap };
