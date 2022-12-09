import '../styles/Shop.css';
import ShopBar from './ShopBar';
import ShopItem from './ShopItem';

const Shop = ({department, cart, addToCart}) => {
  return (
    <>
    <ShopBar itemCount={cart.count} saleTotal={cart.total} />
    <h1 className='shop-title'>Welcome to the {department.title} Shop!</h1>
    <div className='shop-items'>
      <ShopItem details={department.items[0]} addToCart={addToCart} />
    </div>
    </>
  );
}

export default Shop;