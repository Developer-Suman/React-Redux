import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import ProductListing from './ProductListing';
import ProductDetails from './ProductDetails';
import ProductComponent from './ProductComponent';

export default function AppRouter() {
  return (
    <Routes>
        
        <Route path='' element={<Home/>}/>
        <Route path='productlisting' element={<ProductListing/>}/>
        {/* <Route path='productcomponents' element={<ProductComponent/>}/> */}
        <Route path='/product/:productId' element={<ProductDetails/>}/>
    </Routes>
    
  )
}
