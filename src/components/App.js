import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Shop from './Shop';
import '../styles/App.css';
import shoe from '../images/shoe.jpg';

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [saleTotal, setSaleTotal] = useState(0);

  const mens = {
    title: 'Mens',
    items: [
      {
        shoeBrand: 'Nice',
        shoeName: 'Zoom',
        cost: 49.99,
        image: shoe,
        alt: 'image of a shoe',
        id: 101,
        sizes: [8, 8.5, 9, 9.5, 10, 11, 12, 13]
      }
    ]
  }

  const womens = {
    title: 'Womens',
    items: [
      {
        shoeBrand: 'Nice',
        shoeName: 'Zooma',
        cost: 49.99,
        image: shoe,
        alt: 'image of a shoe',
        id: 102,
        sizes: [6, 6.5, 7, 7.5, 8, 9, 10]
      }
    ]
  }

  const kids = {
    title: 'Kids',
    items: [
      {
        shoeBrand: 'Nice',
        shoeName: 'Zoomy',
        cost: 19.99,
        image: shoe,
        alt: 'image of a shoe',
        id: 201,
        sizes: [4, 5, 6, 7]
      }
    ]
  }
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens' element={<Shop department={mens} itemCount={itemCount} saleTotal={saleTotal} />} />
          <Route path='/womens' element={<Shop department={womens} itemCount={itemCount} saleTotal={saleTotal} />} />
          <Route path='/kids' element={<Shop department={kids} itemCount={itemCount} saleTotal={saleTotal} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
