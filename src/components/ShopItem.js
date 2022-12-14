import '../styles/ShopItem.css';

const ShopItem = ({details, message, addToCart}) => {
  return (
    <>
    <div className='item-title'>{details.shoeBrand} {details.shoeName}</div>
    <img src={details.image} alt={details.alt} className='item-image' />
    <div>{details.cost}</div>
    <fieldset className='sizes'>
      <label>Please select a size:</label>
      {details.sizes.map((size, index) =>
        <div  key={size + details.id.toString()}>
        <input type='radio' id={size} value={size} name={'size' + details.id} autoComplete='off' />
        <label className='size' htmlFor={size}>{size}</label>
        </div>
      )}
      <p className='message'>{message}</p>
    </fieldset>
    <label className='item-sub' htmlFor={'quantity' + details.id}>Quantity (between 1 and 10):</label>
    <input type='number' id={'quantity' + details.id} name='quantity' min={1} max={10} />
    <button className='add-to-cart' onClick={() => addToCart(details.id)}>Add To Cart</button>
    </>
  );
}

export default ShopItem;