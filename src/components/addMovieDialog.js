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
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [rating, setRaiting] = useState(0);
  const [actor, setActor] = useState("");
  const [movieIndex, setMovieIndex] = useState(0);

  const close = () => {
    setDisplayAddMovie(false);
  };

  const handleAddMovie = () => {
    console.log({ title, year, rating, actor });
    let errStr = null;

    // if (title && typeof title !== "string") {
    //   errStr = "* Must have a title \n";
    // }
    // if (year) {
    //   console.log(year);
    //   errStr = errStr + "* Must have a valid year \n";
    // }
    // if (rating && typeof rating !== "number") {
    //   errStr = errStr + "* Must have a raiting \n";
    // }
    // if (actor && typeof actor !== "string") {
    //   errStr = errStr + "* Must have a actor \n";
    // }

    if (errStr) {
      alert(errStr);
    }
    console.log({ errStr });

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
            onChange={(e) => setYear(+e.target.value)}
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
