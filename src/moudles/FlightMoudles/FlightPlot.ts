import { Angle } from "../BasicMoudles/Angles";
import { Speed } from "../BasicMoudles/Speed";
import { Waypoint } from "../BasicMoudles/Waypoint";

export interface FlightPlot {
  trackID: number;
  waypoint: Waypoint;
  currentSpeed: Speed;
  heading: Angle;
  hasAnomaly?: Boolean;
}
