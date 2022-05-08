import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import HttpsIcon from "@material-ui/icons/Https";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles(() => ({
  MuiSvgIcon: {
    width: "50px",
  },
}));
const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleclick = () => {
    console.log("hello");
    navigate("/deerim");
  };
  return (
    <>
      <Grid style={{ padding: "20px" }}>
        <Paper
          elevation={3}
          style={{
            height: "70px",
            borderRadius: "17px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <PhoneIcon className={classes.MuiSvgIcon} />
          <input
            id="in"
            type="text"
            style={{
              border: "none",
              outlineWidth: "0",
              height: "65px",
              fontSize: "27px",
              paddingLeft: "23px",
            }}
            placeholder="Input Mobile Number"
          ></input>
        </Paper>

        <Paper elevation={3} style={{ height: "70px", borderRadius: "17px" }}>
          <HttpsIcon className={classes.MuiSvgIcon} />
          <input
            id="in"
            type="text"
            style={{
              border: "none",
              outlineWidth: "0",
              width: "80%",
              height: "65px",
              fontSize: "27px",
              paddingLeft: "23px",
            }}
            placeholder="Password(>/6 characters)"
          ></input>
        </Paper>
        <button
          style={{
            width: "100%",
            backgroundColor: "red",
            color: " white",
            height: "70px",
            borderRadius: "15px",
            border: "none",
            fontSize: "25px",
            marginTop: "45px",
          }}
          onClick={handleclick}
        >
          Login
        </button>
      </Grid>
    </>
  );
};

export default Login;
