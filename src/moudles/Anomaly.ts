import { FlightPlot } from "./FlightMoudles/FlightPlot";

export interface Anomaly {
  trackID: number;
  plots: Array<FlightPlot>;
  reason: string;
}
