import React from "react";
import Grid from "@material-ui/core/Grid";
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
                Style={{ height: "100%" }}
            >
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center" style={{ backgroundColor: "#dd1212", width: "33.4%", height: "120px" }}>
                    <img src={Logo} style={{ width: "260px" }} alt="logo"></img>
                </Grid>
                <Grid style={{ width: "33.4%" }}>
                    <Tabs />

                </Grid>
            </Grid>
        </>
    );
};

export default Main;
