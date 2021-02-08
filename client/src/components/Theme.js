import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "'DM Serif Text', serif",
      color: "black",
      fontSize: 30
    },
    h3: {
      fontFamily: "'DM Serif Text', serif",
      lineHeight: 1.2
    },
    h4: {
      fontFamily: "'DM Serif Text', serif",
    },
    subtitle1: {
      fontFamily: "'Raleway', sans-serif",
    },
    h6: {
      fontFamily: "'DM Serif Text', serif"
    }
  }
});

export default theme;