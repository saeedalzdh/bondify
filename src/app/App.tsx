import React, {useState, Suspense, lazy} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CircularProgress} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import Header from "./header/Header";
import {Provider} from "react-redux";
import store from "../store";

const MarketListing = lazy(() => import("./market-listing/MarketListing"));
const MarketDetails = lazy(() => import("./market-details/MarketDetails"));

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDark, setDark] = useState(true);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDark && prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#0e4b80",
          },
          secondary: {
            main: "#ffffff",
          },
        },
      }),
    [isDark, prefersDarkMode]
  );

  const handleDarkModeChange = () => {
    setDark(!isDark);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <Header onDarkModeChange={handleDarkModeChange} />
          <Suspense fallback={<CircularProgress />}>
            <Switch>
              <Route exact path="/" component={MarketListing} />
              <Route exact path="/:marketSymbolId" component={MarketDetails} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
