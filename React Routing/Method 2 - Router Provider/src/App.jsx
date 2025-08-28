import React from 'react';  
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

const App = () => {

    const router = createBrowserRouter( // Create a browser router
        createRoutesFromElements( // Create routes from elements
            <Route path='/' element={<RootLayout />} >
                <Route  index element={<Home />} />
                <Route path='product' element={<Product />} />
                <Route path='contact' element={<Contact />} />
                <Route path='about' element={<About />} />
            </Route>
        )
    ) 

    return (
       <RouterProvider router={router} />
    );
}

export default App;