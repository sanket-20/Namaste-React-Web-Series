
import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "yellow",
  color: "purple",
};

// const RestaurantCard = (props) => {
//   if (!props.resData) {
//     return null; // Render nothing if resData is undefined
//   }
//   const { resData } = props;
//   const { info } = resData;
  
//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     avgRating,
//     deliveryTime,
//     costForTwo,
//   } = info;
//   // console.log(name, costForTwo);

//   return (
//     // <div className="restaurant-card" style={{ color: "red" }}>
//     <div className="restaurant-card" style={styleCard}>
//       <img
//         src={CDN_URL + cloudinaryImageId}
//         alt="food img"
//       />
//       <h3>{name}</h3>
//       <h3>{cuisines.join(", ")}</h3>
//       <h3>{avgRating}</h3>
//       <h3>{deliveryTime}</h3>
//       <h3>{costForTwo}</h3>
//     </div>
//   );
// };



const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwo,
}) => {

  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        src={CDN_URL + cloudinaryImageId}
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

export default RestaurantCard;
