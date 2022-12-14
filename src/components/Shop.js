import '../styles/Shop.css';
import ShopBar from './ShopBar';
import ShopItem from './ShopItem';

const Shop = ({department, cart, addToCart, message}) => {
  return (
    <>
    <ShopBar itemCount={cart.count} saleTotal={cart.total} />
    <h1 className='shop-title'>Welcome to the {department.title} Shop!</h1>
    <div className='shop-items'>
      {department.items.map((item, index) =>
      <div key={item.id} id={'itm' + item.id}>
        <ShopItem details={item} addToCart={addToCart} message={message} />
      </div>
      )}
    </div>
    </>
  );
}

export default Shop;