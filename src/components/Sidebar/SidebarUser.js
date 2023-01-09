import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "%100",
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    fontSize: "16px",
    textDecoration: "none",
    color: "black",
  },
  selected: {
    backgroundColor: "#8c9017",
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className="sidebar">
      <Divider />
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        <ListItem>
          <Link 
          className={classes.link} 
          to={{ pathname: "/" }}>
            <h2>Ana Sayfa</h2>
          </Link>
        </ListItem>

        <ListItem
          button
          component={Link} to={{ pathname: "/adverts/add-adverts" }}
          className={location.pathname === "/adverts/add-adverts" ? classes.selected: null }
        >
          İlan Ekle
        </ListItem>
      </List>
    </div>
  );
}
