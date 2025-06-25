import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SxProps, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";

import { ReactNode, useState } from "react";
import { Drawer, DrawerHeader } from "./style";

const boxSx: SxProps = { display: "flex", color: "#888" };

export interface DrawerMenuProps {
  header: string;
  children: ReactNode;
}

export const DrawerMenu = ({ header, children }: DrawerMenuProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerClicked = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={boxSx}>
      <Drawer variant="permanent" open={openDrawer}>
        <DrawerHeader>
          {openDrawer && <Typography>{header}</Typography>}
          <IconButton onClick={handleDrawerClicked}>
            {openDrawer ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>{children}</List>
        <Divider />
      </Drawer>
    </Box>
  );
};
