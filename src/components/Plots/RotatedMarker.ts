import L from "leaflet";
import planeIconUrl from "../../assets/plane-icon.svg";

// Create a dynamic rotated icon
export const createRotatedIcon = (angle: number): L.DivIcon => {
  return L.divIcon({
    className: "rotated-marker-icon",
    html: `<div style="transform: rotate(${angle}deg); width: 24px; height: 24px;">
         <img src="${planeIconUrl}" style="width: 100%; height: 100%;" />
       </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12], // center of the icon
  });
};
