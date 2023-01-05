import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "../Sidebar/Sidebar";

function Home() {
  return (
    <>
      <Grid container spacing={2} columns={24}>
        <Grid xs={6} md={4}>
          <Sidebar></Sidebar>
        </Grid>

        <Grid xs={18} md={20}>
          <Box>
            <Grid container spacing={2}>
              <Grid>{"Vasıta Vitrini"}</Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={3}>
              <Grid>
                <Card sx={{ width: 240 }}>
                  <CardMedia
                    sx={{ height: 120 }}
                    image="/Images/kona.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Hyundai Kona
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
              <Grid>
                <Card sx={{ width: 240 }}>
                  <CardMedia
                    sx={{ height: 120 }}
                    image="/Images/kona.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Hyundai Kona
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
              <Grid>
                <Card sx={{ width: 240 }}>
                  <CardMedia
                    sx={{ height: 120 }}
                    image="/Images/kona.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Hyundai Kona
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
              <Grid>
                <Card sx={{ width: 240 }}>
                  <CardMedia
                    sx={{ height: 120 }}
                    image="/Images/kona.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Hyundai Kona
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
              <Grid>
                <Card sx={{ width: 240 }}>
                  <CardMedia
                    sx={{ height: 120 }}
                    image="/Images/kona.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Hyundai Kona
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
              <Grid>
                <Card sx={{ width: 240 }}>
                  <CardMedia
                    sx={{ height: 120 }}
                    image="/Images/kona.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Hyundai Kona
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
              <Grid>
                <Card sx={{ width: 240 }}>
                  <CardMedia
                    sx={{ height: 120 }}
                    image="/Images/kona.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Hyundai Kona
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
              <Grid>
                <Card sx={{ width: 240 }}>
                  <CardMedia
                    sx={{ height: 120 }}
                    image="/Images/kona.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Hyundai Kona
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
