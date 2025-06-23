import { IconButton, Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Popup } from "react-leaflet";
import { useMemo } from "react";
import { fetchFlightTrack } from "../../services/fetchTrack";

interface PlotPopupProps {
  trackID: number
}

export const PlotPopup = ({trackID}: PlotPopupProps) => {
  console.log(trackID);
  
  return (
    <Popup>
      <Tooltip title="Show Track">
        <IconButton onClick={()=>{fetchFlightTrack(trackID).then((flightTrack) => {console.log(flightTrack)})}}>
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
