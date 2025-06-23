import axios from "axios";
import { FlightPlot } from "../moudles/FlightMoudles/FlightPlot";
import { PLOTS_FETCH_URL } from "../assets/consts";

axios.defaults.headers.common = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};
export async function fetchFlightPlots(): Promise<FlightPlot[]> {
  try {
    const response = await axios.get<FlightPlot[]>(PLOTS_FETCH_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch flight data:", error);
    throw error;
  }
}
