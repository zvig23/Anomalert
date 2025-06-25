import { useAtomValue } from "jotai";
import { visableFlightTracksAtom } from "../../store/store";
import { FlightTrack } from "../../moudles/FlightMoudles/FlightTrack";
import { List } from "@mui/material";
import { FlightItem } from "./FlightItem";
import { DrawerMenu } from "../UI/Drawer/DrawerMenu";

export const FlightsMenu = () => {
  const visableFlightTracks = useAtomValue<Array<FlightTrack>>(
    visableFlightTracksAtom
  );

  return (
    <DrawerMenu header={"Flights Menu"} >
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper",ml:"10%" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {visableFlightTracks.map((flightTrack) => {
          return <FlightItem flightTrack={flightTrack} />;
        })}
      </List>
    </DrawerMenu>
  );
};
