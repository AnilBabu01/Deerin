import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { makeStyles } from "@material-ui/core/styles";
import chip from "./chip.png";
import CheckIcon from "@material-ui/icons/Check";
import game1 from "./game1.png";
import game2 from "./game1.png";
import g1 from "./g1.png";
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
          <div style={{ width: "100%" }}>
            <Paper
              elevation={3}
              style={{
                height: "170px",
                borderRadius: "17px",
                width: "100%",
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
                <Typography style={{ color: "white", paddingLeft: "10px" }}>
                  Game Card
                </Typography>
              </div>
              <Grid sm={12} style={{ display: "flex" }}>
                <Grid sm={3} style={{ paddingLeft: "20px" }}>
                  <Typography style={{ color: "white", fontSize: "22px" }}>
                    10.00 <sub>coin</sub>
                  </Typography>
                  <Typography style={{ color: "white", paddingTop: "10px" }}>
                    XXX.XXX.25641
                  </Typography>
                  <Typography style={{ color: "white", paddingTop: "10px" }}>
                    DEERIM
                  </Typography>
                </Grid>
                <Grid sm={8}></Grid>

                <Grid sm={3}>
                  <img src={chip} style={{ width: "80px" }} />
                  <Typography style={{ color: "white" }}>100% Cash</Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
      </Grid>
      
      <Typography style={{ paddingLeft: "20px" }}>
        Popular Games <CheckIcon />{" "}
      </Typography>
      <Grid style={{ padding: "20px" }}>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <div
            style={{
              width: "100%",
              border: "1px solid gray",
              height: "300px",
              borderRadius: "17px",
              paddingTop:"30px"
            }}
          >
            <div style={{ display: "flex" }}>
              <Paper
                elevation={3}
                style={{
                  width: "30%",
                  height: "120px",
                  borderRadius: "10px",
                  marginLeft: "20px",
                }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                   <img src={game1} style={{width:"90px"}} alt="img"/>
                  <Typography>Game</Typography>
                </Grid>
              </Paper>
              <Paper
                elevation={3}
                style={{
                  width: "30%",
                  height: "120px",
                  borderRadius: "10px",
                  marginLeft: "20px",
                }}
              >
                 <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                   <img src={game1} style={{width:"90px"}} alt="img"/>
                  <Typography>Game</Typography>
                </Grid>
              </Paper>
              <Paper
                elevation={3}
                style={{
                  width: "30%",
                  height: "120px",
                  borderRadius: "10px",
                  marginLeft: "20px",
                }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                   <img src={game1} style={{width:"90px"}}  alt="img"/  >
                  <Typography>Game</Typography>
                </Grid>
              </Paper>
            </div>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <Paper
                elevation={3}
                style={{
                  width: "46.5%",
                  height: "120px",
                  borderRadius: "10px",
                  marginLeft: "20px",
                }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                   <img src={game1} style={{width:"90px"}}  alt="img"/>
                  <Typography>Game</Typography>
                </Grid>
              </Paper>
              <Paper
                elevation={3}
                style={{
                  width: "46%",
                  height: "120px",
                  borderRadius: "10px",
                  marginLeft: "20px",
                }}
              >
                 <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                   <img src={game1} style={{width:"90px"}} alt="img"/>
                  <Typography>Game</Typography>
                </Grid>
              </Paper>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Deerim2;
