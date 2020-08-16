import React from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import NightsStay from "@material-ui/icons/NightsStay";
import SearchBar from "./components/SearchBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  })
);

const Header: React.FC<{onDarkModeChange: () => void}> = ({onDarkModeChange}) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            BONDIFY
          </Typography>

          <SearchBar />

          <div className={classes.grow} />

          <IconButton color="secondary" onClick={onDarkModeChange}>
            <NightsStay />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
