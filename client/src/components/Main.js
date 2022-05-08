import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Tabs from "./Tabs"
import Logo from "./logo.png"
const Main = () => {
    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                Style={{height:"100%"}}
            >
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center" style={{ backgroundColor: "#dd1212", width: "33.4%", height: "120px" }}>
                    <img src={Logo} style={{ width: "260px" }}></img>
                </Grid>
                <Grid style={{ width: "33.4%" }}>
                    <Tabs />
                   
                </Grid>
            </Grid>
        </>
    );
};

export default Main;
