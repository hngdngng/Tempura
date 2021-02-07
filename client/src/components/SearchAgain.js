import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "0px 30px",
    }
}));

const SearchAgain = ({ handleNewSearch }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                type="submit"
                aria-label="search"
                onClick={handleNewSearch}
                startIcon={<SearchIcon />}
            >Search Another City
            </Button>
        </div>
    );
}

export default SearchAgain;
