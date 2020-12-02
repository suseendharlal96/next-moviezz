import React from "react";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import useSusee from "./navstyles";

const Navbar = () => {
  const router = useRouter();
  return (
    <AppBar
      // className={classes.appBar}
      position="fixed"
      padding={3}
      color="secondary"
    >
      <Toolbar >
        <Typography
          onClick={() => router.push("/")}
          variant="h6"
          align="left"
          // className={classes.heading}
        >
          Next Moviezz
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
