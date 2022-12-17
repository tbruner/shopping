import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Shop from './Shop';
import '../styles/App.css';
import shoe from '../images/shoe.jpg';

function App() {
  const [cart, setCart] = useState({
    total: 0,
    count: 0,
    items: []
  });

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
      },
      {
        shoeBrand: 'Vroom',
        shoeName: 'Class',
        cost: 89.99,
        image: shoe,
        alt: 'image of a shoe',
        id: 102,
        sizes: [8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
      }
    ]
  };

  const womens = {
    title: 'Womens',
    items: [
      {
        shoeBrand: 'Nice',
        shoeName: 'Zooma',
        cost: 49.99,
        image: shoe,
        alt: 'image of a shoe',
        id: 302,
        sizes: [6, 6.5, 7, 7.5, 8, 9, 10]
      }
    ]
  };

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
  };

  const sizeNotSelected = (id) => {
    const message = document.querySelector('#itm' + id + ' > .size-selection > .message');

    message.textContent = 'Item not added to your cart. Please Select a size first.';
  }

  const sizeSelected = (id) => {
    const message = document.querySelector('#itm' + id + ' > .size-selection > .message');
    
    message.textContent = '';
  }

  const addToCart = (id) => {
    const sizes = document.getElementsByName('size' + id);
    let checked = false;
    let size = null;

    for(let each of sizes) {
      if(each.checked) 
      {
        checked = true;
        size = each.value;
        break;
      }
    }

    if(!checked) {
      sizeNotSelected(id);
      return;
    }
    else {
      sizeSelected(id);
    }

    let newItems = cart.items;
    let found = false;
    let newTotal = cart.total;
    // defaults to 1 if no input
    let toAdd = +document.getElementById('quantity'+id).value ? +document.getElementById('quantity'+id).value : 1;
    let newCount = cart.count + toAdd;

    for(const item of mens.items) {
      if(found) break;
      if(item.id === id) {
        item['size'] = size;
        newItems.push(item);
        newTotal += item.cost * toAdd;
        found = true;
      }
    }

    for(const item of womens.items) {
      if(found) break;
      if(item.id === id) {
        item['size'] = size;
        newItems.push(item);
        newTotal += item.cost * toAdd;
        found = true;
      }
    }

    for(const item of kids.items) {
      if(found) break;
      if(item.id === id) {
        item['size'] = size;
        newItems.push(item);
        newTotal += item.cost * toAdd;
        found = true;
      }
    }

    setCart(
      {
        total: newTotal,
        count: newCount,
        items: newItems
      }
    );
  } 

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens' element={<Shop department={mens} cart={cart} addToCart={addToCart} />} message='' />
          <Route path='/womens' element={<Shop department={womens} cart={cart} addToCart={addToCart} message='' />} />
          <Route path='/kids' element={<Shop department={kids} cart={cart} addToCart={addToCart} message='' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
