import { Anomaly } from "../Anomaly";
import { Waypoint } from "../BasicMoudles/Waypoint";

export interface FlightTrack {
  ID: number;
  waypoints: Array<Waypoint>;
  anomaly?: Anomaly;
}
