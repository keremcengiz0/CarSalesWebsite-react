import React from "react";
import {TextField, MenuItem, Select, SelectChangeEvent, Container} from "@mui/material";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Unstable_Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AdvertForm = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Burada, form verilerini doğrulayın ve sunucuya gönderin
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container spacing={2} columns={24}>
        <Grid xs={10} md={10}>
          <ImageList sx={{ width: 500, height: 450, marginLeft:3}} cols={3} rowHeight={164}>
            {itemData?.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid xs={7} md={7}>
          <Box>
            <div>
              <TextField name="title" label="Başlık" fullWidth />
            </div>
            <div>
              <TextField name="brand" label="Marka" fullWidth />
            </div>
            <div>
              <TextField name="series" label="Seri" fullWidth />
            </div>
            <div>
              <TextField name="model" label="Model" fullWidth />
            </div>
            <div>
              <TextField name="year" label="Yıl" fullWidth />
            </div>

            <div>
              <TextField name="km" label="Kilometre" fullWidth />
            </div>
          </Box>
        </Grid>

        <Grid xs={7} md={7}>
          <Box>
            <div>
            <Select name="fuel" label="Yakit Türü" sx={{ m: 1, minWidth: 216 }}>
              <MenuItem value="Benzin">Benzin</MenuItem>
              <MenuItem value="Dizel">Dizel</MenuItem>
              <MenuItem value="Elektrik">Elektrik</MenuItem>
              <MenuItem value="LPG">LPG</MenuItem>
            </Select>
            </div>
            
            <div>
            <TextField name="price" label="Fiyat" fullWidth />
            </div>

            <div>
            <Select
              name="category"
              label="Kategori"
              sx={{ m: 1, minWidth: 216 }}
            >
              <MenuItem value="otomobil">Otomobil</MenuItem>
              <MenuItem value="suv">Arazi, SUV & Pickup</MenuItem>
              <MenuItem value="motosiklet">Motosiklet</MenuItem>
            </Select>
            </div>
            
            <div> 
            <TextField
              name="description"
              label="Açıklama"
              fullWidth
              multiline
              rowsMax={4}
            />
            </div>

            <div>
            <Button type="submit" variant="contained" color="primary" sx={{ m: 1, minWidth: 216}} >
              EKLE
            </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default AdvertForm;
