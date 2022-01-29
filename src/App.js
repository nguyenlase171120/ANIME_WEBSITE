//Import libraries
import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailsMovie from "./components/Details/DetailsMovie";

//Import components
import Error_page from "./error/Error_page";
import Website_container from "./pages/Container/Website_container";
import Movie_parent from "./pages/Watching/Container/Movie_parent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Website_container />} />
        <Route path="*" element={<Error_page />} />
        <Route path="/movie/detailsMovie" element={<DetailsMovie />} />
        <Route path="/watch/watchMovie" element={<Movie_parent />} />
      </Routes>
    </div>
  );
}

export default App;
