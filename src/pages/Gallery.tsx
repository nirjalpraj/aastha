import * as React from "react";

// import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActions, CardMedia, Button, Box, Typography } from "@mui/material";
import { gridData } from "../constants/galleryData";
import Header from "../components/Header";

const Gallery = () => {
  return (
    <Box>
      <Header />
      <Grid container item justifyContent={"center"} alignItems={"center"}>
        <Box
          padding={1}
          borderRadius={3}
          sx={{ backgroundColor: "#2C5F2DFF" }}
          marginTop={5}
          maxWidth={200}
        >
          <Typography variant="h3" color={"white"} textAlign={"center"}>
            Gallery
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        spacing={4}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={3}
      >
        {gridData.map((item) => (
          <Grid item>
            <Card sx={{ width: 330, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="250"
                image={item.img}
                alt="green iguana"
              />
              {/* <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
              </CardContent> */}
              <CardActions sx={{ background: "#2C5F2DFF" }}>
                <Button size="small">
                  <Typography color={"white"} variant="subtitle2">
                    {item.title}
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Footer />
    </Box>
  );
};

export default Gallery;
