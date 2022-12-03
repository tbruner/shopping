import '../styles/Shop.css';
import ShopBar from './ShopBar';
import ShopItem from './ShopItem';

const Shop = ({department}) => {
  return (
    <>
    <ShopBar />
    <h1 className='shop-title'>Welcome to the {department.title} Shop!</h1>
    <div className='shop-items'>
      <ShopItem details={department.items[0]} />
    </div>
    </>
  );
}

export default Shop;