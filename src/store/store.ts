import { atom } from 'jotai';
import { FlightPlot } from '../moudles/FlightPlot';
import { Flight } from '../moudles/Flight';

export const flightPlotsAtom = atom<Array<FlightPlot>>([]);
export const selectedFlightsIdAtom = atom<Array<Flight>>([]);
