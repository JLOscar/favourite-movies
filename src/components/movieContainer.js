import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert, Button } from "@mui/material";
import { AddMovieDialog } from "./addMovieDialog";
import { EditMovieDialog } from "./editMovieDialog";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    maxWidth: 800,
  },
  row: {},
  rowBtns: {
    display: "flex",
    justifyContent: "space-around",
  },
  addBtn: {
    marginTop: 20,
    width: 200,
  },
  addBtnWrapper: {
    marginBottom: 20,
  },
});

export const MovieContainer = (props) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [displayAddMovie, setDisplayAddMovie] = useState(false);
  const [displayEditMovie, setDisplayEditMovie] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertData, setAlertData] = useState({
    severity: null,
    title: null,
    text: null,
  });

  useEffect(() => {
    setMovies();
  }, []);

  const handleEdit = (id) => {
    for (const movie of movies) {
      if (movie.id === id) {
        setMovieToEdit(movie);
        setDisplayEditMovie(true);
      }
    }
  };

  const addMovie = (incomingMovie) => {
    if (movies?.length) {
      setMovies([...movies, incomingMovie]);
    } else {
      setMovies([incomingMovie]);
    }
    setAlertData({
      severity: "success",
      title: incomingMovie.title,
      text: "Successfully added movie",
    });
    setDisplayAlert(true);
  };

  const updateMovies = (updatedMovie) => {
    let tempMovies = [];
    for (const movie of movies) {
      if (movie.id === updatedMovie.id) {
        tempMovies.push(updatedMovie);
      } else {
        tempMovies.push(movie);
      }
    }
    setAlertData({
      severity: "success",
      title: updatedMovie.title,
      text: "Successfully edited movie",
    });
    setDisplayAlert(true);
    setMovies(tempMovies);
  };

  const handleRemove = (id) => {
    let tempMovies = [];
    let removedTitle = "";

    for (const movie of movies) {
      if (movie.id !== id) {
        tempMovies.push(movie);
      } else {
        removedTitle = movie.title;
      }
    }
    setAlertData({
      severity: "success",
      title: removedTitle,
      text: "Successfully removed movie",
    });
    setDisplayAlert(true);
    setMovies(tempMovies);
  };

  const hideAlert = () => {
    setDisplayAlert(false);
    setAlertData({
      severity: null,
      title: null,
      text: null,
    });
  };

  return (
    <div className={classes.container}>
      {displayAlert && (
        <Alert
          style={{ margin: "20px 0" }}
          severity="success"
        >{`${alertData.text} ${alertData.title}`}</Alert>
      )}
      <AddMovieDialog
        open={displayAddMovie}
        setDisplayAddMovie={setDisplayAddMovie}
        addMovie={addMovie}
      />
      <EditMovieDialog
        open={displayEditMovie}
        setDisplayEditMovie={setDisplayEditMovie}
        updateMovies={updateMovies}
        movie={movieToEdit}
      />
      <div className={classes.addBtnWrapper}>
        <Button
          className={classes.addBtn}
          variant="contained"
          onClick={() => {
            hideAlert();
            setDisplayAddMovie(true);
          }}
        >
          Add movie
        </Button>
      </div>
      {movies ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Rating (1-10)</TableCell>
                <TableCell align="right">Actor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((row, i) => (
                <TableRow
                  className={classes.row}
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.year}</TableCell>
                  <TableCell align="right">{row.rating}</TableCell>
                  <TableCell align="right">{row.actor}</TableCell>
                  <TableCell align="right">
                    <div className={classes.rowBtns}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          hideAlert();
                          handleEdit(row.id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{ backgroundColor: "red" }}
                        variant="contained"
                        onClick={() => {
                          hideAlert();
                          handleRemove(row.id);
                        }}
                      >
                        X
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div style={{ textAlign: "center" }}>
          Det finns inga filmer i databasen, lägg till via knappen "Add Movie"
          <br />
          Databasen är en mockad databas och kommer att nollställas vid
          siduppdatering
        </div>
      )}
    </div>
  );
};
