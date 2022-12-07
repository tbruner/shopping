import '../styles/ShopItem.css';

const ShopItem = ({details}) => {
  return (
    <>
    <span className='item-title'>{details.shoeBrand} {details.shoeName}</span>
    <img src={details.image} alt={details.alt} className='item-image' />
    <span>{details.cost}</span>
    </>
  );
}

export default ShopItem;