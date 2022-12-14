import '../styles/ShopItem.css';

const ShopItem = ({details, addToCart}) => {
  return (
    <>
    <div className='item-title'>{details.shoeBrand} {details.shoeName}</div>
    <img src={details.image} alt={details.alt} className='item-image' />
    <div>{details.cost}</div>
    <div className='item-sub'>Sizes</div>
    <fieldset className='sizes'>
      <label>Please select a size:</label>
      {details.sizes.map((size, index) =>
        <div  key={size + details.id.toString()}>
        <input type='radio' id={size} value={size} name='size' autoComplete='off' />
        <label className='size' htmlFor={size}>{size}</label>
        </div>
      )}
    </fieldset>
    <label className='item-sub' htmlFor={details.id}>Quantity (between 1 and 10):</label>
    <input type='number' id={details.id} name='quantity' min={1} max={10} />
    <button className='add-to-cart' onClick={() => addToCart(details.id)}>Add To Cart</button>
    </>
  );
}

export default ShopItem;