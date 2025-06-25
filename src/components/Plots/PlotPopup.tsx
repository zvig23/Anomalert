import { IconButton, Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { Popup } from "react-leaflet";
import { fetchFlightTrack } from "../../services/fetchTrack";
import { useSetAtom } from "jotai";
import { splitAtom } from "jotai/utils";
import { flightTracksAtom } from "../../store/store";

import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import { TrackReport } from "../Tracks/TrackReport";
import { addTrackToMap, removeTrackfromMap } from "../../store/reducers";

interface PlotPopupProps {
  trackID: number;
}

export const PlotPopup = ({ trackID }: PlotPopupProps) => {
  const trackToMapAdder = useSetAtom(addTrackToMap);
  const trackToMapRemover = useSetAtom(removeTrackfromMap);
  const dispatchFlightTracks = useSetAtom(splitAtom(flightTracksAtom));
  const [flightTrackData, setFlightTrackData] = useState<FlightTrack>();
  const [isVisable, setIsVisable] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchFlightTrack(trackID).then((flightTrack) => {
      dispatchFlightTracks({
        type: "insert",
        value: flightTrack,
      });
      setFlightTrackData(flightTrack);
    });
  }, []);
  return (
    <>
      <Popup>
        <Tooltip title="Show Track">
          <IconButton
            onClick={() => {
              isVisable
                ? trackToMapRemover({ trackID })
                : trackToMapAdder({ trackID });
              setIsVisable(!isVisable);
            }}
          >
            <ShowChartIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Show report">
          <IconButton
            onClick={() => {
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
