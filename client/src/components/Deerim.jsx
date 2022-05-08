import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GetAppIcon from "@material-ui/icons/GetApp";
import Tabs2 from "./Tabs2";
import d2 from "./d2.png";
const useStyles = makeStyles(() => ({
  MuiSvgIcon: {
    width: "50px",
    backgroundColor: "#dd7575",
    height: "50px",
    borderRadius: "8px",
  },
}));
const Deerim = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        Style={{ height: "100%" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            backgroundColor: "#dd1212",
            width: "47%",
            height: "120px",
          }}
        >
          <img src={d2} style={{ width: "80px" }}></img>
          <Grid style={{ width: "80%" }}></Grid>
          <GetAppIcon className={classes.MuiSvgIcon} />
        </Grid>
        <Grid style={{ width: "47%" }}>
          <Tabs2 />
        </Grid>
      </Grid>
    </>
  );
};

export default Deerim;
