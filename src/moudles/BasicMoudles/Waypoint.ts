import { LatLng } from "leaflet";

export interface Waypoint {
  lat: number;
  lon: number;
  alt: number;
}

export const toLatLng = (waypoint:Waypoint) => {
  return new LatLng(waypoint.lat, waypoint.lon, waypoint.alt)
};
