import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



function Home() {

return(
<Card sx={{ maxWidth: 240 }} style={{marginLeft:10, marginTop:10}} >
      <CardMedia
        sx={{ height: 120 }}
        image = "/Images/kona.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hyundai Kona
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>

);

}

export default Home;