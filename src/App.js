import theme from "./muiTheme";
import { ThemeProvider } from "@emotion/react";
import Home from "./components/Pages/Home";
import Header from "./components/common/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Home/>
      </Header>
    </ThemeProvider>
  )
};

export default App;
