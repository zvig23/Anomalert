import { useAtomValue } from "jotai";
import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import { List } from "@mui/material";
import { FlightItem } from "./FlightItem";
import { DrawerMenu } from "../UI/Drawer/DrawerMenu";
import { flightTracksAtom } from "../../store/store";

export const FlightsMenu = () => {
  const flightTracks = useAtomValue<Array<FlightTrack>>(
    flightTracksAtom
  );

  return (
    <DrawerMenu header={"Flights Menu"} >
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper",ml:"10%" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {flightTracks.map((flightTrack) => {
          return flightTrack.onMap && <FlightItem flightTrack={flightTrack} />;
        })}
      </List>
    </DrawerMenu>
  );
};
