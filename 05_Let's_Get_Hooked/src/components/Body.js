import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable - Super powerful variable
//   var [listOfRestaurants] = useState(restaurantList);
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  //Normal JS variable
  //   let listOfRestaurants = [
  //     {
  //       info: {
  //         id: "415194",
  //         name: "Burger King",
  //         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //         locality: "Kharghar -ltile world",
  //         areaName: "Little world Mall",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Burgers", "American"],
  //         avgRating: 4.3,
  //         parentId: "166",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "10K+",
  //         sla: {
  //           deliveryTime: 25,
  //           lastMileTravel: 3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //           lastMileTravelString: "3.0 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-02-20 03:45:00",
  //           opened: true,
  //         },
  //         badges: {},
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "₹125 OFF",
  //           subHeader: "ABOVE ₹199",
  //           discountTag: "FLAT DEAL",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //       },
  //     },
  //     {
  //       info: {
  //         id: "415194",
  //         name: "Dominos",
  //         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //         locality: "Kharghar -ltile world",
  //         areaName: "Little world Mall",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Burgers", "American"],
  //         avgRating: 5.0,
  //         parentId: "166",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "10K+",
  //         sla: {
  //           deliveryTime: 25,
  //           lastMileTravel: 3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //           lastMileTravelString: "3.0 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-02-20 03:45:00",
  //           opened: true,
  //         },
  //         badges: {},
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "₹125 OFF",
  //           subHeader: "ABOVE ₹199",
  //           discountTag: "FLAT DEAL",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //       },
  //     },
  //     {
  //       info: {
  //         id: "415194",
  //         name: "MCDonald's",
  //         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //         locality: "Kharghar -ltile world",
  //         areaName: "Little world Mall",
  //         costForTwo: "₹350 for two",
  //         cuisines: ["Burgers", "American"],
  //         avgRating: 4.3,
  //         parentId: "166",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "10K+",
  //         sla: {
  //           deliveryTime: 25,
  //           lastMileTravel: 3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //           lastMileTravelString: "3.0 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2024-02-20 03:45:00",
  //           opened: true,
  //         },
  //         badges: {},
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             imageBased: {},
  //             textBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "₹125 OFF",
  //           subHeader: "ABOVE ₹199",
  //           discountTag: "FLAT DEAL",
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         restaurantOfferPresentationInfo: {},
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("Button Clicked");

            // listOfRestaurants = listOfRestaurants.filter(
            //   (restaurant) => restaurant.info.avgRating > 5
            // );



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
        {
          // restaurantList.map((restaurant) => <RestaurantCard resData={restaurant} key={restaurant.info.id} />)

          //   restaurantList.map((item, index) => (
          //     <RestaurantCard resData={item} key={index} />
          //   ))

          listOfRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.info.id} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
