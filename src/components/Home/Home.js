import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "../Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { CardActionArea, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
    alignItems: "center",
    backgroundColor: "white",
  },
}));

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [advertList, setAdvertList] = useState([]);
  const classes = useStyles();
  let navigate = useNavigate();

  const handleCardClick = (advertId) => {
    navigate(`/adverts/${advertId}`);
  };

  const refreshAdverts = () => {
    axios
      .get("/adverts")
      .then(
        (response) => {
          const { adverts } = response.data;
          setIsLoaded(true);
          setAdvertList(adverts);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    refreshAdverts();
  }, []);

  return (
    <>
      <Grid container spacing={2} columns={24}>
        <Grid xs={6} md={4}>
          <Sidebar></Sidebar>
        </Grid>

        <Grid xs={18} md={20}>
          <Box>
            <Grid container spacing={2}>
              <Grid>
                <b> {"VASITA VİTRİNİ"} </b>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={3}>
              {advertList.map((advertDto) => (
                <Grid>
                  <Tooltip title={advertDto.title}>
                    <Card sx={{ width: 240 }}>
                      <CardActionArea
                        onClick={() => handleCardClick(advertDto.id)}
                      >
                        <CardMedia
                          sx={{ height: 120 }}
                          image={advertDto.images[0].imageUrl}
                          title="Vehicle Image"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h10"
                            component="div"
                          >
                            {advertDto.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
