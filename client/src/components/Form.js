import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 30px",
  },
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
}));

const Form = ({ query, handleInputChange, handleFormSubmit, error, errorMessage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper component="form" className={classes.form}>
        <TextField
          error={error}
          className={classes.input}
          placeholder="e.g. Atlanta"
          inputProps={{ 'aria-label': 'search your city' }}
          value={query}
          onChange={handleInputChange}
          helperText={errorMessage}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={handleFormSubmit}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}

export default Form;
