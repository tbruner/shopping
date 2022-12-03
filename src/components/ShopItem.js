import '../styles/ShopItem.css';

const ShopItem = ({details}) => {
  return (
    <>
    <h1>{details.shoeBrand} {details.shoeName}</h1>
    <span>{details.cost}</span>
    </>
  );
}

export default ShopItem;