import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    forecast: {
        padding: "0px 30px",
        textAlign: "left",
        color: "black",
    },
    img: {
        maxWidth: "40%",
        display: "block",
        margin: "5px 10px"
    }
}));

const Forecast = ({ temp, mean, median, mode, desc }) => {
    const classes = useStyles();
    let img;
    if (desc === "Clear Sky") {
        img = "clear.png"
    } else if (desc.includes("Clouds")) {
        img = "cloud.png"
    } else if (desc.includes("Rain") || desc.includes("Thunderstorm") || desc.includes("Drizzle")) {
        img = "rain.png"
    } else if (desc === "Snow") {
        img = "snow.png"
    } else {
        img = "mist.png"
    }
    
    return (
        <div className={classes.forecast}>
            <img className={classes.img} src={process.env.PUBLIC_URL + `/img/${img}`} alt="weather" />
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="h3">{temp}</Typography>
                    <Typography variant="h4">{desc}</Typography>
                    <Typography variant="h6">Mean{"\u00B0F"} {mean}</Typography>
                    <Typography variant="h6">Median{"\u00B0F"} {median}</Typography>
                    <Typography variant="h6">Mode{"\u00B0F"} {mode}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Forecast;