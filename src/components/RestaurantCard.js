import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    // console.log(props.resData?.restaurants[0]?.info?.cloudinaryImageId)
    const { resData } = props;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={CDN_URL + resData?.info?.cloudinaryImageId}
          alt="image"
        />
        <h3>{resData?.info?.name}</h3>
        <h5>{resData?.info?.cuisines.join(",")}</h5>
        <h5>{resData?.info?.avgRating}</h5>
        <h5>{resData?.info?.sla?.lastMileTravelString}</h5>
      </div>
    );
  };
export default RestaurantCard;  