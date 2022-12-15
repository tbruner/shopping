import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link className='nav-link' to='/'>Logo tbd</Link>
      <Link className='nav-link' to='/mens'>Mens</Link>
      <Link className='nav-link' to='/womens'>Womens</Link>
      <Link className='nav-link' to='/kids'>Kids</Link>
    </nav>
  );
}

export default Navigation;