import React, { useState } from "react";
import Mealcards from "./Mealcards.jsx";
import background from "/bgImage1.avif";

const Mainpage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search == "") {
      setMsg("Please Enter something!🙃");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      // console.log(jsonData.meals);
      setData(jsonData.meals);
      setMsg("");
    }
  };
  // console.log(data);

  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    width: "100vw",
    marginTop: "-70px",
    // fontsize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="box" style={myStyle}>
      <h1 className="head">FOOD RECIPE E-BOOK</h1>
      <div className="container">
        <div className="searchbar">
          <input type="text" placeholder="Enter Dishe" onChange={handleInput} />
          <button onClick={myFun}>Search</button>
        </div>
        <h4 className="error">{msg}</h4>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
