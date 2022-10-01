import { useContext, useEffect } from "react";
import Dashboard from "../Dashboard";
import DataEntry from "../DataEntry";
import Games from "../Games";
import GlobalContext from "../../common/Context";

const Home = () => {
  const { navState } = useContext(GlobalContext);

  console.log(navState);

  const renderPage = (page) => {
    switch (page) {
      case "dataEntry":
        console.log('s');
        return <DataEntry/>
      case "games":
        return <Games/>
      default:
        return <Dashboard/>
    }
  }

  useEffect(() => {

  }, [navState.nav])

  return (
    <>
      {renderPage(navState.nav)}
    </>
  )
};

export default Home;
