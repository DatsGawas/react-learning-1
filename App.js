// ReactElement (object) = HTML (Browser understands)
import React from "react";
import ReactDOM from "react-dom/client";

/** 
* Header
* - Logo
* - Nav Items
* Body
* - Search
* - Restaurant COntainer
* -  - Restaurant Card
      - image
      - Name
      - rating
      - cuisine
      - delivery time
      - cost for two
* Footer
* - Copyright
* - Links
* - Address
* - C0ntact
*/
const Header = () => {
     return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" />
            </div>
            <div className="nav-items"> 
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
     )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-img" alt="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh"/>
            <h3>Meghana Foods</h3>
            <h4>Biryani, Italian, Indian</h4>
            <h4>4.4 Stars</h4>
            <h4>38 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);