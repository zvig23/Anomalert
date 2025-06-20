import { Angle } from "./Angles";
import { Prediction } from "./Prediction";
import { Speed } from "./Speed";
import { Waypoint } from "./Waypoint";

export interface FlightPlot {
  ID: number;
  Waypoint: Waypoint;
  CURRENT_SPEED: Speed;
  HEADING: Angle;
  Prediction?: Prediction;
}
