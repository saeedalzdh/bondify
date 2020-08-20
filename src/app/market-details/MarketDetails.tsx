import React, {useEffect} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {useRouteMatch} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchSymbol} from "../../actions";
import {SymbolData} from "../../constants/interfaces";
import {StateType} from "../../constants/types";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
    },
    content: {
      flexGrow: 1,
    },
    divider: {
      margin: "16px 0",
    },
  })
);

const useLoadMarketSymbol = (marketSymbol: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSymbol(marketSymbol));
  }, [dispatch, marketSymbol]);
};

const MarketDetails: React.FC = () => {
  const classes = useStyles();
  const {params} = useRouteMatch();

  const marketSymbolId = decodeURIComponent(params.marketSymbolId);

  useLoadMarketSymbol(marketSymbolId);

  const marketSymbolData: SymbolData = useSelector<StateType, SymbolData>(
    (state) => state.symbol
  );

  return marketSymbolId && marketSymbolData && marketSymbolData.marketSymbol ? (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs>
            <Typography component="h6" variant="h6">
              {marketSymbolData.marketSymbol.split(":")[0]}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs>
            <Typography variant="h4" color="textPrimary">
              {marketSymbolData.marketSymbol.split(":")[1]}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Pair
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h4" color="textPrimary">
              ${" "}
              {parseInt(marketSymbolData.ticker.lastPrice, 10).toLocaleString(
                "en-US"
              )}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Price
            </Typography>
          </Grid>
        </Grid>

        <Divider className={classes.divider} />

        <Grid container spacing={4}>
          <Grid item xs>
            <Typography variant="h6" color="textPrimary">
              ${" "}
              {parseInt(marketSymbolData.ticker.lastPrice, 10).toLocaleString(
                "en-US"
              )}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Last Price
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" className={""}>
              {parseFloat("-0.0432").toFixed(2)}%
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              24 h Change
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" color="textPrimary">
              ${" "}
              {parseInt(marketSymbolData.ticker.lowPrice, 10).toLocaleString(
                "en-US"
              )}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              24 h LOW
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" color="textPrimary">
              ${" "}
              {parseInt(marketSymbolData.ticker.highPrice, 10).toLocaleString(
                "en-US"
              )}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              24 h HIGH
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  ) : (
    <Card>Loading ...</Card>
  );
};

export default MarketDetails;
