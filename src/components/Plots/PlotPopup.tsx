import { IconButton, Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { Popup } from "react-leaflet";
import { fetchFlightTrack } from "../../services/fetchTrack";
import { useAtom } from "jotai";
import { splitAtom } from "jotai/utils";
import { flightTracksAtom, visableFlightTracksAtom } from "../../store/store";

import Modal from "@mui/material/Modal";
import { useState } from "react";
import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import { TrackReport } from "../Tracks/TrackReport";

interface PlotPopupProps {
  trackID: number;
}

export const PlotPopup = ({ trackID }: PlotPopupProps) => {
  const [_, dispatchFlightTracksAtom] = useAtom(splitAtom(flightTracksAtom));
  const [__, dispatchVisableFlightTracksAtom] = useAtom(
    splitAtom(visableFlightTracksAtom)
  );
  const [flightTrackData, setFlightTrackData] = useState<FlightTrack>();
  const [isVisable, setIsVisable] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addToVisableTrackData = () => {
    fetchFlightTrack(trackID).then((flightTrack) => {
      dispatchVisableFlightTracksAtom({
        type: "insert",
        value: flightTrack,
      });
      setIsVisable(true);
    });
  };

  const removeFromVisableTrackData = () => {
  };

  const fetchTrackDataReport = () => {
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
          <IconButton
            onClick={() => {
              isVisable
                ? removeFromVisableTrackData()
                : addToVisableTrackData();
            }}
          >
            <ShowChartIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Show report">
          <IconButton
            onClick={() => {
              fetchTrackDataReport();
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
          <TrackReport flightTrackData={flightTrackData} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};
