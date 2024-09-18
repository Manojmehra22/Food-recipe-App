import React, { useState } from "react";
import Mealcards from "./Mealcards.jsx";

const Mainpage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const jsonData = await get.json();
    // console.log(jsonData.meals);
    setData(jsonData.meals);
  };
  // console.log(data);

  return (
    <>
      <div className="container">
        <div className="searchbar">
          <input type="text" placeholder="Enter Dishe" onChange={handleInput} />
          <button onClick={myFun}>Search</button>
        </div>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
