import '../styles/ShopItem.css';

const ShopItem = ({details, addToCart}) => {
  return (
    <>
    <div className='item-title'>{details.shoeBrand} {details.shoeName}</div>
    <img src={details.image} alt={details.alt} className='item-image' />
    <div>{details.cost}</div>
    <div className='item-sub'>Sizes</div>
    <ul className='sizes'>
      {details.sizes.map((size, index) =>
        <button key={index} className='size'>{size}</button>
      )}
    </ul>
    <label className='item-sub' htmlFor={details.id}>Quantity (between 1 and 10):</label>
    <input type='number' id={details.id} name='quantity' min={1} max={10} />
    <button className='add-to-cart' onClick={() => addToCart(details.id)}>Add To Cart</button>
    </>
  );
}

export default ShopItem;