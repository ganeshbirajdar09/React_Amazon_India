import React from "react";

//for giving unique ids to each product
import { v4 } from "uuid";

import Product from "../components/Product";
import "../comp css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home-banner"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/1500x600_shop-now._CB663404287_.jpg"
        alt=""
      />
      <div className="main">
        <div className="home-row">
          <Product
            id={v4()}
            title="Boult Audio ProBass Anchor Over-Ear Active Noise Cancellation"
            price={3499}
            rating={3}
            image="https://m.media-amazon.com/images/I/71AR5zaw2bS._QL65_AC_UL640_.jpg"
          />
          <Product
            id={v4()}
            title="Zero to One: Notes on Start Ups, or How to Build the Future"
            price={310}
            rating={5}
            image="https://m.media-amazon.com/images/I/71m-MxdJ2WL._AC_UY218_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id={v4()}
            title="New Apple iPhone 12 (128GB) - Blue"
            price={72999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg"
          />
          <Product
            id={v4()}
            title="Philips HL7756/00 Mixer Grinder, 750W, 3 Jars (Black)"
            price={3399}
            rating={3}
            image="https://m.media-amazon.com/images/I/51B0MPbLbXL._AC_UY218_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id={v4()}
            title="Amazon Brand - Solimo Roland 3 Seater Sofa cum Bed (Green)"
            price={11399}
            rating={5}
            image="https://m.media-amazon.com/images/I/91GqRS9mS8L._AC_UL320_.jpg"
          />
          <Product
            id={v4()}
            title="Fossil Gen 5(44mm, black) Carlyle Silicone Touchscreen Men's Smartwatch"
            price={22995}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
