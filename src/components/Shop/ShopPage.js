import Card from "../Card";
import { useState, useEffect } from "react";

const ShopPage = () => {
  const [arrCards, setArrCards] = useState(new Array(12));

  useEffect(() => {
    setArrCards(arrCards.map(current => {
      current = <Card />
    }));
  }, []);

  return (
    <div className="shop-page">
      <h1>This is the Shop Page</h1>
      {arrCards}
    </div>
  );
};

export default ShopPage;
