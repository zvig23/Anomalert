import { Anomaly } from "../Prediction";
import { Waypoint } from "../BasicMoudles/Waypoint";

export interface FlightTrack {
  ID: number;
  waypoint: Array<Waypoint>;
  anomaly?: Anomaly;
}
