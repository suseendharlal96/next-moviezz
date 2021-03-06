import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  CardContent,
  Grid,
  Button,
} from "@material-ui/core";

import styles from "../styles/Home.module.css";
import useStyles from "../styles/globalstyle";

export default function Index({ movies }) {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Moviezz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        direction="row"
        spacing={2}
        wrap="wrap"
        justify="center"
        alignItems="center"
      >
        {movies &&
          movies.map((movie, index) => (
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
                      {index + 1 + ". "}
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
                      Rating:
                      {movie.rating}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("https://node-shop-cart.herokuapp.com/movies");
  return {
    props: {
      movies: res.data.movies,
    },
  };
};
