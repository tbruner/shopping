import '../styles/ShopItem.css';

const ShopItem = ({details}) => {
  return (
    <>
    <span className='item-title'>{details.shoeBrand} {details.shoeName}</span>
    <img src={details.image} alt={details.alt} className='item-image' />
    <span>{details.cost}</span>
    <label htmlFor={details.id}>Quantity (between 1 and 10):</label>
    <input type='number' id={details.id} name='quantity' min={1} max={10} />
    <button className='add-to-cart'>Add To Cart</button>
    </>
  );
}

export default ShopItem;