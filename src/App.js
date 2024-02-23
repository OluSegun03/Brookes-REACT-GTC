// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpComponent from './signUp.js';
import LandingPage from './LandingPage.js';
import NextPage from './page2.js'
import Fruits from './fruits.js';
import PageVi from './pageVi.js';
import PageVii from './pageVii.js';
import PAge7 from './page7.js';
import Aboutus from './Aboutus.js';
import Aboutus2 from './aboutus2.js';
import Grains from './grains.js';
import Vegetables from './vegtables.js';
import Landingsign from './landingsign.js';
import Login from './loginPage.js';
import Loginsuccess from './loginsucces.js';
import Pepper from './pepper.js';
import Carts from './Carts.js';
import CheckoutInfo from './checkoutInfo.js';
import Aboutme from './aboutme.js';
import Carts2 from './carts2.js';

function App() {
  return (
    <div>
  
      <Router>
        <Routes>
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/loginsuccess' element={<Loginsuccess />} />
          <Route path='/nextland' element={<Landingsign />} />
          <Route path='/signup' element={<SignUpComponent />} />
          <Route path='/pepper' element={<Pepper />} />
          <Route path='/checkoutInfo' element={<CheckoutInfo />} />
          <Route path='/fruits' element={<Fruits />} />
          <Route path='/carts2' element={<Carts2 />} />
          <Route path='/Ncarts' element={<Carts />} />
          <Route path='/cart' element={<PageVi />} />
          <Route path='/vegetables' element={<Vegetables />} />
          <Route path='/address' element={<PageVii />} />
          <Route path='/checkout' element={<PageVi />} />
          <Route path='/allOrder' element={<PAge7 />} />
          <Route path='/grains' element={<Grains />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Aboutus2 />} />
          <Route path='/wishlist' element={<NextPage/>} /> 
          <Route path='/Aboutme' element={<Aboutme/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
