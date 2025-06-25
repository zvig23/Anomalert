import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import { FlightPlot } from "../../moudles/FlightMoudles/FlightPlot";
import { Waypoint } from "../../moudles/BasicMoudles/Waypoint";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const calculateTrackLengthKm = (plots: Array<FlightPlot>): number => {
  const toRadians = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371; // Earth radius in km
  const waypoints: Array<Waypoint> = plots.map((plot) => {
    return plot.waypoint;
  });
  return waypoints.reduce((total, curr, index, arr) => {
    if (index === 0) return 0;

    const prev = arr[index - 1];

    const dlat = toRadians(curr.lat - prev.lat);
    const dlon = toRadians(curr.lon - prev.lon);

    const lat1 = toRadians(prev.lat);
    const lat2 = toRadians(curr.lat);

    const a =
      Math.sin(dlat / 2) ** 2 +
      Math.sin(dlon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return total + R * c;
  }, 0);
};

interface TrackReportProps {
  flightTrackData: FlightTrack;
}

export const TrackReport = ({ flightTrackData }: TrackReportProps) => {
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {`Track Number ${flightTrackData.trackID}`}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {`Source: (${flightTrackData.plots[0].waypoint.lat},${flightTrackData.plots[0].waypoint.lon})`}
        <br />
        {`Length: ${calculateTrackLengthKm(flightTrackData.plots).toFixed(
          2
        )} KM`}
        <br />
        {`Anomaly Reason: ${flightTrackData.anomaly?.reason}`}
      </Typography>
    </Box>
  );
};
