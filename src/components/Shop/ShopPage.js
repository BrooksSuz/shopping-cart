import Card from "../Card";
import { useState, useEffect } from "react";

const ShopPage = (props) => {
  const { setCartAmount } = props;

  const [totalItems, setTotalItems] = useState(0);
  const [arrCards] = useState(
    Array.from({ length: 3 }, (_, i) => <Card key={i} totalItems={totalItems} setTotalItems={setTotalItems} />)
  );

  useEffect(() => {
    setCartAmount(totalItems);
  }, [totalItems, setCartAmount]);

  return (
    <div className="shop-page">
      <h1>This is the Shop Page</h1>
      {arrCards}
    </div>
  );
};

export default ShopPage;
