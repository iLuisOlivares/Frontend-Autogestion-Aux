import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Header = ()  => {
 
  return (
    <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar  >
          <Typography sx={{ textAlign: "center" }} variant="h8" color="inherit" noWrap>
            AUX - Empleadas domesticas por día
          </Typography>
        </Toolbar>
      </AppBar>
  );
}


