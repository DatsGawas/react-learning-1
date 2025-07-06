import { CON_URL } from "../utils/constants";

const RestaurantCard = (restaurant) => {
    return (
        <div className="res-card">
            <img className="res-img" alt="res-logo" src={CON_URL + restaurant.resData.info.cloudinaryImageId}/>
            <h3>{restaurant.resData.info.name}</h3>
            <h4>{restaurant.resData.info.cuisines.join(', ')}</h4>
            <h4>{restaurant.resData.info.sla.slaString}</h4>
            <h4>{restaurant.resData.info.costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;