//Import libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

//Import components
import Error_page from "./error/Error_page";
import Website_container from "./pages/Container/Website_container";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Website_container />} />
        <Route path="*" element={<Error_page />} />
      </Routes>
    </div>
  );
}

export default App;
