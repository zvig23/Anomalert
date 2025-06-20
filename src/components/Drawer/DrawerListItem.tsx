import { SxProps } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface DrawerListItemProps<T> {
  open: boolean;
  item: T;
}

const LIST_ITEM_BUTTON_STYLE_BASIC: SxProps = {
  minHeight: 48,
  px: 2.5,
};
const LIST_ITEM_STYLE_BASIC: SxProps = { display: "block" };

export const DrawerListItem = <T,>({ open, item }: DrawerListItemProps<T>) => {
  return (
    <ListItem disablePadding sx={LIST_ITEM_STYLE_BASIC}>
      <ListItemButton
        sx={{
          ...LIST_ITEM_BUTTON_STYLE_BASIC,
          justifyContent: open ? "initial" : "center",
        }}
        onClick={() => {}}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        ></ListItemIcon>
        <ListItemText primary={"item"} sx={{ opacity: open ? 1 : 0 }} ></ListItemText >
      </ListItemButton>
    </ListItem>
  );
};
