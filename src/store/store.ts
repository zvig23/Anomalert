import { atom } from 'jotai';
import { FlightPlot } from '../moudles/FlightMoudles/FlightPlot';
import { FlightTrack } from '../moudles/FlightMoudles/FlightTrack';

export const flightPlotsAtom = atom<Array<FlightPlot>>([]);
export const flightTracksAtom = atom<Array<FlightTrack>>([]);
