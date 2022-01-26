//Import libraries
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header_container from "./components/Header/Header_container";

//Import components
import Error_page from "./error/Error_page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header_container />} />
        <Route path="*" element={<Error_page />} />
      </Routes>
    </div>
  );
}

export default App;
