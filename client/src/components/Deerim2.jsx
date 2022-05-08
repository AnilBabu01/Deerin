import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  MuiSvgIcon: {},
}));
const Deerim2 = () => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <Grid style={{ padding: "20px" }}>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div style={{ width: "px" }}>
            <Paper
              elevation={3}
              style={{
                height: "200px",
                borderRadius: "17px",
                width: "750px",
                backgroundColor: "#dd1212",
              }}
            >
              <div
                style={{
                  display: "flex",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
              >
                <Typography>
                  <DonutLargeIcon className={classes.MuiSvgIcon} />{" "}
                </Typography>
                <Typography styel={{ paddingLeft: "10px", color: "white" }}>
                  Game Card
                </Typography>
              </div>
            </Paper>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Deerim2;
