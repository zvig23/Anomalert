import { Waypoint } from "./Waypoint";

export interface Prediction {
  anomaly: Array<Waypoint>;
  reason: string;
}
