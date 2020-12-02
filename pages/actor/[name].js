import React from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Grid,
  Button,
} from "@material-ui/core";

const ActorPage = ({ movies }) => {
  return (
    <>
      <Head>
        <title>{movies[0].cast} | Next Moviezz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button color="secondary" variant="contained">
        <Link href={"/"}>
          <a>Home</a>
        </Link>
      </Button>
      <Grid
        container
        direction="row"
        spacing={2}
        wrap="wrap"
        justify="center"
        alignItems="center"
      >
        {movies &&
          movies.map((movie) => (
            <Grid
              style={{ margin: "0px" }}
              key={movie._id}
              item
              xs={12}
              sm={6}
              md={3}
              lg={4}
            >
              <Card variant="outlined">
                <CardActionArea>
                  <CardContent>
                    <CardMedia
                      image={movie.image}
                      title={movie.title}
                      style={{
                        width: "300px",
                        height: "300px",
                      }}
                    />
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="primary">
                      Lead Actor:
                      <Link href={`/actor/${movie.actorSlug}`}>
                        <a>{movie.cast}</a>
                      </Link>
                    </Typography>
                    <Typography gutterBottom variant="h6" color="secondary">
                      Director:
                      <Link href={`/director/${movie.directorSlug}`}>
                        <a>{movie.director}</a>
                      </Link>
                    </Typography>
                    <Typography gutterBottom variant="h6">
                      {movie.rating}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ActorPage;

// destructuring params  from context
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://node-shop-cart.herokuapp.com/movies/actor/${params.name}`
  );
  return {
    props: {
      movies: res.data,
    },
  };
};
