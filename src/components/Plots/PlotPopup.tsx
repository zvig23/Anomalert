import { IconButton, Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { Popup } from "react-leaflet";
import { fetchFlightTrack } from "../../services/fetchTrack";
import { useAtom } from "jotai";
import { splitAtom } from "jotai/utils";
import { flightTracksAtom } from "../../store/store";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import { Waypoint } from "../../moudles/BasicMoudles/Waypoint";
import { FlightPlot } from "../../moudles/FlightMoudles/FlightPlot";

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
interface PlotPopupProps {
  trackID: number;
}

export const PlotPopup = ({ trackID }: PlotPopupProps) => {
  const [_, dispatchFlightTracksAtom] = useAtom(splitAtom(flightTracksAtom));
  const [flightTrackData, setFlightTrackData] = useState<FlightTrack>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const updateTrackData = () => {
    fetchFlightTrack(trackID).then((flightTrack) => {
      dispatchFlightTracksAtom({
        type: "insert",
        value: flightTrack,
      });
      setFlightTrackData(flightTrack);
    });
  };
  return (
    <>
      <Popup>
        <Tooltip title="Show Track">
          <IconButton onClick={updateTrackData}>
            <ShowChartIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Show report">
          <IconButton
            onClick={() => {
              updateTrackData();
              handleOpen();
            }}
          >
            <SummarizeIcon />
          </IconButton>
        </Tooltip>
      </Popup>

      {flightTrackData ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
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
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};
