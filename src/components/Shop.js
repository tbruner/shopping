import '../styles/Shop.css';
import ShopBar from './ShopBar';
import ShopItem from './ShopItem';

const Shop = ({department, itemCount, saleTotal}) => {
  return (
    <>
    <ShopBar itemCount={itemCount} saleTotal={saleTotal} />
    <h1 className='shop-title'>Welcome to the {department.title} Shop!</h1>
    <div className='shop-items'>
      <ShopItem details={department.items[0]} />
    </div>
    </>
  );
}

export default Shop;