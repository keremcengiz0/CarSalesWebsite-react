import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles((theme) => ({
  GridImage: {
    flexWrap: "wrap",
    justifyContent: "left",
    alignItems: "center",
    marginLeft: 40,
    marginTop: 50,
  },
  Title: {
    marginLeft: 40,
  },
  Description: {
    marginTop: 50,
  },
}));

const AdvertDetail = () => {
  const { advertId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [advert, setAdvert] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`/adverts/${advertId}`)
      .then((response) => {
        const { advertDto } = response.data;
        setIsLoaded(true);
        setAdvert(advertDto);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [advertId]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <Box className={classes.Title}>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            {advert?.title}
          </Typography>
        </Box>
        <Card sx={{ width: 440 }} className={classes.GridImage}>
          {advert && (
            <CardMedia
              sx={{ height: 220 }}
              image={advert.images[0].imageUrl}
              title="Vehicle Image"
            />
          )}
        </Card>
        <Box className={classes.Description}>
          <h4>Açıklama</h4>
          <TextField
            variant="outlined"
            color="secondary"
            multiline
            defaultValue=""
            rows={10}
            sx={{ width: 440, height: 220 }}
            value={advert?.description}
          />
        </Box>
      </Grid>

      <Grid item xs={4}>
        {advert && (
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Marka: {advert?.vehicle.brand}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Seri: {advert?.vehicle.series}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Model: {advert?.vehicle.model}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Yıl: {advert?.vehicle.year}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Yakıt: {advert?.vehicle.fuel}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              KM: {advert?.vehicle.km}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Fiyat: {advert?.vehicle.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Vites Tipi: {advert?.vehicle.gearType}
            </Typography>
          </CardContent>
        )}
      </Grid>
    </Grid>
  );
};

export default AdvertDetail;
