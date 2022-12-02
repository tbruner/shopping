import '../styles/Shop.css';
import ShopBar from './ShopBar';

const Shop = () => {
  return (
    <>
    <ShopBar />
    <h1>Hello Shop</h1>
      <div className='catagory'>
        <h2 className='catagory-title'>Catagory</h2>
        <div className='card'>
          <p>Shoe Name</p>
        </div>
      </div>
    </>
  );
}

export default Shop;