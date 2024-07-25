import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import SearchInfo from "./pages/SearchInfo";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mealId" element={<SearchInfo />} />
    </Routes>
  );
};

export default App;
