import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const News = () => {
  return (
    <div>
      <Header />

      <Grid container item justifyContent={"center"} alignItems={"center"}>
        <Box
          padding={1}
          borderRadius={3}
          sx={{ backgroundColor: "#2C5F2DFF" }}
          marginTop={5}
          maxWidth={300}
        >
          <Typography variant="h3" color={"white"} textAlign={"center"}>
            Aastha News
          </Typography>
        </Box>
      </Grid>

      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        paddingX={7}
        marginTop={3}
      >
        <Grid item container spacing={2} direction="column" xs={12} md={7}>
          <Grid item>
            <Typography
              variant="h5"
              border={2}
              maxWidth={160}
              padding={0.5}
              borderRadius={2}
              borderColor={"#2C5F2DFF"}
            >
              News Title
            </Typography>
          </Grid>

          <Grid item>
            <img
              src=" https://source.unsplash.com/700x350"
              alt="logo"
              style={{ width: "100%", height: "auto", borderRadius: 5 }}
            />
          </Grid>

          <Grid item>
            <Typography>date</Typography>
          </Grid>

          <Grid item>
            <Typography textAlign={"justify"}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={4}>
          <Grid item>
            <Typography
              variant="h5"
              border={2}
              maxWidth={130}
              padding={0.5}
              borderRadius={2}
              borderColor={"#2C5F2DFF"}
            >
              Other News
            </Typography>
          </Grid>
          <Grid item container spacing={3} direction="column" xs={4}>
            <Grid item>
              <GridFolder />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default News;

const GridFolder = () => {
  return (
    <Grid container direction="column" spacing={4} paddingTop={2.1}>
      {itemData.map((item) => (
        <Grid item>
          <Card sx={{ maxWidth: 450 }} style={{ backgroundColor: "#DFF5CE" }}>
            <Grid container>
              <Grid item xs={9}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Grid container direction="row">
                    <Grid item xs={10}>
                      <Button size="small">Read More</Button>
                    </Grid>

                    <Grid item>
                      <Typography>{item.date}</Typography>
                    </Grid>
                  </Grid>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const itemData = [
  {
    img: "https://source.unsplash.com/random/200*300/?breakfast",
    date: "2074/4/5",
    title: "17 th Annual Gernal Meeting",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?night",
    date: "2074/4/5",
    title: "Dengue Awareness Program",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?cars",
    date: "2074/4/5",
    title: "Book Reading Program",
  },
];
