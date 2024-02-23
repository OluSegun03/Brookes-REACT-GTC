import React from "react";
import './fruits.css';
import icon1 from './assets/Icon-left.png';
import icon8 from "./assets/icon8.jpg";
import vector from "./assets/Vector 1.png";
import stgreen from "./assets/1stgreen.png"
import white from "./assets/white.png"
import ndgreen from "./assets/2ndgreen.png"
import icon3 from "./assets/heart.jpg";
import icon4 from "./assets/icon.jpg";
import frameM from "./assets/Frame 427321331.png";
import search from "./assets/search.png";
import plus from "./assets/plus.png";
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import star132 from "./assets/Star 132.png";
import cart2 from "./assets/cart2.png";
import arrow from "./assets/arrow.png";
import nexticon from './assets/nexticon.png';
import { NavLink } from "react-router-dom";
import fb from './assets/fb.png'
import twitter from './assets/twittter.png';
import inl from './assets/in.png';
import ig from "./assets/ig.png";

function App() {
    return (
        <div>
            <div className="topHeader">
                <div style={{ display: "flex" }}>
                    <img src={icon1} alt="icon" style={{ alignSelf: "center", width: '20.81px', height: "23px", marginLeft: "112px" }} />
                    <p style={{ color: "#fff", fontWeight: "500", fontSize: "12px", alignSelf: "center", opacity: "70%", marginLeft: "5px" }}>+23470652748</p>
                    <p style={{ color: "#fff", marginLeft: "390px", width: "175px", height: "17px", opacity: "70%", fontWeight: "500", fontSize: "12px", lineHeight: "29px", marginRight: "40px" }}>Get 50% Off on Selected Items</p>
                    <img src={vector} style={{ height: "24px", marginTop: "10px", color: "#fff" }} />
                    <p style={{ color: '#FBBC05', width: '59px', height: '17px', alignSelf: "center", fontSize: "12px", opacity: "70%", marginLeft: '54px', marginRight: '40px' }}>Shop Now</p>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginLeft: "200px", color: "#fff", width: '41px', height: '17px', opacity: "70%", alignItems: "center", fontSize: '13px', marginRight: '-15px', lineHeight: '30px' }}>EN</p>
                        <img src={icon8} style={{ width: "12px", height: "6.42px", marginTop: '24px', marginRight: '90px' }} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={stgreen} style={{ width: "6.67px", height: "14.44px", marginTop: '20px', marginLeft: "50px" }} />
                        <img src={white} style={{ width: "6.67px", height: '14.44px', marginTop: '20px' }} />
                        <img src={ndgreen} style={{ width: "6.67px", height: "14.47px", marginTop: '20px' }} />
                        <p style={{ color: "#fff", opacity: "70%", marginLeft: "5px", marginRight: '10px' }}>Nigeria</p>
                        <img src={icon8} style={{ width: "12px", height: "6.42px", marginTop: '24px' }} />
                    </div>
                </div>
            </div>
            <div className="container223">
            <NavLink to={'/landing'}>
                    <button className="buttonz">
                        <img src={frameM} alt="icon2" style={{ alignSelf: "center", width: '42.74px', height: "43.74px", marginLeft: "112px", color: "#2F945C", marginTop: "15px" }} />
                    </button>
                </NavLink>
                <NavLink to={'/fruits'}>
                    <button className="buttonz">
                        <p style={{ marginTop: "30px", marginLeft: "75px", alignSelf: "center", fontWeight: '600', fontSize: 'inherit' }}>Fruits</p>
                    </button>
                </NavLink>

                <NavLink to={'/vegetables'}>
                    <button className="buttonz">
                        <p style={{ marginTop: "30px", marginLeft: "75px", alignSelf: "center", fontWeight: '600', fontSize: 'inherit', color: '#2F945C' }}>Vegtables</p>
                    </button>
                </NavLink>

                <NavLink to={'/grains'}>
                    <button className="buttonz">
                        <p style={{ marginTop: "15px", marginLeft: "75px", lineHeight: "50px", fontWeight: '600', fontSize: '16px' }}>Grains</p>
                    </button>
                </NavLink>

                <input className="input77" type="input" placeholder={"Search here..."} />
                <NavLink to={'/wishlist'}>
                    <button className="buttonz">
                    <img src={icon3} style={{ width: "22px", height: "20px", marginTop: '30px', paddingLeft: "47px" }} />
                    </button>
                </NavLink>
                
                <NavLink to={'/Ncarts'}>
                    <button className="buttonz">
                    <img src={icon4} style={{ width: '21px', height: "21px", marginTop: '30px', paddingLeft: "40px", marginRight: "130px" }} />
                    </button>
                </NavLink>

                <NavLink to={'/address'}>
                    <button className="buttonz">
                    <div className="om">
                    <p style={{ marginLeft: '0px', lineHeight: '39px' }}>OM</p>
                </div>
                    </button>
                </NavLink>
                
            </div>
            <div style={{ display: 'flex', }}>
                <div className="container3">
                    <p style={{ color: '#2F945C', fontSize: '14px', fontWeight: '500', marginBottom: '30px' }}>Home /  Grains</p>
                    <div style={{ width: '245px', height: '316px' }}>
                        <p style={{ marginBottom: '30px', fontWeight: '500', fontSize: '20px' }}>Food stuff</p>
                        <input className="secndinput" type="input" placeholder="Search items.." />
                        <div className="pp">
                            <p style={{ fontSize: '14px', fontWeight: '400', marginTop: '25px', }}>Fruits</p>
                            <img src={plus} style={{ width: '15px', height: '15px', marginTop: '25px', marginLeft: '200px' }} />
                        </div>
                        <p className="divineee"></p>
                        <div className="pp">
                            <p style={{ fontSize: '14px', fontWeight: '400', marginTop: '0px' }}>Vegetables</p>
                            <img src={plus} style={{ width: '15px', height: '15px', marginTop: '0px', marginLeft: '170px' }} />
                        </div>
                        <p className="divineee"></p>
                        <div className="pp">
                            <p style={{ fontSize: '14px', fontWeight: '400', marginTop: '0px', }}>Grains</p>
                            <img src={plus} style={{ width: '15px', height: '15px', marginTop: '0px', marginLeft: '200px' }} />
                        </div>
                        <p className="divineee"></p>
                        <div className="pp">
                            <p style={{ fontSize: '14px', fontWeight: '400', marginTop: '0px' }}>Cassavas</p>
                            <img src={plus} style={{ width: '15px', height: '15px', marginTop: '0px', marginLeft: '187px' }} />
                        </div>
                        <p className="divineee"></p>
                    </div>
                </div>
                <div className="container4">
                    <div className="pp">
                        <p style={{ fontSize: '40px', fontWeight: '500', color: '#101928', marginLeft: '30px', color: '#2F945C' }}>Vegetables</p>
                        <p style={{ marginLeft: '579px', marginTop: '70px', fontSize: '14px', fontWeight: '400', color: 'black' }}>
                            Showing<span style={{ marginLeft: '3px' }}>1</span>
                            <span style={{ marginLeft: '3px' }}>to</span>
                            <span style={{ marginLeft: '3px' }}>15</span>
                            <span style={{ marginLeft: '3px' }}>of</span>
                            <span style={{ marginLeft: '3px' }}>200</span>
                            <span style={{ marginLeft: '3px' }}>results</span></p>
                    </div>
                    <div className="imagesdiv">
                        {/* This is where you really start menn */}
                        <div className="pics1">
                            <div className="labelis">
                                <img src={img1} className="img1" />
                                <div style={{ marginLeft: '0px', }}>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                                        <p style={{ marginLeft: '110px' }}>
                                            <span style={{ fontWeight: '700', fontSize: '9px', lineHeight: '12.95px' }}>$</span>
                                            <span style={{ fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>95</span>
                                            <span style={{ fontWeight: '600', fontSize: '12px', lineHeight: '17.4px' }}>.00</span>
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontWeight: '400', marginTop: '-10px' }}>Red Silettos</p>
                                    </div>
                                    <div style={{ display: 'flex', marginTop: '5px' }}>
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px' }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', marginRight: '40px' }} />(91)
                                    </div>
                                    <div className="addtocart" >
                                        <img src={cart2} style={{ width: '17.5px', height: '17.5px', lineHeight: '20px', marginLeft: '12px', marginRight: '7px', marginTop: '7px' }} />
                                        <p style={{ fontWeight: '600', fontSiz: '14px', alignSelf: 'center', lineHeight: '20px', color: '#475467' }}>Add to Cart</p>
                                    </div>
                                </div>
                            </div>
                            <div className="labelis">
                                <img src={img2} className="img1" style={{ marginLeft: '16px' }} />
                                <div style={{ marginLeft: '18px', }}>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                                        <p style={{ marginLeft: '110px' }}>
                                            <span style={{ fontWeight: '700', fontSize: '9px', lineHeight: '12.95px' }}>$</span>
                                            <span style={{ fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>95</span>
                                            <span style={{ fontWeight: '600', fontSize: '12px', lineHeight: '17.4px' }}>.00</span>
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontWeight: '400', marginTop: '-10px' }}>Red Silettos</p>
                                    </div>
                                    <div style={{ display: 'flex', marginTop: '5px' }}>
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px' }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', marginRight: '40px' }} />(91)
                                    </div>
                                    <div className="addtocart" >
                                        <img src={cart2} style={{ width: '17.5px', height: '17.5px', lineHeight: '20px', marginLeft: '12px', marginRight: '7px', marginTop: '7px' }} />
                                        <p style={{ fontWeight: '600', fontSiz: '14px', alignSelf: 'center', lineHeight: '20px', color: '#475467' }}>Add to Cart</p>
                                    </div>
                                </div>
                            </div>
                            <div className="labelis">
                                <img src={img3} className="img1" style={{ marginLeft: '16px' }} />
                                <div style={{ marginLeft: '18px', }}>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                                        <p style={{ marginLeft: '110px' }}>
                                            <span style={{ fontWeight: '700', fontSize: '9px', lineHeight: '12.95px' }}>$</span>
                                            <span style={{ fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>95</span>
                                            <span style={{ fontWeight: '600', fontSize: '12px', lineHeight: '17.4px' }}>.00</span>
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontWeight: '400', marginTop: '-10px' }}>Red Silettos</p>
                                    </div>
                                    <div style={{ display: 'flex', marginTop: '5px' }}>
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px' }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                        <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', marginRight: '40px' }} />(91)
                                    </div>
                                    <div className="addtocart" >
                                        <img src={cart2} style={{ width: '17.5px', height: '17.5px', lineHeight: '20px', marginLeft: '12px', marginRight: '7px', marginTop: '7px' }} />
                                        <p style={{ fontWeight: '600', fontSiz: '14px', alignSelf: 'center', lineHeight: '20px', color: '#475467' }}>Add to Cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pics1">
                        <div className="labelis">
                            <img src={img1} className="img1" />
                            <div style={{ marginLeft: '0px', }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                                    <p style={{ marginLeft: '110px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '9px', lineHeight: '12.95px' }}>$</span>
                                        <span style={{ fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>95</span>
                                        <span style={{ fontWeight: '600', fontSize: '12px', lineHeight: '17.4px' }}>.00</span>
                                    </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '400', marginTop: '-10px' }}>Red Silettos</p>
                                </div>
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px' }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', marginRight: '40px' }} />(91)
                                </div>
                                <div className="addtocart" >
                                    <img src={cart2} style={{ width: '17.5px', height: '17.5px', lineHeight: '20px', marginLeft: '12px', marginRight: '7px', marginTop: '7px' }} />
                                    <p style={{ fontWeight: '600', fontSiz: '14px', alignSelf: 'center', lineHeight: '20px', color: '#475467' }}>Add to Cart</p>
                                </div>
                            </div>
                        </div>
                        <div className="labelis">
                            <img src={img2} className="img1" style={{ marginLeft: '16px' }} />
                            <div style={{ marginLeft: '18px', }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                                    <p style={{ marginLeft: '110px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '9px', lineHeight: '12.95px' }}>$</span>
                                        <span style={{ fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>95</span>
                                        <span style={{ fontWeight: '600', fontSize: '12px', lineHeight: '17.4px' }}>.00</span>
                                    </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '400', marginTop: '-10px' }}>Red Silettos</p>
                                </div>
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px' }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', marginRight: '40px' }} />(91)
                                </div>
                                <div className="addtocart" >
                                    <img src={cart2} style={{ width: '17.5px', height: '17.5px', lineHeight: '20px', marginLeft: '12px', marginRight: '7px', marginTop: '7px' }} />
                                    <p style={{ fontWeight: '600', fontSiz: '14px', alignSelf: 'center', lineHeight: '20px', color: '#475467' }}>Add to Cart</p>
                                </div>
                            </div>
                        </div>
                        <div className="labelis">
                            <img src={img3} className="img1" style={{ marginLeft: '16px' }} />
                            <div style={{ marginLeft: '18px', }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                                    <p style={{ marginLeft: '110px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '9px', lineHeight: '12.95px' }}>$</span>
                                        <span style={{ fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>95</span>
                                        <span style={{ fontWeight: '600', fontSize: '12px', lineHeight: '17.4px' }}>.00</span>
                                    </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '400', marginTop: '-10px' }}>Red Silettos</p>
                                </div>
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px' }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', marginRight: '40px' }} />(91)
                                </div>
                                <div className="addtocart" >
                                    <img src={cart2} style={{ width: '17.5px', height: '17.5px', lineHeight: '20px', marginLeft: '12px', marginRight: '7px', marginTop: '7px' }} />
                                    <p style={{ fontWeight: '600', fontSiz: '14px', alignSelf: 'center', lineHeight: '20px', color: '#475467' }}>Add to Cart</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pics1">
                        <div className="labelis">
                            <img src={img1} className="img1" />
                            <div style={{ marginLeft: '0px', }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                                    <p style={{ marginLeft: '110px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '9px', lineHeight: '12.95px' }}>$</span>
                                        <span style={{ fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>95</span>
                                        <span style={{ fontWeight: '600', fontSize: '12px', lineHeight: '17.4px' }}>.00</span>
                                    </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '400', marginTop: '-10px' }}>Red Silettos</p>
                                </div>
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px' }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', marginRight: '40px' }} />(91)
                                </div>
                                <div className="addtocart" >
                                    <img src={cart2} style={{ width: '17.5px', height: '17.5px', lineHeight: '20px', marginLeft: '12px', marginRight: '7px', marginTop: '7px' }} />
                                    <p style={{ fontWeight: '600', fontSiz: '14px', alignSelf: 'center', lineHeight: '20px', color: '#475467' }}>Add to Cart</p>
                                </div>
                            </div>
                        </div>
                        <div className="labelis">
                            <img src={img2} className="img1" style={{ marginLeft: '16px' }} />
                            <div style={{ marginLeft: '18px', }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                                    <p style={{ marginLeft: '110px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '9px', lineHeight: '12.95px' }}>$</span>
                                        <span style={{ fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>95</span>
                                        <span style={{ fontWeight: '600', fontSize: '12px', lineHeight: '17.4px' }}>.00</span>
                                    </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '400', marginTop: '-10px' }}>Red Silettos</p>
                                </div>
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px' }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', marginRight: '40px' }} />(91)
                                </div>
                                <div className="addtocart" >
                                    <img src={cart2} style={{ width: '17.5px', height: '17.5px', lineHeight: '20px', marginLeft: '12px', marginRight: '7px', marginTop: '7px' }} />
                                    <p style={{ fontWeight: '600', fontSiz: '14px', alignSelf: 'center', lineHeight: '20px', color: '#475467' }}>Add to Cart</p>
                                </div>
                            </div>
                        </div>
                        <div className="labelis">
                            <img src={img3} className="img1" style={{ marginLeft: '16px' }} />
                            <div style={{ marginLeft: '18px', }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                                    <p style={{ marginLeft: '110px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '9px', lineHeight: '12.95px' }}>$</span>
                                        <span style={{ fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>95</span>
                                        <span style={{ fontWeight: '600', fontSize: '12px', lineHeight: '17.4px' }}>.00</span>
                                    </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontWeight: '400', marginTop: '-10px' }}>Red Silettos</p>
                                </div>
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px' }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', }} />
                                    <img src={star132} style={{ width: '13.33px', height: '12.67px', marginLeft: '3px', marginRight: '40px' }} />(91)
                                </div>
                                <div className="addtocart" >
                                    <img src={cart2} style={{ width: '17.5px', height: '17.5px', lineHeight: '20px', marginLeft: '12px', marginRight: '7px', marginTop: '7px' }} />
                                    <p style={{ fontWeight: '600', fontSiz: '14px', alignSelf: 'center', lineHeight: '20px', color: '#475467' }}>Add to Cart</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pp">
                        <div className="lastDiv" style={{ display: 'flex', backgroundColor: '#ffffff' }}>
                            <img src={arrow} style={{ width: '8.02px', height: '15.83px', marginTop: '11px', marginLeft: '10px', marginRight: '13px', color: 'black' }} />
                            <p style={{ color: '#344054', fontSize: '14px,', fontWeight: '600', alignSelf: 'center', marginTop: '16px' }}>Previous</p>
                        </div>

                        <div style={{ display: 'flex', marginLeft: '240.5px' }}>
                            <p>1</p>
                            <p style={{ marginLeft: '8px' }}>2</p>
                            <div style={{ width: '26.26px', height: '26.26px', border: '1px solid #009A49', alignSelf: "center", borderRadius: '6.57px', marginLeft: '15px', marginTop: '2px' }}>
                                <p style={{ marginLeft: '8px', marginTop: '1px', color: 'black', fontWeight: '400' }}>3</p>
                            </div>
                            <p style={{ marginLeft: '8px' }}>...</p>
                            <p style={{ marginLeft: '8px' }}>10</p>
                            <p style={{ marginLeft: '8px' }}>11</p>
                            <p style={{ marginLeft: '8px' }}>12</p>
                            {/* <p style={{marginLeft:'7px'}}>13</p> */}
                            <div className="lastDiv" style={{ display: 'flex', marginLeft: '400px', backgroundColor: '#ffffff', marginLeft: '350px' }}>
                                <p style={{ color: '#344054', fontSize: '14px,', fontWeight: '600', alignSelf: 'center', marginTop: '16px', marginLeft: '30px' }}>Next</p>
                                <img src={nexticon} style={{ width: '8.02px', height: '15.83px', marginTop: '11px', marginLeft: '10px', marginRight: '13px', color: 'black' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '100px', backgroundColor: '#F9FAFB' }}>

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
