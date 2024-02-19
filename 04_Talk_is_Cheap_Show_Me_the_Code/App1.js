import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
 *    - Logo
 *    - Nav Items (Login, Cart)
 * Body
 *    - Search
 *    - RestaurantContainer
 *        - RestaurantCard
 *            - Image
 *            - Name of Restaurant, Star Rating, Cuisine, delivery time
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

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData.info.cuisines);
  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/4754f17dc86c38e8c5ec3d81aa0ec739"
        alt="food img"
      />
      <h3>{resData.info.cuisines}</h3>
    </div>
  );
};

const restaurantObj = {
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
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resData={restaurantObj} />
        <RestaurantCard />
        <RestaurantCard />
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

ReactDOM.render(<AppLayout />, document.getElementById("root"));
