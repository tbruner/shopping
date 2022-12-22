import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import logo from '../images/shoeZooLogo.svg';

const Navigation = () => {
  return (
    <nav>
      <Link className='nav-link' to='/'><img className='logo' src={logo} alt='Shoe Zoo logo' /></Link>
      <Link className='nav-link' to='/mens'>Mens</Link>
      <Link className='nav-link' to='/womens'>Womens</Link>
      <Link className='nav-link' to='/kids'>Kids</Link>
    </nav>
  );
}

export default Navigation;