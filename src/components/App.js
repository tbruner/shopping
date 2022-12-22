import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Shop from './Shop';
import '../styles/App.css';
import onCloudrunner from '../images/onCloudrunner.jpg';
import adidasDame8 from '../images/adidasDame8.jpg';
import brooksRevel5 from '../images/brooksRevel5.jpg';
import adidasEdge4 from '../images/adidasEdge4.jpg';
import brooksGhost14 from '../images/brooksGhost14.jpg';
import onCloudGo1 from '../images/onCloudGo1.jpg';
import adidasKidsRetroply from '../images/adidasKidsRetroply.jpg';
import pumaRiftSlipOn from '../images/pumaRiftSlipOn.jpg';
import saouconyKidsVelocer from '../images/saouconyKidsVelocer.jpg';
import newBalance806v1 from '../images/newBalance806v1.jpg';
import nikeReact from '../images/nikeReact.jpg';
import underArmourChargedBandit from '../images/underArmourChargedBandit.jpg';
import uggClassic from '../images/uggClassic.jpg';
import sperryMocSider from '../images/sperryMocSider.jpg';

function App() {
  const [cart, setCart] = useState({
    total: 0,
    count: 0,
    items: []
  });

  const promotion = [
    {
      shoeBrand: 'Nike',
      shoeName: 'React',
      cost: 149.99,
      image: nikeReact,
      alt: 'pair of Nike React shoes',
      id: 10050,
      sizes: [8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
    },
    {
      shoeBrand: 'Under Armour',
      shoeName: 'Charged Bandit',
      cost: 69.95,
      image: underArmourChargedBandit,
      alt: 'pair of Under Armour Charged Bandit shoes',
      id: 20040,
      sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5]
    },
    {
      shoeBrand: 'Sperry',
      shoeName: 'Moc-Sider',
      cost: 70.00,
      image: sperryMocSider,
      alt: 'pair of Sperry Moc-Sider shoes',
      id: 20050,
      sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]
    },
    {
      shoeBrand: 'UGG',
      shoeName: 'Classic',
      cost: 170.00,
      image: uggClassic,
      alt: 'pair of womens UGG classic',
      id: 20060,
      sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5]
    }
  ];

  const mens = {
    title: 'Mens',
    items: [
      {
        shoeBrand: 'Adidas',
        shoeName: 'Dame 8',
        cost: 49.99,
        image: adidasDame8,
        alt: 'pair of Adidas Dame 8 shoes',
        id: 10010,
        sizes: [8, 8.5, 9, 9.5, 10, 11, 12, 13]
      },
      {
        shoeBrand: 'On',
        shoeName: 'Cloudrunner',
        cost: 139.95,
        image: onCloudrunner,
        alt: 'pair of On Cloudrunner shoes',
        id: 10020,
        sizes: [8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
      },
      {
        shoeBrand: 'Brooks',
        shoeName: 'Revel 5',
        cost: 129.95,
        image: brooksRevel5,
        alt: 'pair of Brooks Revel 5 shoes',
        id: 10030,
        sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13]
      },
      {
        shoeBrand: 'New Balance',
        shoeName: '806v1',
        cost: 89.95,
        image: newBalance806v1,
        alt: 'pair of New Balance 806v1 shoes',
        id: 10040,
        sizes: [8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
      },
      {
        shoeBrand: 'Nike',
        shoeName: 'React',
        cost: 149.99,
        image: nikeReact,
        alt: 'pair of Nike React shoes',
        id: 10050,
        sizes: [8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
      }
    ]
  };

  const womens = {
    title: 'Womens',
    items: [
      {
        shoeBrand: 'Adidas',
        shoeName: 'Edge 4',
        cost: 59.99,
        image: adidasEdge4,
        alt: 'image of a shoe',
        id: 20010,
        sizes: [6, 6.5, 7, 7.5, 8, 9, 10]
      },
      {
        shoeBrand: 'Brooks',
        shoeName: 'Ghost 14',
        cost: 119.95,
        image: brooksGhost14,
        alt: 'pair of Brooks Ghost 14 shoes',
        id: 20020,
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]
      },
      {
        shoeBrand: 'On', 
        shoeName: 'Cloudgo 1', 
        cost: 139.95,
        image: onCloudGo1,
        alt: 'pair of On Cloudgo 1 shoes',
        id: 20030,
        sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5]
      },
      {
        shoeBrand: 'Under Armour',
        shoeName: 'Charged Bandit',
        cost: 69.95,
        image: underArmourChargedBandit,
        alt: 'pair of Under Armour Charged Bandit shoes',
        id: 20040,
        sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5]
      },
      {
        shoeBrand: 'Sperry',
        shoeName: 'Moc-Sider',
        cost: 70.00,
        image: sperryMocSider,
        alt: 'pair of Sperry Moc-Sider shoes',
        id: 20050,
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]
      },
      {
        shoeBrand: 'UGG',
        shoeName: 'Classic',
        cost: 170.00,
        image: uggClassic,
        alt: 'pair of womens UGG classic',
        id: 20060,
        sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5]
      }
    ]
  };

  const kids = {
    title: 'Kids',
    items: [
      {
        shoeBrand: 'Adidas Kids',
        shoeName: 'Retroply',
        cost: 39.95,
        image: adidasKidsRetroply,
        alt: 'pair of Adidas Kids Retroply shoes',
        id: 30010,
        sizes: [4, 5, 6, 7]
      },
      {
        shoeBrand: 'Puma',
        shoeName: 'Rift Slip-On',
        cost: 49.99,
        image: pumaRiftSlipOn,
        alt: 'A Puma Rift Slip-On shoe',
        id: 30020,
        sizes: [13, 1, 2, 3, 4, 5]
      },
      {
        shoeBrand: 'Saoucony Kids',
        shoeName: 'Velocer',
        cost: 49.95,
        image: saouconyKidsVelocer,
        alt: 'pair of Saoucony Kids Velocer shoes',
        id: 30030,
        sizes: [13, 1, 2, 3, 4, 5, 6]
      }
    ]
  };

  const sizeNotSelected = (id) => {
    const message = document.querySelector('#itm' + id + ' > .item-main > .size-selection > .message');

    message.textContent = 'Item not added to your cart. Please select a size first.';
  }

  const sizeSelected = (id) => {
    const message = document.querySelector('#itm' + id + ' > .item-main > .size-selection > .message');
    
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
          <Route path='/' element={<Home promotion={promotion} />} />
          <Route path='/mens' element={<Shop department={mens} cart={cart} addToCart={addToCart} />} message='' />
          <Route path='/womens' element={<Shop department={womens} cart={cart} addToCart={addToCart} message='' />} />
          <Route path='/kids' element={<Shop department={kids} cart={cart} addToCart={addToCart} message='' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
