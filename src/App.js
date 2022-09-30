import theme from "./muiTheme";
import { ThemeProvider } from "@emotion/react";
import Home from "./components/Pages/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  )
};

export default App;
