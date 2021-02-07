import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HideOnScroll from "./HideOnScroll";

const useStyles = makeStyles(() => ({
    appBar: {
        background: "transparent",
        boxShadow: "none"
    },
    navDisplayFlex: {
        display: "flex",
        justifyContent: "space-between"
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <HideOnScroll>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Container className={classes.navDisplayFlex}>
                            <Typography variant="h1" noWrap>
                                Tempura
                            </Typography>
                        </Container>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </div>
    );
}

export default Navbar;
