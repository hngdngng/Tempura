import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    hero: {
        padding: "0px 30px",
        textAlign: "left",
        color: "black",
        marginTop: "10px"
    }
}));

const Hero = ({text, sub}) => {
    const classes = useStyles();
    return (
        <div className={classes.hero}>
            <Grid container>
                <Grid item>
                    <Typography variant="h3">{text}</Typography>
                    <Typography variant="h4">{sub}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Hero;