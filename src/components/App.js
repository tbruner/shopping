import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path='/mens' element={<Shop />} />
          <Route path='/womens' element={<Shop />} />
          <Route path='/kids' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
