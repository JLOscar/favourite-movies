import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  movie: {},
});

export const Movie = () => {
  const classes = useStyles();

  return <div className={classes.movie}>This i a movie</div>;
};
