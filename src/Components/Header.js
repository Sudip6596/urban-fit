import React from "react";
import { useEffect, useState } from "react";

function Header() {
  const [random, setRandom] = useState(0);
  const quotes = [
    "Profitable Business",
    "Business Oppurtunity",
    "Be your Own Boss",
  ];
  useEffect(() => {
    setTimeout(() => {
      if (random == 0) {
        setRandom(1);
      } else if (random == 1) {
        setRandom(2);
      } else setRandom(0);
    }, 2000);
  }, [random]);

  return (
    <div className="header">
      <div className="logo"></div>
      <div className="product_info">
        <div className="product"></div>
        <div className="info">
          <div className="text">{quotes[random]}</div>
          <p>
            we have vast customer base already in pune with over 10,000 regular
            customer
          </p>
          <button className="header_btn">GET FRANCHISE</button>
        </div>
      </div>
      <div className="brands"></div>
    </div>
  );
}

export default Header;
