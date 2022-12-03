import '../styles/ShopBar.css';

const ShopBar = () => {
  return (
    <div className='sticky'>
      <span className='item-count'>Count: </span>
      <span className='total-cost'>Total: </span>
      <button className='checkout-btn'>Checkout</button>
    </div>
  );
}

export default ShopBar;