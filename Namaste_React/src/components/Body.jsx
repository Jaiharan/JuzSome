import { FaSearch } from "react-icons/fa";
import resData from "../utils/data.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search here..."
        ></input>
        <button className="search-logo">
          <FaSearch />
        </button>
      </div>
      <div className="res-container">
        {resData.restaurants.map((resObj) => {
          return <RestaurantCard key={resObj.info.id} resObj={resObj} />;
        })}
      </div>
    </div>
  );
};

export default Body;
