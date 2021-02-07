import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(() => ({
  notFound: {
    padding: "0px 30px",
    textAlign: "left",
    color: "black",
  }
}));

function NoMatch() {
  const classes = useStyles();
  return (
    <div className={classes.notFound}>
      <Button
        aria-label="search"
        startIcon={<HomeIcon />}
        href="/"
      >Whoops. That's not how you search for a city. Let's go back home.
    </Button>
    </div>
  );
}

export default NoMatch;
