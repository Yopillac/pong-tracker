import { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import GlobalContext from "../../Context";

const NavButton = ({nav, title}) => {
  const { setNavState } = useContext(GlobalContext);

  const switchNav = () => {
    setNavState({
      nav: nav,
      page: 'main',
    });
  };

  return (
    <Button onClick={switchNav}>
      <Typography>
        {title}
      </Typography>
    </Button>
  )
};

export default NavButton;
