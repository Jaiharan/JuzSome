import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  if (!resObj) {
    return null;
  }
  const { name, cuisines, sla, avgRating, cloudinaryImageId } = resObj?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={RES_IMG_URL + cloudinaryImageId} />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <div className="res-rate-details">
        <h4 className="res-sla-dt">{sla.deliveryTime} mins</h4>
        <h4 className="res-rate">{avgRating} Stars</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
