import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <h1>Browse our "wild" selection of shoes!</h1>
      <div className='home-promo'>
        <div className='item-promo'>
          Nike
        </div>
        <div className='item-promo'>
          Under Armor
        </div>
        <div className='item-promo'>
          UGG
        </div>
        <div className='item-promo'>
          Sperry
        </div>
      </div>
      <footer>
        <div class="credits">Created by Trevor Bruner</div>
        <div class="credits">Images taken from Zappos.com</div>
      </footer>
    </div>
  );
}

export default Home;