import { Angle } from "../BasicMoudles/Angles";
import { Speed } from "../BasicMoudles/Speed";
import { Waypoint } from "../BasicMoudles/Waypoint";

export interface FlightPlot {
  ID: number;
  Waypoint: Waypoint;
  CURRENT_SPEED: Speed;
  HEADING: Angle;
  hasAnomaly?: Boolean;
}
