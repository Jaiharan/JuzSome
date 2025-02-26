import React from "react";
import ReactDOM from "react-dom/client";
import resData from "./data.json";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=900"
          alt="logo"
        />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resObj } = props;
  if (!resObj) {
    return null;
  }
  const {name, cuisines, sla, avgRating, cloudinaryImageId} = resObj?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <div className="res-rate-details">
        <h4 className="res-sla-dt">{sla.deliveryTime} mins</h4>
        <h4 className="res-rate">{avgRating} Stars</h4>
      </div>
    </div>
  );
};

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

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
