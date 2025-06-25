import { StarBorder } from "@mui/icons-material";
import { Collapse, List, ListItemIcon, SxProps } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ReactNode, useState } from "react";

interface DrawerListItemProps {
  children: ReactNode;
  primary: string;
}

const LIST_ITEM_BUTTON_STYLE_BASIC: SxProps = {
  minHeight: 48,
  px: 2.5,
};
const LIST_ITEM_STYLE_BASIC: SxProps = { display: "block" };

export const DrawerListItem = ({ children, primary }: DrawerListItemProps) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <ListItem disablePadding sx={LIST_ITEM_STYLE_BASIC}>
        <ListItemButton
          sx={{
            ...LIST_ITEM_BUTTON_STYLE_BASIC,
          }}
          onClick={() => {
            setShowContent(!setShowContent);
          }}
        >
          <ListItemText primary={primary} sx={{ pl: 8 }}/>
        </ListItemButton>
      </ListItem>
      <Collapse in={showContent} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      
    </>
  );
};
