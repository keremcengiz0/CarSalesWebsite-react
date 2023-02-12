import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
import { LockOpen } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: 250,
  },
  link: {
    fontSize: "16px",
    textDecoration: "none",
    boxShadow: "none",
    color: "white",
  },
}));

function Navbar() {
  const classes = useStyles();
  let navigate = useNavigate();

  const onClick = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("refreshKey");
    localStorage.removeItem("userName");
    navigate("/auth/login");
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    ></Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#8c9017" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{ backgroundColor: "#8c9017", color: "white" }}
          >
            <Link className={classes.link} to={{ pathname: "/" }}>
              {" "}
              sahibinden.com{" "}
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Typography variant="h10">
                {localStorage.getItem("currentUser") == null ? (
                  <Link className={classes.link} to="/auth/login">
                    Login/Register
                  </Link>
                ) : (
                  <div>
                    <IconButton variant="h6" onClick={onClick}>
                      <LockOpen> </LockOpen>
                    </IconButton>
                    <Link
                      className={classes.link}
                      to={{
                        pathname:
                          "/users/" +
                          localStorage.getItem("currentUser") +
                          "/adverts",
                      }}
                    >
                      Profile
                    </Link>
                  </div>
                )}
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

export default Navbar;
