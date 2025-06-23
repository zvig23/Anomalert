import { Waypoint } from "./BasicMoudles/Waypoint";

export interface Anomaly {
  waypoint: Array<Waypoint>;
  reason: string;
}
