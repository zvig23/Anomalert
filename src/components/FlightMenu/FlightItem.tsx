import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import {
  ListItemButton,
  ListItemText,
  Modal,
} from "@mui/material";
import { useState } from "react";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { TrackReport } from "../Tracks/TrackReport";
interface FlightItempProps {
  flightTrack: FlightTrack;
}

export const FlightItem = ({ flightTrack }: FlightItempProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ListItemButton onClick={handleOpen}>
        <ListItemText primary={` ${flightTrack.trackID}`} />
      </ListItemButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TrackReport flightTrackData={flightTrack} />
      </Modal>
    </>
  );
};
