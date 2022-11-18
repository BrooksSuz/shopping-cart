import { useState, useRef } from "react";

const Card = () => {
  const [amountOfItems, setAmountOfItems] = useState(0)
  const inputAmountOfProduct = useRef();

  const handleBlur = () => {
    const amount = Number(inputAmountOfProduct.current.value);
    if (amount >= amountOfItems) {
      setAmountOfItems(amountOfItems + amount);
      inputAmountOfProduct.current.value = '';
    } else if (amount < amountOfItems) {
      setAmountOfItems(amountOfItems - amount);
      inputAmountOfProduct.current.value = '';
    }
  };

  const onClickDecrement = () => setAmountOfItems(amountOfItems - 1);

  const onClickIncrement = () => setAmountOfItems(amountOfItems + 1);

  return (
    <div className="card">
      <h2>This is an Item</h2>
      <label htmlFor="amount-of-product">Number of Items:
        <input
          ref={inputAmountOfProduct}
          type="text"
          id="amount-of-product"
          name="amount-of-product"
          onBlur={handleBlur}>
        </input>
      </label>
      <button type="button" onClick={onClickDecrement}>-</button>
      <button type="button" onClick={onClickIncrement}>+</button>
      <span>{amountOfItems}</span>
    </div>
  );
};

export default Card;
