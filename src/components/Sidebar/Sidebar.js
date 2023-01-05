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

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className="sidebar">
      <Divider />
      <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
      <Link className={classes.link} to={{pathname :'/'}}> <h2 >Vasıta</h2> </Link> 
        </ListItem>
        <ListItem button>
            <Link className={classes.link} to={{pathname :'/otomobil'}}> Otomobil </Link> 
        </ListItem>
        <ListItem button>
            <Link className={classes.link} to={{pathname :'/arazi-suv-pickup'}}> Arazi, Suv & Pickup </Link> 
        </ListItem>
        <ListItem button>
            <Link className={classes.link} to={{pathname :'/motosiklet'}}> Motosiklet </Link> 
        </ListItem>
      </List>
    </div>
  );
}
