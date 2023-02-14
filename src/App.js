import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import {Navbar} from "./components/navbar";
import {Footer} from "./components/footer";
import {Home} from "./pages/home/home";
import {All} from "./pages/shop/all";
import {Cart} from "./pages/cart/cart"; 
import {About} from "./pages/about/about";
import {Contact} from "./pages/contact/contact";  
import { ShopContextProvider } from './context/shop-context';
import { Accessories } from './pages/shop/accessories';
import { Tops } from './pages/shop/tops';
import { Bottoms } from './pages/shop/bottoms';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/all" element={<All />} />
            <Route path="/products/tops" element={<Tops />} />
            <Route path="/products/bottoms" element={<Bottoms />} />
            <Route path="/products/accessories" element={<Accessories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
