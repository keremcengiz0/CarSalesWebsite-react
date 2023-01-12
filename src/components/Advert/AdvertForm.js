import React, { useState } from "react";
import { TextField, MenuItem, Select, FormControl } from "@mui/material";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Unstable_Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@material-ui/core/Button";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import UploadImages from "../Common/UploadImages";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const AdvertForm = (props) => {
  const [isSent, setIsSent] = useState(false);
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [advertList, setAdvertList] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const currentDate = new Date();

  const [stateAdvert, setStateAdvert] = useState({
    title: "",
    description: "",
    imageUrl: "",
    brand: "",
    series: "",
    model: "",
    year: "",
    fuel: "",
    km: "",
    price: "",
    gearType: "",
    category: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      userId: localStorage.getItem("currentUser"),
      title: stateAdvert.title,
      description: stateAdvert.description,
      images: [
        {
          imageUrl: stateAdvert.imageUrl,
        },
      ],
      vehicle: {
        brand: stateAdvert.brand,
        series: stateAdvert.series,
        model: stateAdvert.model,
        year: stateAdvert.year,
        fuel: stateAdvert.fuel,
        km: stateAdvert.km,
        price: stateAdvert.price,
        gearType: stateAdvert.gearType,
        category: {
          id: stateAdvert.category,
        },
      },
    };

    axios
      .post("/adverts", data, {
        headers: {
          Authorization: localStorage.getItem("tokenKey"),
        },
      })
      .then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => console.log(error));
  };

  const imageSelectedHandler = (files) => {
    setLoading(true);
    setUploadedFiles(files);
    setStateAdvert({ ...stateAdvert, imageUrl: files[0].url });
    setLoading(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setLoading(false);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={2} columns={24}>
        <Grid xs={10} md={10}>
          <ImageList
            sx={{ width: 500, height: 500, marginLeft: 3 }}
            cols={1}
            rowHeight={164}
          >
            {loading && (
              <CircularProgress style={{ marginTop: 250, marginLeft: 300 }} />
            )}
            {!loading && uploadedFiles.length === 0
              ? "Resim Ekleyin"
              : uploadedFiles.map((file, index) => (
                  <ImageListItem key={index}>
                    <img src={file.url} alt={file.public_id} />
                  </ImageListItem>
                ))}
          </ImageList>

          <Snackbar
            open={loading}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Resim yükleniyor. Lütfen bekleyiniz...{" "}
            </Alert>
          </Snackbar>
        </Grid>
        <Grid xs={7} md={7}>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <div>
                <TextField
                  name="title"
                  label="İlan Başlığı"
                  fullWidth
                  onChange={(event) =>
                    setStateAdvert({
                      ...stateAdvert,
                      title: event.target.value,
                    })
                  }
                />
              </div>
              <div>
                <TextField
                  name="brand"
                  label="Marka"
                  fullWidth
                  onChange={(event) =>
                    setStateAdvert({
                      ...stateAdvert,
                      brand: event.target.value,
                    })
                  }
                />
              </div>
              <div>
                <TextField
                  name="series"
                  label="Seri"
                  fullWidth
                  onChange={(event) =>
                    setStateAdvert({
                      ...stateAdvert,
                      series: event.target.value,
                    })
                  }
                />
              </div>
              <div>
                <TextField
                  name="model"
                  label="Model"
                  fullWidth
                  onChange={(event) =>
                    setStateAdvert({
                      ...stateAdvert,
                      model: event.target.value,
                    })
                  }
                />
              </div>
              <div>
                <TextField
                  name="year"
                  label="Yıl"
                  fullWidth
                  onChange={(event) =>
                    setStateAdvert({ ...stateAdvert, year: event.target.value })
                  }
                />
              </div>

              <div>
                <TextField
                  name="km"
                  label="Kilometre"
                  fullWidth
                  onChange={(event) =>
                    setStateAdvert({ ...stateAdvert, km: event.target.value })
                  }
                />
              </div>
            </FormControl>
          </Box>
        </Grid>

        <Grid xs={7} md={7}>
          <Box>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="fuel-select-label">Yakıt Türü</InputLabel>
                <Select
                  name="fuel"
                  labelId="fuel-select-label"
                  id="fuel-select"
                  label="Yakıt Türü"
                  sx={{ m: 1, minWidth: 216 }}
                  defaultValue=""
                  onChange={(event) =>
                    setStateAdvert({ ...stateAdvert, fuel: event.target.value })
                  }
                >
                  <MenuItem value="Benzin">Benzin</MenuItem>
                  <MenuItem value="Dizel">Dizel</MenuItem>
                  <MenuItem value="Elektrik">Elektrik</MenuItem>
                  <MenuItem value="LPG">LPG</MenuItem>
                </Select>
              </FormControl>
            </div>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <div style={{ margin: -18 }}>
                <TextField
                  name="price"
                  label="Fiyat"
                  fullWidth
                  onChange={(event) =>
                    setStateAdvert({
                      ...stateAdvert,
                      price: event.target.value,
                    })
                  }
                />
              </div>
            </FormControl>

            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="category-select-label">Kategori</InputLabel>
                <Select
                  name="category"
                  label="Kategori"
                  sx={{ m: 1, minWidth: 216 }}
                  defaultValue=""
                  onChange={(event) =>
                    setStateAdvert({
                      ...stateAdvert,
                      category: event.target.value,
                    })
                  }
                >
                  <MenuItem value={Number("1")}>Otomobil</MenuItem>
                  <MenuItem value={Number("2")}>Arazi, SUV & Pickup</MenuItem>
                  <MenuItem value={Number("3")}>Motosiklet</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="gearType-select-label">Vites Tipi</InputLabel>
                <Select
                  name="gearType"
                  label="Vites Tipi"
                  sx={{ m: 1, minWidth: 216 }}
                  defaultValue=""
                  onChange={(event) =>
                    setStateAdvert({
                      ...stateAdvert,
                      gearType: event.target.value,
                    })
                  }
                >
                  <MenuItem value="Yarı Otomatik">Yarı Otomatik</MenuItem>
                  <MenuItem value="Otomatik">Otomatik</MenuItem>
                  <MenuItem value="Manuel">Manuel</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <TextField
                name="description"
                label="Açıklama"
                fullWidth
                multiline
                rowsMax={4}
                onChange={(event) =>
                  setStateAdvert({
                    ...stateAdvert,
                    description: event.target.value,
                  })
                }
              />
            </div>

            <div>
              <UploadImages
                getUploadedFiles={imageSelectedHandler}
                setLoading={setLoading}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ float: "right", marginTop: 60, marginRight: 50 }}
                sx={{ m: 1, minWidth: 216 }}
                onClick={handleSubmit}
              >
                İLAN EKLE
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default AdvertForm;
