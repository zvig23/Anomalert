import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SxProps, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";

import { useState } from "react";
import { Drawer, DrawerHeader } from "./style";
import { DrawerListItem } from "./DrawerListItem";

const boxSx: SxProps = { display: "flex", color: "#888" };

export interface DrawerMenuProps<T> {
  header: string
  items: Array<T>;
}

export const DrawerMenu = <T,>({header, items }: DrawerMenuProps<T>) => {
  const [open, setOpen] = useState(false);

  const handleDrawerClicked = () => {
    setOpen(!open);
  };

  return (
    <Box sx={boxSx}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open && <Typography>{header}</Typography>}
          <IconButton onClick={handleDrawerClicked}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {items.map((item) => {
            return <DrawerListItem open={open} item={item} />;
          })}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};
