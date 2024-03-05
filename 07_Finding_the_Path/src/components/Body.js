import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";

import Shimmer from "./shimmer";

const Body = () => {
  // State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  //Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    // console.log("useEffect Called");
    fetchData();

    console.log(listOfRestaurants);
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    // console.log("Me", listOfRestaurants);
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.info);
  };

  console.log("Body Rendered");

  // shimmer UI
  // conditional rendering
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  // return (
  //   <div className="body">
  //     <div className="filter">
  //       <button
  //         className="filter-btn"
  //         onClick={() => {
  //           const filteredList = listOfRestaurants.filter(
  //             (restaurant) => restaurant.info.avgRating > 4.3
  //           );
  //           setListOfRestaurants(filteredList);
  //         }}
  //       >
  //         Top Rated Restaurant
  //       </button>
  //     </div>
  //     <div className="restaurant-container">
  //       {
  //         // console.log(listOfRestaurants);
  //         listOfRestaurants.map((restaurant) => (
  //           <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
  //         ))
  //       }
  //     </div>
  //   </div>
  // );

  /**---------------------------------------------------------- */

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          <button 
          onClick={(e) => {
            // Filter the restaurant cards and update the UI
            // searchText
            // setSearchText(e.target.value);
            console.log(searchText);

            const filteredRestaurantList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(filteredRestaurantList);
          }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {/* {listOfRestaurants.map((restaurant) => {
          // console.log("hello",restaurant);
          return (
            <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
          );
          // return <h1>hi bro</h1>;
        })} */}


        {
            filteredRestaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant.info} />
            })
        }

      </div>
    </div>
  );
};

export default Body;
