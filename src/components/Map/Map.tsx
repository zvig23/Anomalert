import { MapContainer,  TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { latLng } from "leaflet";
import { Plots } from "../Plots/Plots";
import { Tracks } from "../Tracks/Tracks";

const position = latLng([32, 36]);
const mapStyle = {height: "80%", width:"80%", marginLeft:"10%"}
export const Map = () => {
  return (
      <MapContainer center={position} zoom={5} scrollWheelZoom={true} style={mapStyle}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Plots/>
        <Tracks/>
      </MapContainer>
  );
};
