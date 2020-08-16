import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {MarketData} from "../../../constants/interfaces";
import {useSelector, useDispatch} from "react-redux";
import {StateType} from "../../../constants/types";
import {fade, createStyles, makeStyles, Theme, TextField} from "@material-ui/core";
import {applySearchQuery, fetchMarket} from "../../../actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    root: {
      flexGrow: 1,
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  })
);

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const marketData = useSelector<StateType, MarketData[]>((state) => state.markets);

  const handleSearch = (
    event: React.ChangeEvent<{}>,
    newValue: string | null
  ): void => {
    if (newValue) {
      const queries: any[] = [newValue];
      dispatch(applySearchQuery(queries));
    } else {
      dispatch(fetchMarket());
    }
  };

  return (
    <Autocomplete
      id="search-bar"
      freeSolo
      onChange={handleSearch}
      options={marketData.map(({name}) => name)}
      style={{width: 300}}
      renderInput={(params) => (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <TextField
            {...params}
            placeholder="Search…"
            classes={{
              root: classes.root,
            }}
          />
        </div>
      )}
    />
  );
};

export default SearchBar;
