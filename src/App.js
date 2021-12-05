import "./App.css";
import React from "react";
import { makeStyles } from "@mui/styles";
import { MovieContainer } from "./components/movieContainer";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "hidden",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MovieContainer />
    </div>
  );
}

export default App;
