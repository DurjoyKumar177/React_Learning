import React from 'react';  
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Home from './pages/Home';
import About from './pages/About';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Navigate from './pages/Navigate';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';

const App = () => {

    const router = createBrowserRouter( // Create a browser router
        createRoutesFromElements( // Create routes from elements
            <Route path='/' element={<RootLayout />} >
                <Route  index element={<Home />} />
                <Route path='product' element={<Product />} />
                <Route path='about' element={<About />} />
                <Route path='navigate' element={<Navigate />} />
                <Route path='contact' element={<ContactLayout />} >
                    <Route path='form' element={<ContactForm />} />
                    <Route path='info' element={<ContactInfo />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Route>
        )
    ) 

    return (
       <RouterProvider router={router} />
    );
}

export default App;