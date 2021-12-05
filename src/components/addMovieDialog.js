import { Button, Dialog, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

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

export const AddMovieDialog = (props) => {
  const classes = useStyles();
  const { open, setDisplayAddMovie, addMovie } = props;
  const [title, setTitle] = useState(null);
  const [year, setYear] = useState(null);
  const [rating, setRaiting] = useState(null);
  const [actor, setActor] = useState(null);
  const [movieIndex, setMovieIndex] = useState(0);

  const close = () => {
    setTitle(null);
    setYear(null);
    setRaiting(null);
    setActor(null);
    setDisplayAddMovie(false);
  };

  const handleAddMovie = () => {
    let errStr = "";

    if (!title) {
      errStr = errStr + "* Must have a title\n";
    }
    if (!year || !+year) {
      errStr = errStr + "* Must have a valid year\n";
    }
    if (
      !rating ||
      !+rating ||
      ![...Array(11).keys()].map((x) => x++).includes(+rating)
    ) {
      errStr = errStr + "* Must have a valid rating\n";
    }
    if (!actor) {
      errStr = errStr + "* Must have an actor\n";
    }

    if (errStr && errStr.length) {
      alert(errStr);
      setDisplayAddMovie(true);
      return;
    }

    //if all successful
    addMovie({ id: movieIndex, title, year, rating, actor });
    setMovieIndex(movieIndex + 1);
    setDisplayAddMovie(false);
  };

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
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            className={classes.input}
            placeholder={"Year"}
            onChange={(e) => setYear(e.target.value)}
          />
          <TextField
            className={classes.input}
            placeholder={"Rating"}
            onChange={(e) => setRaiting(e.target.value)}
          />
          <TextField
            className={classes.input}
            placeholder={"Actor"}
            onChange={(e) => setActor(e.target.value)}
          />
        </div>
        <Button onClick={handleAddMovie}>Add</Button>
      </div>
    </Dialog>
  );
};
