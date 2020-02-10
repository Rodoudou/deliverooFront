import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [counters, setCounters] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3100/");
      setMovies(response.data);
    } catch (error) {
      console.error("An error occured");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Incremented");
  }, [counters]);

  return (
    <div className="App">
      <h1>Hello Front-End !</h1>
      <ul>
        {movies.map((movie, index) => {
          return (
            <li key={movie}>
              <span>{movie}</span>
              <button
                onClick={() => {
                  axios.post("http://localhost:3100/delete/543436");
                }}
              >
                Supprimer
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        {counters}
        <button
          onClick={() => {
            setCounters(counters + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
