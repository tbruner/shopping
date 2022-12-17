import '../styles/ShopBar.css';

const ShopBar = ({ itemCount, saleTotal }) => {
  return (
    <div className='sticky'>
      <span className='item-count sticky-bar-itm'>Count: {itemCount}</span>
      <span className='total-cost sticky-bar-itm'>Total: ${saleTotal.toFixed(2)}</span>
      <button className='checkout-btn sticky-bar-itm'>Checkout</button>
    </div>
  );
}

export default ShopBar;