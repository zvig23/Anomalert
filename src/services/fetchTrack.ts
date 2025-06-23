import axios from "axios";
import { TRACK_FETCH_URL } from "../assets/consts";
import { FlightTrack } from "../moudles/FlightMoudles/FlightTrack";

axios.defaults.headers.common = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};
export async function fetchFlightTrack(trackID: number): Promise<FlightTrack> {
  try {
    const response = await axios.get<FlightTrack>(TRACK_FETCH_URL, {
      params: {
        id: trackID,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch flight data:", error);
    throw error;
  }
}
