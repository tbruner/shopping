import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Shop from './Shop';
import '../styles/App.css';

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens-shop' element={<Shop />} />
          <Route path='/womens-shop' element={<Shop />} />
          <Route path='/kids-shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
