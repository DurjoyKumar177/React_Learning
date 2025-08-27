import React from 'react';  
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes , Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );
}

export default App;