import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 20,
  },
  attribute: {
    textAlign: "left",
    paddingTop: 10,
  },
  typography: {},
}));

const AdvertDetail = () => {
  const { advertId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [advert, setAdvert] = useState(null);
  const classes = useStyles();
  const theme = useTheme();

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
    <Grid container>
      <Grid item xs={4}>
        <Container className={classes.title} sx={{ marginLeft: 5 }}>
          <Typography gutterBottom variant="h6" component="h2" align="left">
            <b>{advert?.title}</b>
          </Typography>

          <Card sx={{ width: "100%", height: 300 }}>
            {advert && (
              <CardMedia
                sx={{ height: "100%", objectFit: "contain" }}
                image={advert.images[0].imageUrl}
                title="Vehicle Image"
              />
            )}
          </Card>
          <Box className={classes.Description}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              align="left"
              paddingTop={8}
            >
              <b>Açıklama</b>
            </Typography>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                variant="outlined"
                color="secondary"
                multiline
                defaultValue=""
                rows={10}
                value={advert?.description}
              />
            </FormControl>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={4}>
        <Container
          sx={{ marginTop: 5, marginLeft: 30 }}
          className={classes.attribute}
        >
          <Typography variant="h6" color="blue" component="p">
            Fiyat: {advert?.vehicle.price} TL
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            İlan no: {advert?.id}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            İlan Tarihi: {advert?.advertDate}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Marka: {advert?.vehicle.brand}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Seri: {advert?.vehicle.series}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Model: {advert?.vehicle.model}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Yıl: {advert?.vehicle.year}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Yakıt: {advert?.vehicle.fuel}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Vites Tipi: {advert?.vehicle.gearType}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            KM: {advert?.vehicle.km}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Kasa Tipi: {advert?.vehicle.category.categoryName}
          </Typography>
        </Container>
      </Grid>
      <Grid item xs={4}>
        Right Section
      </Grid>
    </Grid>
  );
};

export default AdvertDetail;
