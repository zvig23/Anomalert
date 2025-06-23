import { IconButton, Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Popup } from "react-leaflet";
import { useMemo } from "react";

export const PlotPopup = () => {
    useMemo(()=>{
    },[])
  return (
    <Popup>
      <Tooltip title="Show Track">
        <IconButton onClick={()=>{}}>
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
