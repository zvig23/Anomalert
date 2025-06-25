import { Anomaly } from "../Anomaly";
import { FlightPlot } from "./FlightPlot";

export interface FlightTrack {
  trackID: number;
  plots: Array<FlightPlot>;
  anomaly?: Anomaly;
  onMap: boolean;
}
