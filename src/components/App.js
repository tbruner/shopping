import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Shop from './Shop';
import '../styles/App.css';

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [saleTotal, setSaleTotal] = useState(0);

  const mens = {
    title: 'Mens',
    items: [
      {
        shoeBrand: 'Nice',
        shoeName: 'Zoom',
        cost: 49.99
      }
    ]
  }

  const womens = {
    title: 'Womens',
    items: [
      {
        shoeBrand: 'Nice',
        shoeName: 'Zooma',
        cost: 49.99
      }
    ]
  }

  const kids = {
    title: 'Kids',
    items: [
      {
        shoeBrand: 'Nice',
        shoeName: 'Zoomy',
        cost: 19.99
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
