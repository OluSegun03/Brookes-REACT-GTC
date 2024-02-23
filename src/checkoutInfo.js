import React from "react";
import './page5.css';
import icon1 from './assets/Icon-left.png';
import icon8 from "./assets/icon8.jpg";
import vector from "./assets/Vector 1.png";
import stgreen from "./assets/1stgreen.png";
import white from "./assets/white.png";
import ndgreen from "./assets/2ndgreen.png";
import icon3 from "./assets/heart.jpg";
import icon4 from "./assets/icon.jpg";
import frameM from "./assets/Frame 427321331.png";
import bagofrice from './assets/bagofrice.png';
import lock from './assets/lock.png';
import flag from "./assets/flag.png";
import caller from './assets/caller.png';
import mail from './assets/mail.png';
import vectoree from './assets/Vectoree.png';
import edit from './assets/edit.png';
import twitter from './assets/twittter.png';

import fb from './assets/fb.png'
import ig from "./assets/ig.png";
import inl from './assets/in.png';
import { NavLink } from "react-router-dom";


function App() {
    return (
        <div>
            <div className="container11">
                <div style={{ display: "flex" }}>
                    <img src={icon1} alt="icon" style={{ alignSelf: "center", width: '20.81px', height: "23px", marginLeft: "112px" }} />
                    <p style={{ color: "#fff", fontWeight: "500", fontSize: "12px", alignSelf: "center", opacity: "70%", marginLeft: "5px" }}>+234 70652748</p>
                    <p style={{ color: "#fff", marginLeft: "380px", width: "175px", height: "17px", opacity: "70%", fontWeight: "500", fontSize: "12px", lineHeight: "29px", marginRight: "24px" }}>Get 50% Off on Selected Items</p>
                    <img src={vector} style={{ height: "24px", marginTop: "10px", color: "#fff" }} />
                    <p style={{ color: '#FBBC05', width: '59px', height: '17px', alignSelf: "center", fontSize: "12px", opacity: "70%", marginLeft: '24px' }}>Shop Now</p>
                    <div style={{ display: "flex", marginLeft: '50px' }}>
                        <p style={{ marginLeft: "200px", color: "#fff", width: '41px', height: '17px', opacity: "70%", alignItems: "center" }}>EN</p>
                        <img src={icon8} style={{ width: "12px", height: "6.42px", marginTop: '24px' }} />
                    </div>
                    <div style={{ display: 'flex', marginLeft: '40px' }}>
                        <img src={stgreen} style={{ width: "6.67px", height: "14.44px", marginTop: '20px', marginLeft: "50px" }} />
                        <img src={white} style={{ width: "6.67px", height: '14.44px', marginTop: '20px' }} />
                        <img src={ndgreen} style={{ width: "6.67px", height: "14.47px", marginTop: '20px' }} />
                        <p style={{ color: "#fff", opacity: "70%", marginLeft: "5px", marginRight: '10px' }}>Nigeria</p>
                        <img src={icon8} style={{ width: "12px", height: "6.42px", marginTop: '24px' }} />
                    </div>
                </div>
                <div className="container223" >
                    <NavLink to={'/landing'}>
                        <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                            <img src={frameM} alt="icon2" style={{ alignSelf: "center", width: '42.74px', height: "43.74px", marginLeft: "112px", color: "#2F945C", marginTop: "10px" }} />
                        </button>
                    </NavLink>
                    <NavLink to={'/fruits'}>
                        <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                            <p style={{ marginTop: "35px", marginLeft: "75px", fontWeight: '600', alignSelf: "center", fontSize: '14px' }}>Fruits</p>
                        </button>
                    </NavLink>
                    <NavLink to={'/vegetables'}>
                        <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                            <p style={{ marginTop: "35px", marginLeft: "75px", fontWeight: '600', alignSelf: "center", fontSize: '14px' }}>Vegetables</p>
                        </button>
                    </NavLink>

                    <NavLink to={'/grains'}>
                        <button className="buttonz">
                            <p style={{ marginTop: "15px", marginLeft: "46px", fontWeight: '600', lineHeight: "50px" }}>Grains</p>
                        </button>
                    </NavLink>

                    <input className='input77' type="input" placeholder={"Search here..."} />
                    <img src={icon3} style={{ width: "22px", height: "20px", marginTop: '30px', paddingLeft: "47px" }} />
                    <NavLink to={'/Ncarts'}>
                        <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                            <img src={icon4} style={{ width: '21.13', height: '21px', top: '1px', marginLeft: '30px', marginTop: '30px', marginRight: '50px' }} />
                        </button>
                    </NavLink>

                    <div className="login" style={{ display: "flex" }}>
                        <NavLink to={'/login'}>
                            <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                                <p className="loginn" style={{ marginLeft: "22px", color: "#2F945C", textAlign: "center", fontWeight: '600', lineHeight: "46px" }}>Login</p>
                            </button>
                        </NavLink>

                        <NavLink to={'/signup'}>
                            <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                                <p className="signup" style={{ marginLeft: "22px", color: "#fff", textAlign: "center", fontWeight: '600', lineHeight: "40px", lineHeight: '46px' }}>Sign up</p>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', fontSize: '14px', fontWeight: '500,', marginLeft: '110px', marginTop: '69px' }}>
                <p style={{ color: '#2F945C', fontWeight: '500', marginRight: '5px' }}>Home</p>

                <p style={{ color: '#667185', fontWeight: '500', marginRight: '5px' }}>/</p><p style={{ color: '#2F945C', fontWeight: '500', marginRight: '5px' }}>Cart</p><p style={{ color: '#667185', fontWeight: '500', marginRight: '5px' }}>/</p>
                <NavLink to={'/Ncarts'}>
                    <button className="buttonz">
                        <p style={{ color: '#667185', fontWeight: '500', marginTop: '16px' }}>Checkout</p>
                    </button>
                </NavLink>
            </div>
            <div className="MainContainer" >
                <div className="main22" >
                    <div className="container100" >
                        <div style={{ border: '1px solid #E4E7EC', marginLeft: '110px', borderRadius: '10px' }}>
                            {/* header of order of Summary */}
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontWeight: '600', fontSize: '24px', color: '#101928', marginLeft: '32px' }}>Order Summary</p>
                                <p style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#2F945C', color: "#fff", alignSelf: 'center', marginLeft: '10px', textAlign: 'center' }}>2</p>
                            </div>
                            <div style={{ display: 'flex', marginTop: '-20px' }}>
                                <img className="bagofrice" src={bagofrice} />
                                <div style={{ display: 'block' }}>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ marginLeft: '30px', color: '#101928', fontWeight: '600', marginTop: '49px', fontSize: '20px' }}>Bag of Rice</p>
                                        <p style={{ fontSize: '20px', fontWeight: '600', marginLeft: '400px', marginTop: '49px' }}>$150.32</p>
                                    </div>
                                    <p style={{ marginLeft: '30px', fontWeight: '400', fontSize: '14px', marginTop: '-12px' }}>Qty: 1</p>
                                </div>
                            </div>
                            <p className="divine" style={{ width: '726px', marginLeft: '10px', height: '0px', marginTop: '3px' }}></p>
                            {/* header of order of Summary */}
                            <div style={{ display: 'flex', marginTop: '-20px' }}>
                                <img className="bagofrice" src={bagofrice} />
                                <div style={{ display: 'block' }}>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ marginLeft: '30px', color: '#101928', fontWeight: '600', marginTop: '49px', fontSize: '20px' }}>Nike<span style={{ marginLeft: '3px' }}>Air</span><span style={{ marginLeft: '3px' }}>Max</span><span style={{ marginLeft: '3px' }}>Correlate</span></p>
                                        <p style={{ fontSize: '20px', fontWeight: '600', marginLeft: '300px', marginTop: '49px' }}>$200.00</p>
                                    </div>
                                    <p style={{ marginLeft: '30px', fontWeight: '400', fontSize: '14px', marginTop: '-10px' }}>Color: black</p>
                                    <p style={{ marginLeft: '30px', fontWeight: '400', fontSize: '14px', marginTop: '-10px' }}>Size: 41</p>
                                </div>
                            </div>
                            <p className="divine" style={{ width: '726px', marginLeft: '10px', marginTop: '1px', height: '0px' }}></p>
                            <div style={{ display: 'flex', marginTop: '-20px' }}>
                                <img className="bagofrice" src={bagofrice} />
                                <div style={{ display: 'block' }}>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ marginLeft: '30px', color: '#101928', fontWeight: '600', marginTop: '49px', fontSize: '20px' }}>Nike<span style={{ marginLeft: '3px' }}>Air</span><span style={{ marginLeft: '3px' }}>Max</span><span style={{ marginLeft: '3px' }}>Correlate</span></p>
                                        <p style={{ fontSize: '20px', fontWeight: '600', marginLeft: '300px', marginTop: '49px' }}>$200.00</p>
                                    </div>
                                    <p style={{ marginLeft: '30px', fontWeight: '400', fontSize: '14px', marginTop: '-10px' }}>Color: black</p>
                                    <p style={{ marginLeft: '30px', fontWeight: '400', fontSize: '14px', marginTop: '-10px' }}>Size: 41</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container211">
                        <p style={{ fontSize: '24px', fontWeight: '600', marginTop: '20px', marginLeft: '32px' }}>Payment Information</p>
                        <div className="cardDetails">
                            <p style={{ fontSize: '16px', fontWeight: '600' }}>Apply Discount</p>
                            <div style={{ display: 'flex' }}>
                                <input className="drizzy" placeholder="  Enter Coupon Code" />
                                <div className="apply">
                                    <p style={{ color: '#fff', alignItems: 'center', fontWeight: '600', fontSize: '16px', marginLeft: '25px', marginTop: '4px' }}>Apply</p>
                                </div>
                            </div>
                            <p className="divine2"></p>
                            <p style={{ fontWeight: '600', fontSize: '16px', marginTop: '20px', marginBottom: '30px' }}>Pay With</p>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '20px', height: '20px', border: '1px solid #F56630', borderRadius: '50%' }}>
                                    <div style={{ width: '10px', height: '10px', backgroundColor: '#F56630', borderRadius: '50%', marginTop: '5px', marginLeft: '5px' }}></div>
                                </div>
                                <div style={{ marginLeft: '12px', fontWeight: "500", fontSize: '16px', lineHeight: '19px' }}>
                                    Debit Or Credit Card
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: '18px' }}>
                                <div style={{ width: '20px', height: '20px', border: '1px solid #D0D5DD', borderRadius: '50%' }}>
                                    {/* <div style={{ width: '10px', height: '10px', backgroundColor: '#F56630', borderRadius: '50%', marginTop: '5px', marginLeft: '5px' }}></div> */}
                                </div>
                                <div style={{ marginLeft: '12px', fontWeight: "500", fontSize: '16px', lineHeight: '19px', marginBottom: '24px' }}>
                                    Pay on Delivery
                                </div>
                            </div>
                            <p className="divine2"></p>
                            <p style={{ fontWeight: '600', fontSize: '16px', marginBottom: '16px', marginTop: '6px' }}>Enter Card Information</p>
                            <p style={{ fontWeight: '500', fontSize: '14px', color: '#344054', lineHeight: '10px' }}>Cardholder Name</p>
                            <input className="smth" placeholder="     Alexandra McPherson Grey" />
                            <p style={{ fontWeight: '500', fontSize: '14px', color: '#344054', lineHeight: '10px' }}>Card Number</p>
                            <input className="smthg" placeholder="     5061 2345 6789 1234" />
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'block' }}>
                                    <p style={{ fontWeight: '500', fontSize: '14px', color: '#344054' }}>Expirey Date</p>
                                    {/* <div className="lou"> */}
                                    <input type="date" className="lou" />
                                    {/* <p style={{ width: '400', fontSize: '14px', color: '#344054', marginLeft: '16px', marginTop: '18px' }}>09/2024</p> */}
                                    {/* <img src={calender} style={{ width: '16.67px', height: '17.5px', marginLeft: '83px', marginTop: '18px' }} /> */}
                                    {/* </div> */}
                                </div>
                                <div style={{ display: 'block' }}>
                                    <p style={{ fontWeight: '500', fontSize: '14px', color: '#344054', marginLeft: '27.5px' }}>CVV</p>
                                    <div className="ade">
                                        <p style={{ width: '400', fontSize: '14px', color: '#344054', marginLeft: '16px', marginTop: '18px' }}>123</p>
                                        <img src={lock} style={{ width: '16.67px', height: '17.5px', marginLeft: '52px', marginTop: '18px' }} />
                                    </div>
                                    <p className="divine3"></p>
                                    <div style={{ marginLeft: '-190px', fontSize: '14px', fontWeight: '500', color: '#475367', marginTop: '-10px' }}>
                                        <div style={{ display: 'flex' }}>
                                            <p>Sub Total</p>
                                            <p style={{ marginLeft: '249px' }}>$549.00</p>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <p>Tax (10%) </p>
                                            <p style={{ marginLeft: '249px' }}>$54.00</p>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <p>Shipping </p>
                                            <p style={{ marginLeft: '255px' }}>$0.00</p>
                                            <p className="divine4"></p>
                                            <div style={{ display: 'flex', marginTop: '80px', marginLeft: '-360px' }}>
                                                <p>Total</p>
                                                <p style={{ fontSize: '16px', fontWeight: '600', color: '#1D2739', marginLeft: '280px' }}>$250.32</p>
                                            </div>
                                        </div>
                                        <div style={{ width: '360px', height: '56px', backgroundColor: '#2F945C', borderRadius: '30px' }}>
                                            <p style={{ color: '#fff', marginLeft: '150px', lineHeight: '55px' }}>Pay $250.32</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<div className='infode'>
<p className="deltxt">Delivery Information</p>
<div className='container223'>
    <div className='container234'>
        <p className="fn">First Name</p>
        <input className="oou"/>
    </div>
    <div className='container234'>
        <p className="fn">Last Name</p>
        <input className="oou"/>
    </div>
</div>
<p className="fn">Address</p>
<input className="oou2"/>
<p className="fn">Nearest Bus stop</p>
<input className="oou2"/>
<div className='container223'>
    <div className='container234'>
        <p  className="fn">City/Town</p>
        <input className="oou"/>
    </div>
    <div className='container234'>
        <p  className="fn">Zip Code</p>
        <input className="oou"/>
    </div>
</div>
<div className='container223'>
    <div className='container234'>
        <p  className="fn">Mobile Number </p>
        <input className="oou"/>
    </div>
    <div className='container234'>
        <p  className="fn">Email address</p>
        <input className="oou"/>
    </div>
</div>
</div>

                <p style={{ fontWeight: '600', fontSize: '12px', color: '#667185', marginLeft: '120px', paddingTop: '80px' }}>LIKE WHAT YOU SEE?</p>
                <p style={{ fontWeight: '700', fontSize: '28px', color: '#101928', marginTop: '1px', marginLeft: '120px' }}>Let's work together </p>
                <p style={{ fontWeight: '400', fontSize: '16px', color: '#667185', marginTop: '-10px', marginLeft: '120px', paddingBottom: '20px' }}>If you're looking for a kick-ass product design ,<br />were here to help!</p>
                <div className="strLine" style={{ marginLeft: '120px', marginTop: '40px', width: '1320px' }}></div>
                <div className="finaldiv" style={{ marginLeft: '120px', marginTop: '10px' }}>
                    <img src={fb} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={twitter} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={ig} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={inl} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px', marginRight: '365.25px' }} />
                    <div style={{ display: 'flex' }}>
                        <div style={{ border: '1px solid #98A2B3', borderRadius: '50%', width: '10px', height: '10px', marginTop: '18px', marginRight: '6px', textAlign: 'center', justifyContent: 'center' }}><p style={{ marginTop: '-6px', color: '#98A2B3', fontSize: '10px', lineHeight: '22px' }}>c</p></div>
                        <p style={{ fontWeight: '400', fontSize: '14px', color: '#98A2B3', marginRight: '454.75px' }}>. All rights reserved.</p></div>
                    <img src={frameM} alt="icon2" style={{ alignSelf: "center", width: '27.52px', height: "27.52px", marginLeft: "112px", color: "#2F945C", marginTop: "px" }} />
                </div>
            </div>
        </div>
    );
}

export default App;
