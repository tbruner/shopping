import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li className='nav-logo'>
          <Link to='/'>Logo tbd</Link>
        </li>
        <li className='nav-mens'>
          <Link to='/mens'>Mens</Link>
        </li>
        <li className='nav-womens'>
          <Link to='/womens'>Womens</Link>
        </li>
        <li className='nav-kids'>
          <Link to='/kids'>Kids</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;