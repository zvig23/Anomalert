import { IconButton, Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Popup } from "react-leaflet";
import { fetchFlightTrack } from "../../services/fetchTrack";
import { useAtom } from "jotai";
import { splitAtom } from "jotai/utils";
import { flightTracksAtom } from "../../store/store";

interface PlotPopupProps {
  trackID: number
}

export const PlotPopup = ({trackID}: PlotPopupProps) => {
  const [_, dispatchFlightTracksAtom]= useAtom(splitAtom(flightTracksAtom))  ;
  return (
    <Popup>
      <Tooltip title="Show Track">
        <IconButton onClick={()=>{fetchFlightTrack(trackID).then((flightTrack) => {dispatchFlightTracksAtom({
          type: "insert",
          value: flightTrack
        })})}}>
          <ShowChartIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Show report">
        <IconButton>
          <SummarizeIcon />
        </IconButton>
      </Tooltip>
    </Popup>
  );
};
