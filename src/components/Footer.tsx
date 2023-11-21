import { Typography, Grid, Box, Link } from "@mui/material";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import { helpfulLinks } from "../constants/footerData";

const Footer = () => {
  return (
    <Box
      marginTop={10}
      paddingY={8}
      paddingX={{ xs: 4, sm: 8, md: 0 }}
      minHeight={"30vh"}
      sx={{ backgroundColor: "#2C5F2DFF" }}
      //   sx={{ backgroundColor: "#2C5F2DFF", minHeight: "30vh", width: "100vw" }}
    >
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 4, md: 2 }}
      >
        <Grid
          container
          direction="column"
          item
          alignItems="center"
          justifyContent="center"
          md={4}
          sm={10}
          spacing={11}
        >
          <Grid item>
            <Typography variant="h3" color="#fff" padding={2}>
              A a s t h a
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          // direction="column"
          item
          md={4}
          sm={6}
          spacing={2}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Grid item>
            <Box
              border={2}
              borderColor={"white"}
              borderRadius={2}
              padding={0.75}
            >
              <Typography color={"white"}>Helpful Links</Typography>
            </Box>
          </Grid>
          {helpfulLinks.map((helpfulLink) => {
            return (
              <Grid item xs={12}>
                <Link href={helpfulLink.link} color="#fff" underline="hover">
                  {helpfulLink.name}
                </Link>
              </Grid>
            );
          })}
        </Grid>

        <Grid
          container
          // direction="column"
          item
          md={3}
          sm={6}
          spacing={1}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Grid item>
            <Box
              border={2}
              borderColor={"white"}
              borderRadius={2}
              padding={0.75}
            >
              <Typography color={"white"}>Contact Us</Typography>
            </Box>
          </Grid>

          <Grid item container spacing={1} xs={12}>
            <Grid item>
              <LocationOnIcon sx={{ color: "#fff" }} />
            </Grid>

            <Grid item>
              <Typography color="white">Bolachhen-4, Bhaktapur</Typography>
            </Grid>
          </Grid>

          <Grid item container spacing={1} xs={12}>
            <Grid item>
              <PhoneIcon sx={{ color: "#fff" }} />
            </Grid>

            <Grid item>
              <Typography color="white">01-6616904</Typography>
            </Grid>
          </Grid>

          <Grid container item spacing={1} xs={12}>
            <Grid item>
              <EmailIcon sx={{ color: "#fff" }} />
            </Grid>
            <Grid item>
              <Typography color="white">aastha.saccos@gmail.com</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
