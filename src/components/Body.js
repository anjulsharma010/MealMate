import RestaurantCard from "./RestaurantCard";
// import { resObj } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData()
  },[])

const  fetchData = async() => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.222737&lng=78.206524&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

  if(listOfRestaurants.length === 0){
    return <Shimmer/>
  }
  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
          );
        })}
        {/* {resObj.restaurants.map((restaurant) => {
            return (
              <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
            );
          })} */}
      </div>
    </div>
  );
};
export default Body;
