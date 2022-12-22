import '../styles/ShopItem.css';

const ShopItem = ({details, message, addToCart}) => {
  return (
    <>
    <div className="item-main">
      <div className='item-title'>
        <div className='item-brand'>{details.shoeBrand}</div>
        <div className='item-name'>{details.shoeName}</div>
      </div>
      <img src={details.image} alt={details.alt} className='item-image' />
      <div className='item-price'>${details.cost.toFixed(2)}</div>
      <fieldset className='size-selection'>
        <label>Please select a size:</label>
        <div className='sizes'>
          {details.sizes.map((size, index) =>
            <div key={size + details.id.toString()} className='size-container'>
              <input type='radio' id={details.shoeName + size} value={size} name={'size' + details.id} />
              <label htmlFor={details.shoeName + size}  className='size'>
                {size}
              </label>
            </div>
          )}
        </div>
        <p className='message'>{message}</p>
      </fieldset>
      <label className='item-sub' htmlFor={'quantity' + details.id}>Quantity (between 1 and 10):</label>
      <input type='number' id={'quantity' + details.id} name='quantity' min={1} max={10} />
    </div>
    <button className='add-to-cart' onClick={() => addToCart(details.id)}>Add To Cart</button>
    </>
  );
}

export default ShopItem;