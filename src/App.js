//Import libraries
import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailsMovie from "./components/Details/DetailsMovie";

//Import components
import Error_page from "./error/Error_page";
import Website_container from "./pages/Container/Website_container";
import UserLogin from "./pages/Login/User/UserLogin";
import UserRegistration from "./pages/Registration/User/UserRegistration";
import Movie_parent from "./pages/Watching/Container/Movie_parent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Website_container />} />
        <Route path="*" element={<Error_page />} />
        <Route path="/details-movie" element={<DetailsMovie />} />
        <Route path="/watch/watchMovie" element={<Movie_parent />} />
        <Route path="/user-register" element={<UserRegistration />} />
        <Route path="/user-login" element={<UserLogin />} />
      </Routes>
    </div>
  );
}

export default App;
