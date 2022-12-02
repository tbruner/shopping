import '../styles/ShopBar.css';

const ShopBar = () => {
  return (
    <div class='sticky'>
      <span class='item-count'>Count: </span>
      <span class='total-cost'>Total: </span>
      <button class='checkout-btn'>Checkout</button>
    </div>
  );
}

export default ShopBar;