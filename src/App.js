import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
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
      <Nav />
      <Header />
      <Content />
    </div>
  );
}

export default App;
