import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *    - Logo
 *    - Nav Items (Login, Cart)
 * Body
 *    - Search
 *    - RestaurantContainer
 *        - RestaurantCard
 *            - Image
 *            - Name of Restaurant, Star Rating, Cusine,       delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="Logo"
        />
      </div>
      <div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "yellow",
  color: "purple",
};

// const RestaurantCard = () => {
//   return (
//     // <div className="restaurant-card" style={{ color: "red" }}>
//     <div className="restaurant-card" style={styleCard}>
//       <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/4754f17dc86c38e8c5ec3d81aa0ec739" alt="food img"/>
//       <h3>Meghana Foods</h3>
//       <h3>Biryani, North Indian, Asian</h3>
//       <h3>4.3 stars</h3>
//       <h3>30 mins</h3>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="restaurant-container">
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//       </div>
//     </div>
//   );
// };

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

/** ------------------------------------------------------- */

// const RestaurantCard = (props) => {
//   console.log(props);
//   return (
//     // <div className="restaurant-card" style={{ color: "red" }}>
//     <div className="restaurant-card" style={styleCard}>
//       <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/4754f17dc86c38e8c5ec3d81aa0ec739" alt="food img"/>
//       <h3>{props.restaurantName}</h3>
//       <h3>{props.cusine}</h3>
//       <h3>{props.rating}</h3>
//       <h3>{props.deliveryTime}</h3>
//     </div>
//   );
// };

// const RestaurantCard = ({ restaurantName, cusine, rating, deliveryTime }) => {
//   return (
//     // <div className="restaurant-card" style={{ color: "red" }}>
//     <div className="restaurant-card" style={styleCard}>
//       <img
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/4754f17dc86c38e8c5ec3d81aa0ec739"
//         alt="food img"
//       />
//       <h3>{restaurantName}</h3>
//       <h3>{cusine}</h3>
//       <h3>{rating}</h3>
//       <h3>{deliveryTime}</h3>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="restaurant-container">
//         <RestaurantCard
//           restaurantName="Meghana Foods"
//           cusine="Biryani, North Indian, Asian"
//           rating="4.3 stars"
//           deliveryTime="30 mins"
//         />
//         <RestaurantCard />
//         <RestaurantCard />
//       </div>
//     </div>
//   );
// };

/** -------------------------------------------------------*/

// const RestaurantCard = (props) => {
//   if (!props.resData) {
//     return null; // Render nothing if resData is undefined
//   }
//   const {resData}  = props;
//   const {info} = resData;
//   console.log(info.name);

//   return (
//     // <div className="restaurant-card" style={{ color: "red" }}>
//     <div className="restaurant-card" style={styleCard}>
//       <img
//         src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${info.cloudinaryImageId}`}
//         alt="food img"
//       />
//       <h3>{info.name}</h3>
//       <h3>{info.cuisines.join(", ")}</h3>
//       <h3>{info.avgRating}</h3>
//       <h3>{info.deliveryTime}</h3>
//       <h3>{info.costForTwo}</h3>
//     </div>
//   );
// };

// const restaurantObj = {
//   info: {
//     id: "361727",
//     name: "1441 Pizzeria",
//     cloudinaryImageId: "c7fcd9e43f4b995c3cd08d7632b426f0",
//     locality: "Bhandup West",
//     areaName: "Bhandup West",
//     costForTwo: "₹500 for two",
//     cuisines: ["Italian", "Pizzas", "Pastas"],
//     avgRating: 4.2,
//     parentId: "2697",
//     avgRatingString: "4.2",
//     totalRatingsString: "1K+",
//     promoted: true,
//     adTrackingId:
//       "cid=11199504~p=1~eid=0000018d-bd8e-0bda-4c7d-686e00b40114~srvts=1708282219482~45995",
//     sla: {
//       deliveryTime: 28,
//       lastMileTravel: 2.6,
//       serviceability: "SERVICEABLE",
//       slaString: "25-30 mins",
//       lastMileTravelString: "2.6 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2024-02-19 03:00:00",
//       opened: true,
//     },
//     badges: {
//       imageBadges: [
//         {
//           imageId: "newg.png",
//           description: "Gourmet",
//         },
//       ],
//     },
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {
//           badgeObject: [
//             {
//               attributes: {
//                 imageId: "newg.png",
//                 description: "Gourmet",
//               },
//             },
//           ],
//         },
//         textExtendedBadges: {},
//         textBased: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "₹125 OFF",
//       subHeader: "ABOVE ₹199",
//       discountTag: "FLAT DEAL",
//       discountCalloutInfo: {
//         message: "Free Delivery",
//         logoCtx: {
//           logo: "v1655895371/free_delivery_logo_hqipbo.png",
//         },
//       },
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//     externalRatings: {
//       aggregatedRating: {
//         rating: "--",
//       },
//     },
//     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//   },
//   analytics: {},
//   cta: {
//     link: "swiggy://menu?restaurant_id=361727",
//     text: "RESTAURANT_MENU",
//     type: "DEEPLINK",
//   },
// };
// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="restaurant-container">
//         <RestaurantCard resData={restaurantObj}/>
//         <RestaurantCard />
//         <RestaurantCard />
//       </div>
//     </div>
//   );
// };

/**------------------------------------------------ */

const restaurantList = [
  {
    info: {
      id: "361727",
      name: "1441 Pizzeria",
      cloudinaryImageId: "c7fcd9e43f4b995c3cd08d7632b426f0",
      locality: "Bhandup West",
      areaName: "Bhandup West",
      costForTwo: "₹500 for two",
      cuisines: ["Italian", "Pizzas", "Pastas"],
      avgRating: 4.2,
      parentId: "2697",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=11199504~p=1~eid=0000018d-bd8e-0bda-4c7d-686e00b40114~srvts=1708282219482~45995",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-19 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "newg.png",
                  description: "Gourmet",
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=361727",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "7012",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Powai",
      areaName: "Powai",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-19 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=7012",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

// const RestaurantCard = (props) => {
//   if (!props.resData) {
//     return null; // Render nothing if resData is undefined
//   }
//   const { resData } = props;
//   const { info } = resData;

//   console.log(info.name);

//   return (
//     // <div className="restaurant-card" style={{ color: "red" }}>
//     <div className="restaurant-card" style={styleCard}>
//       <img
//         src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${info.cloudinaryImageId}`}
//         alt="food img"
//       />
//       <h3>{info.name}</h3>
//       <h3>{info.cuisines.join(", ")}</h3>
//       <h3>{info.avgRating}</h3>
//       <h3>{info.deliveryTime}</h3>
//       <h3>{info.costForTwo}</h3>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="restaurant-container">
//         <RestaurantCard resData={restaurantObj[0]} />
//         <RestaurantCard resData={restaurantObj[1]} />
//       </div>
//     </div>
//   );
// };

/**------------------------------------------------ */

const RestaurantCard = (props) => {
  if (!props.resData) {
    return null; // Render nothing if resData is undefined
  }
  const { resData } = props;
  const { info } = resData;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = info;
  // console.log(name, costForTwo);

  return (
    // <div className="restaurant-card" style={{ color: "red" }}>
    <div className="restaurant-card" style={styleCard}>
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="food img"
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{deliveryTime}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

// not using keys (not acceptable) <<<<< index as key <<<<<< unique id(best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {
          // restaurantList.map((restaurant) => <RestaurantCard resData={restaurant} key={restaurant.info.id} />)
          
          restaurantList.map((item, index) => (
            <RestaurantCard resData={item} key={index} />
          ))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
