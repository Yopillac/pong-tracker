import { Box, Typography } from "@mui/material";
import NavButton from "./NavButton";
import * as constants from "../../../constants";

const Navbar = () => {
  const barStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%"
  };

  return (
    <Box sx={barStyle}>
      {Object.keys(constants.navButtons).map((button) => (
        <NavButton
          nav={button}
          title={constants.navButtons[button]}
        />
      ))}
    </Box>
  )
};

export default Navbar;
