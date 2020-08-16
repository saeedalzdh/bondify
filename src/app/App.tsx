import React, {useState} from "react";
import Routes from "../app/Routes";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import Header from "./header/Header";
import {Provider} from "react-redux";
import store from "../store";

const App = () => {
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
        <Header onDarkModeChange={handleDarkModeChange} />
        <Routes />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
