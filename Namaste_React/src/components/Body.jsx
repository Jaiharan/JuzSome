import { FaSearch } from "react-icons/fa";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import SkimmerCards from "./Skimmer";
import { DefaultSkimmerArraySize } from "./Skimmer";

const Body = () => {
  const [listOfrestaurants, setListOfrestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfrestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

  };

  return (
    <div className="body">
      <div className=" flex align-center justify-center m-5 p-4 gap-6">
      <div className="search-bar mb-5">
        <input
          type="text"
          className="search-input"
          placeholder="Search here..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            const filtered = listOfrestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
        ></input>
        <button
          className="search-logo"
          onClick={() => {
            console.log(search);

            const filtered = listOfrestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredRestaurants(filtered);
            setSearch("");
          }}
        >
          <FaSearch />
        </button>
      </div>
      <div className=" flex justify-center align-center m-5 p-2 pb-0 ">
        <button
          onClick={() => {
            setListOfrestaurants(
              listOfrestaurants.filter((res) => res.info.avgRating > 4.2)
            );
            alert("Restaurants with rating greater than 4.5 will be displayed");
          }}
          className=" max-w-auto p-2 cursor-pointer bg-black px-3 text-white rounded-md hover:bg-gray-800 border-2 border-black ease-in transition-all duration-300"
        >
          Filter
        </button>
      </div>
      </div>
      {filteredRestaurants.length === 0 ? (
        <div className=" res-container flex justify-center align-center m-5 p-4 ">
          {DefaultSkimmerArraySize.map((item) => {
            return <SkimmerCards key={item} />;
          })}
        </div>
      ) : (
        <div className="res-container">
          {filteredRestaurants.map((resObj) => {
            return <RestaurantCard key={resObj.info.id} resObj={resObj} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
