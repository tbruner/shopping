import '../styles/Home.css';

const Home = ({ promotion }) => {
  return (
    <div className='home'>
      <h1>Browse our "wild" selection of shoes!</h1>
      <div className='home-promo'>
        {promotion.map((item) =>
          <div className='item-promo' key={item.id + 'promo'}>
            <img src={item.image} alt={item.alt} />
            <div className='promo-brand'>{item.shoeBrand}</div>
          </div>
        )}
      </div>
      <footer>
        <div className="credits">Created by Trevor Bruner</div>
        <div className="credits">Images taken from Zappos.com</div>
      </footer>
    </div>
  );
}

export default Home;