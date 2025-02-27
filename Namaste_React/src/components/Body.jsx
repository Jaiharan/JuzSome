import { FaSearch } from "react-icons/fa";
import resData from "../utils/data.json";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfrestaurants, setListOfrestaurants] = useState(
    resData.restaurants
  );

  return (
    <div className="body">
      <div className="search-bar mb-5">
        <input
          type="text"
          className="search-input"
          placeholder="Search here..."
        ></input>
        <button className="search-logo">
          <FaSearch />
        </button>
      </div>
      <div className=" flex justify-center align-center m-5 p-4 ">
        <button
          onClick={() => {
            setListOfrestaurants(
              listOfrestaurants.filter((res) => res.info.avgRating > 4.5)
            );
            alert("Restaurants with rating greater than 4.5 will be displayed");
          }}
          className=" max-w-auto p-2 cursor-pointer bg-black px-3 text-white rounded-md hover:bg-gray-800 border-2 border-black ease-in transition-all duration-300"
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {listOfrestaurants.map((resObj) => {
          return <RestaurantCard key={resObj.info.id} resObj={resObj} />;
        })}
      </div>
    </div>
  );
};

export default Body;
