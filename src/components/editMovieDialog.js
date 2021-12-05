import { Button, Dialog, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minWidth: 600,
    minHeight: 400,
    maxWidth: "auto",
    maxHeight: "auto",
    backgroundColor: "white",
    position: "relative",
  },
  close: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  dataContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 60,
    padding: 20,
  },
  input: {
    marginBottom: 5,
  },
});

export const EditMovieDialog = (props) => {
  const classes = useStyles();
  const { open, setDisplayEditMovie, movie, updateMovies } = props;
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(data?.title);
  const [year, setYear] = useState(data?.year);
  const [rating, setRaiting] = useState(data?.rating);
  const [actor, setActor] = useState(null);

  useEffect(() => {
    setData(movie);
  }, [movie]);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setYear(data.year);
      setRaiting(data.rating);
      setActor(data.actor);
    }
  }, [data, open]);

  const close = () => {
    setDisplayEditMovie(false);
  };

  const handleConfirm = () => {
    updateMovies({ id: data.id, title, year, rating, actor });
    close();
  };

  if (!movie) {
    return null;
  }

  return (
    <Dialog open={open}>
      <div className={classes.container}>
        <div className={classes.close}>
          <Button onClick={close}>X</Button>
        </div>
        <div className={classes.dataContainer}>
          <TextField
            className={classes.input}
            placeholder={"Title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            className={classes.input}
            placeholder={"Year"}
            value={year}
            onChange={(e) => setYear(+e.target.value)}
          />
          <TextField
            className={classes.input}
            placeholder={"Rating"}
            value={rating}
            onChange={(e) => setRaiting(e.target.value)}
          />
          <TextField
            className={classes.input}
            placeholder={"Actor"}
            value={actor}
            onChange={(e) => setActor(e.target.value)}
          />
        </div>
        <Button onClick={handleConfirm}>Confirm</Button>
      </div>
    </Dialog>
  );
};
