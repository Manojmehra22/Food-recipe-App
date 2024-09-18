import React from "react";
import "./App.css";
import Mainpage from "./Component/Mainpage";
import MealInfo from "./Component/MealInfo";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/:mealid" element={<MealInfo />} />
    </Routes>
  );
};

export default App;
