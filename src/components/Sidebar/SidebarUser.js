import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '%100',
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    fontSize: '16px',
    textDecoration: 'none',
    color: 'black',
  },
}));

export default function SidebarUser() {
  const classes = useStyles();

  return (
    <div className="sidebar">
      <Divider />
      <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
      <Link className={classes.link} to={{pathname :'/users/{userId}/adverts'}}> <h2 >İlanlarım</h2> </Link> 
    </ListItem>
      </List>
    </div>
  );
}
