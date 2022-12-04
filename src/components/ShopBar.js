import '../styles/ShopBar.css';

const ShopBar = ({ itemCount, saleTotal }) => {
  return (
    <div className='sticky'>
      <span className='item-count'>Count: {itemCount}</span>
      <span className='total-cost'>Total: {saleTotal}</span>
      <button className='checkout-btn'>Checkout</button>
    </div>
  );
}

export default ShopBar;