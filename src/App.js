// ReactElement (object) = HTML (Browser understands)
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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