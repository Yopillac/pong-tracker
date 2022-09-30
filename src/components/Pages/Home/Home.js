import { useContext } from "react";
import Dashboard from "../Dashboard";
import DataEntry from "../DataEntry";
import Games from "../Games";
import GlobalContext from "../../common/Context";

const Home = () => {
  const { navState } = useContext(GlobalContext);

  const renderPage = (page) => {
    switch (page) {
      case "dataEntry":
        return <DataEntry/>
      case "games":
        return <Games/>
      default:
        return <Dashboard/>
    }
  }

  return (
    <>
      {renderPage(navState.nav)}
    </>
  )
};

export default Home;
