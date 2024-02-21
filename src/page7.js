import React from "react";
import './pageVii.css';
import icon1 from './assets/Icon-left.png';
import icon8 from "./assets/icon8.jpg";
import vector from "./assets/Vector 1.png";
import stgreen from "./assets/1stgreen.png";
import white from "./assets/white.png";
import ndgreen from "./assets/2ndgreen.png";
import icon3 from "./assets/heart.jpg";
import icon4 from "./assets/icon.jpg";
import avatars from './assets/Avatars.png';
import fb from './assets/fb.png'
import ig from "./assets/ig.png";
import inl from './assets/in.png';
import frameM from "./assets/Frame 427321331.png";
import twitter from './assets/twittter.png';
import search from './assets/search.png';
import filter from './assets/filter.png';
import sort from './assets/sort.png';
import fearureIcon from './assets/featureIcon.png';
import rightArrow from './assets/rightArrow.png';
import leftArrow from './assets/leftArrow.png';
import icon88 from './assets/Icon88.png';
import { NavLink } from "react-router-dom";


function App() {
    return (
        <div>
            <div className="topHeader">
                <div style={{ display: "flex" }}>
                    <img src={icon1} alt="icon" style={{ alignSelf: "center", width: '20.81px', height: "23px", marginLeft: "112px" }} />
                    <p style={{ color: "#fff", fontWeight: "500", fontSize: "12px", alignSelf: "center", opacity: "70%", marginLeft: "5px" }}>+23470652748</p>
                    <p style={{ color: "#fff", marginLeft: "450px", width: "175px", height: "17px", opacity: "70%", fontWeight: "500", fontSize: "12px", lineHeight: "29px", marginRight: "40px" }}>Get 50% Off on Selected Items</p>
                    <img src={vector} style={{ height: "24px", marginTop: "10px", color: "#fff" }} />
                    <p style={{ color: '#FBBC05', width: '59px', height: '17px', alignSelf: "center", fontSize: "12px", opacity: "70%", marginLeft: '54px', marginRight: '40px' }}>Shop Now</p>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginLeft: "180px", color: "#fff", width: '41px', height: '17px', opacity: "70%", alignItems: "center", fontSize: '13px', marginRight: '-15px', lineHeight: '30px' }}>EN</p>
                        <img src={icon8} style={{ width: "12px", height: "6.42px", marginTop: '24px', marginRight: '55px' }} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={stgreen} style={{ width: "6.67px", height: "14.44px", marginTop: '20px', marginLeft: "0px" }} />
                        <img src={white} style={{ width: "6.67px", height: '14.44px', marginTop: '20px' }} />
                        <img src={ndgreen} style={{ width: "6.67px", height: "14.47px", marginTop: '20px' }} />
                        <p style={{ color: "#fff", opacity: "70%", marginLeft: "5px", marginRight: '10px' }}>Nigeria</p>
                        <img src={icon8} style={{ width: "12px", height: "6.42px", marginTop: '24px' }} />
                    </div>
                </div>
            </div>
            <div className="container223">
                <img src={frameM} alt="icon2" style={{ alignSelf: "center", width: '42.74px', height: "43.74px", marginLeft: "112px", color: "#2F945C", marginTop: "px" }} />
                <p style={{ marginTop: "15px", marginLeft: "100px", fontWeight: '600', alignSelf: "center", color: '#2F945C', fontSize: '16px' }}>About us</p>
                <p style={{ marginTop: "15px", marginLeft: "60px", fontWeight: '600', alignSelf: "center", fontSize: '16px', color: '#101928' }}>Contacts</p>
                <p style={{ marginTop: "15px", marginLeft: "60px", fontWeight: '600', lineHeight: "50px", }}>FAQs</p>
                <img src={search} style={{ width: '16.67px', height: '16.67px', position: 'absolute', left: '42%', top: '11%' }} />
                <input type="input" placeholder={"          Search here..."} style={{ width: '375px', height: '36px', border: '1px solid #D0D5DD', marginTop: '20px', marginLeft: '90px' }} />
                <img src={icon3} style={{ width: "22px", height: "20px", marginTop: '30px', paddingLeft: "47px" }} />
                <img src={icon4} style={{ width: '21px', height: "21px", marginTop: '30px', paddingLeft: "40px", marginRight: "130px" }} />
                <div className="om">
                    <p style={{ marginLeft: '6px', lineHeight: '10px', fontWeight: '600' }}>OM</p>
                </div>
            </div>
            <div style={{ display: 'block', width: '1525px', height: '357px', backgroundColor: '#F3FBF7' }}>
                <img src={avatars} style={{ width: '56px', height: '56px', marginTop: '35px', marginLeft: '692px' }} />
                <p style={{ fontWeight: '600', fontSize: '28px', marginLeft: '645px', marginTop: '18px' }}>Amarachi Okoro</p>
                <p style={{ fontWeight: '400', fontSize: '14px', marginLeft: '650px', marginTop: '-26px' }}>amarachi.okoro@example.com</p>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginLeft: '324.5px' }}>
                        <p style={{ fontWeight: '300', fontSize: '14px', marginLeft: '135px' }}>Address</p>
                        <p style={{ fontWeight: '400', fontSize: '14px', marginTop: '-10px' }}>15, Ogunsaya street 15 gabrella street josua Lagos<br /><span style={{ marginLeft: '135px' }}></span>Nigeria</p>
                        <p></p>
                    </div>
                    <div style={{ display: 'block' }}>
                        <p style={{ fontWeight: '300', fontSize: '14px', marginLeft: '135px' }}>Phone Number</p>
                        <p style={{ fontWeight: '400', fontSize: '14px', marginTop: '-10px', marginLeft: '130px' }}>+234 5834985</p>
                        <p></p>
                    </div>
                    <div>
                        <p style={{ fontWeight: '300', fontSize: '14px', marginLeft: '135px' }}>Phone Number</p>
                        <p style={{ fontWeight: '400', fontSize: '14px', marginTop: '-10px', marginLeft: '130px' }}>+234 5309849</p>
                    </div>
                </div>
                <div style={{ width: '106px', height: '36px', borderRadius: '6px', backgroundColor: '#D0D5DD', marginLeft: '690px' }}>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: '#ffffff', marginTop: '8px', marginLeft: '20px', lineHeight: '35px' }}>Edit Profile</p>
                </div>
            </div>
            <div style={{ display: 'flex', fontWeight: '500', fontWeight: '14px', marginLeft: '112px' }}>
                <div style={{ display: 'block' }}>
                    <p style={{ marginLeft: '16px', color: '#009A49' }}>All Order</p>
                    <p className="divine" style={{ backgroundColor: '#009A49' }}></p>
                </div>
                <div style={{ display: 'block' }}>
                    <NavLink to={'/address'}>
                        <button className="buttonz">
                            <p style={{ marginLeft: '16px', fontWeight:'500', fontSize:'16px', marginTop:'20px' }}>Address Book</p>
                        </button>
                    </NavLink>
                    
                    <p className="divine" style={{ width: '121px' }}></p>
                </div>
                <div style={{ display: 'block' }}>
                <NavLink to={'/cart'}>
                        <button className="buttonz">
                            <p style={{ marginLeft: '16px', fontWeight:'500', fontSize:'16px', marginTop:'20px' }}>Cart</p>
                        </button>
                    </NavLink>
                    <p className="divine"></p>
                </div>
                <div style={{ display: 'block' }}>
                <NavLink to={'/wishlist'}>
                        <button className="buttonz">
                            <p style={{ marginLeft: '16px', fontWeight:'500', fontSize:'16px', marginTop:'20px' }}>Favorite</p>
                        </button>
                    </NavLink>
                    <p className="divine"></p>
                    <p className="divine" style={{ width: '903px', marginLeft: '90px', marginTop: '-18.5px' }}></p>
                </div>
            </div>
            <div style={{ marginLeft: '112px' }}>
                <div style={{ display: 'flex', fontSize: '15.32px', fontWeight: '500', color: '#667185' }}>
                    <p style={{ fontSize: '17.51px', fontWeight: '600', color: '#000000', marginRight: '900px' }}>All Orders</p>
                    <div style={{ display: 'flex' }}>
                        <img src={search} style={{ width: '14.59px', height: '14.59px', marginTop: '20px', marginRight: '5px', marginLeft: '9p' }} />
                        <p style={{ marginRight: '33px' }}>Search</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={filter} style={{ width: '11.67px', height: '10.21px', marginTop: '20px', marginRight: '5px', marginLeft: '9p' }} />
                        <p style={{ marginRight: '33px' }}>Filter</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={sort} style={{ width: '10.21px', height: '13.86px', marginTop: '20px', marginRight: '5px', marginLeft: '9p' }} />
                        <p style={{ marginRight: '33px' }}>Sort</p>
                    </div>
                </div>
                <div className="containerr">
                    <div style={{ display: 'flex', backgroundColor: '#F9FAFB' }}>
                        <div style={{ display: 'flex' }}>
                            <input className="icon" type="checkBox" style={{ marginTop: '13px' }} />
                            <p className="child">Order Number</p>
                            <img src={sort} style={{ width: '10.21px', height: '13.86px', marginTop: '20px', marginRight: '5px' }} />
                        </div>
                        <div className="flex">
                            <p className="child">Date</p>
                            <img src={sort} style={{ width: '10.21px', height: '13.86px', marginTop: '20px', marginRight: '5px', marginLeft: '0px' }} />
                        </div>
                        <div className="flex">
                            <p className="child">Delivery Address</p>
                            <img src={sort} style={{ width: '10.21px', height: '13.86px', marginTop: '20px', marginRight: '5px', marginLeft: '0px' }} />
                        </div>
                        <div className="flex">
                            <p className="child">Item Qty</p>
                            <img src={sort} style={{ width: '10.21px', height: '13.86px', marginTop: '20px', marginRight: '5px', marginLeft: '0px' }} />
                        </div>
                        <div className="flex">
                            <p className="child">Payment Status</p>
                            <img src={sort} style={{ width: '10.21px', height: '13.86px', marginTop: '20px', marginRight: '5px', marginLeft: '0px' }} />
                        </div>
                        <div className="flex">
                            <p className="child">Delivery Status</p>
                            <img src={sort} style={{ width: '10.21px', height: '13.86px', marginTop: '20px', marginRight: '5px', marginLeft: '9p', marginLeft: '0px' }} />
                        </div>
                    </div>
                    <p className="divine" style={{ marginTop: '-3px', width: '1207px' }}></p>
                    <div style={{ display: 'flex' }}>
                        {/* This */}
                        <div style={{ marginTop: '20px', display: 'flex', marginTop: '15px' }}>
                            <input className="icon" type="checkBox" />
                            <div style={{ display: 'block' }}>
                                <p style={{ marginTop: '-17px', fontSize: '15.32px', fontWeight: '500' }}>#KD1890</p>
                                <p style={{ marginTop: '-10px', fontSize: '15.32px', fontWeight: '400' }}>Kyle<span style={{ marginLeft: '6px' }}>Reynolds</span></p>
                            </div>
                            <div>
                                <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '105px', color: '#344054' }}>May<span style={{ marginLeft: '5px' }}>11,</span><span style={{ marginLeft: '5px' }}>2023</span></p>
                            </div>
                            <div>
                                <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '55px', color: '#344054' }}>2<span style={{ marginLeft: '5px' }}>days,</span><span style={{ marginLeft: '5px' }}>12</span><span style={{ marginLeft: '5px' }}>hours</span></p>
                            </div>
                            <div>
                                <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '100px', color: '#344054' }}>20<span style={{ marginLeft: '5px' }}>items</span></p>
                            </div>
                            <div>
                                <p className="paid" style={{ marginTop: '-7px', fontSize: '15.32px', marginLeft: '112px', }}>Paid</p>
                            </div>
                            <div style={{ alignContent: 'center', textAlign: 'center' }}>
                                <p className="read" style={{ marginTop: '-5px', fontSize: '15.32px', fontWeight: '500', marginLeft: '180px', color: '#099137', alignSelf: 'center' }}>Deliverd</p>
                            </div>
                            <div>
                                <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                                    <img src={fearureIcon} style={{ width: '43.77px', height: '43.77px', marginTop: '-15px', marginLeft: '46px' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="divine" style={{ width: '1205px', marginTop: '5px' }}></p>
                    {/* come here my gee */}
                    <div style={{ marginTop: '20px', display: 'flex', marginTop: '30px', border: '1px solid #F0F2F5' }}>
                        <input className="icon" type="checkBox" />
                        <div style={{ display: 'block' }}>
                            <p style={{ marginTop: '-17px', fontSize: '15.32px', fontWeight: '500' }}>#KD1890</p>
                            <p style={{ marginTop: '-10px', fontSize: '15.32px', fontWeight: '400' }}>Kyle<span style={{ marginLeft: '6px' }}>Reynolds</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '105px', color: '#344054' }}>May<span style={{ marginLeft: '5px' }}>11,</span><span style={{ marginLeft: '5px' }}>2023</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '55px', color: '#344054' }}>2<span style={{ marginLeft: '5px' }}>days,</span><span style={{ marginLeft: '5px' }}>12</span><span style={{ marginLeft: '5px' }}>hours</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '100px', color: '#344054' }}>10<span style={{ marginLeft: '5px' }}>items</span></p>
                        </div>
                        <div>
                            <p className="paid" style={{ marginTop: '-7px', fontSize: '15.32px', marginLeft: '112px', color: '#D42620' }}>Pending</p>
                        </div>
                        <div style={{ alignContent: 'center', textAlign: 'center' }}>
                            <p className="read" style={{ marginTop: '-5px', fontSize: '15.32px', fontWeight: '500', marginLeft: '150px', color: '#099137', alignSelf: 'center' }}>Deliverd</p>
                        </div>
                        <div>
                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0' }}>
                                <img src={fearureIcon} style={{ width: '43.77px', height: '43.77px', marginTop: '-15px', marginLeft: '46px' }} />
                            </button>
                        </div>
                    </div>
                    <p className="divine" style={{ width: '1205px', marginTop: '5px' }}></p>

                    <div style={{ marginTop: '20px', display: 'flex', marginTop: '30px' }}>
                        <input className="icon" type="checkBox" />
                        <div style={{ display: 'block' }}>
                            <p style={{ marginTop: '-17px', fontSize: '15.32px', fontWeight: '500' }}>#KD1890</p>
                            <p style={{ marginTop: '-10px', fontSize: '15.32px', fontWeight: '400' }}>Kyle<span style={{ marginLeft: '6px' }}>Reynolds</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '105px', color: '#344054' }}>May<span style={{ marginLeft: '5px' }}>11,</span><span style={{ marginLeft: '5px' }}>2023</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '55px', color: '#344054' }}>2<span style={{ marginLeft: '5px' }}>days,</span><span style={{ marginLeft: '5px' }}>12</span><span style={{ marginLeft: '5px' }}>hours</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '100px', color: '#344054' }}>10<span style={{ marginLeft: '5px' }}>items</span></p>
                        </div>
                        <div>
                            <p className="paid" style={{ marginTop: '-7px', fontSize: '15.32px', marginLeft: '112px', }}>Paid</p>
                        </div>
                        <div style={{ alignContent: 'center', textAlign: 'center' }}>
                            <p className="read" style={{ marginTop: '-5px', fontSize: '15.32px', fontWeight: '500', marginLeft: '180px', color: '#099137', alignSelf: 'center' }}>Deliverd</p>
                        </div>
                        <div>
                            <button style={{ padding: '0', background: 'none', cursor: 'pointer', border: 'none' }}>
                                <img src={fearureIcon} style={{ width: '43.77px', height: '43.77px', marginTop: '-15px', marginLeft: '46px' }} />
                            </button>
                        </div>
                    </div>
                    <p className="divine" style={{ width: '1205px', marginTop: '5px' }}></p>

                    <div style={{ marginTop: '20px', display: 'flex', marginTop: '30px' }}>
                        <input className="icon" type="checkBox" />
                        <div style={{ display: 'block' }}>
                            <p style={{ marginTop: '-17px', fontSize: '15.32px', fontWeight: '500' }}>#KD1890</p>
                            <p style={{ marginTop: '-10px', fontSize: '15.32px', fontWeight: '400' }}>Kyle<span style={{ marginLeft: '6px' }}>Reynolds</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '105px', color: '#344054' }}>May<span style={{ marginLeft: '5px' }}>11,</span><span style={{ marginLeft: '5px' }}>2023</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '55px', color: '#344054' }}>2<span style={{ marginLeft: '5px' }}>days,</span><span style={{ marginLeft: '5px' }}>12</span><span style={{ marginLeft: '5px' }}>hours</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '100px', color: '#344054' }}>10<span style={{ marginLeft: '5px' }}>items</span></p>
                        </div>
                        <div>
                            <p className="paid" style={{ marginTop: '-7px', fontSize: '15.32px', marginLeft: '112px', color: '#D42620' }}>Pending</p>
                        </div>
                        <div style={{ alignContent: 'center', textAlign: 'center' }}>
                            <p className="read" style={{ marginTop: '-5px', fontSize: '15.32px', fontWeight: '500', marginLeft: '150px', color: '#099137', alignSelf: 'center' }}>Deliverd</p>
                        </div>
                        <div>
                            <button style={{ padding: '0', background: 'none', cursor: 'pointer', border: 'none' }}>
                                <img src={fearureIcon} style={{ width: '43.77px', height: '43.77px', marginTop: '-15px', marginLeft: '46px' }} />
                            </button>
                        </div>
                    </div>
                    <p className="divine" style={{ width: '1205px', marginTop: '5px' }}></p>

                    <div style={{ marginTop: '20px', display: 'flex', marginTop: '30px' }}>
                        <input className="icon" type="checkBox" />
                        <div style={{ display: 'block' }}>
                            <p style={{ marginTop: '-17px', fontSize: '15.32px', fontWeight: '500' }}>#KD1890</p>
                            <p style={{ marginTop: '-10px', fontSize: '15.32px', fontWeight: '400' }}>Kyle<span style={{ marginLeft: '6px' }}>Reynolds</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '105px', color: '#344054' }}>May<span style={{ marginLeft: '5px' }}>11,</span><span style={{ marginLeft: '5px' }}>2023</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '55px', color: '#344054' }}>2<span style={{ marginLeft: '5px' }}>days,</span><span style={{ marginLeft: '5px' }}>12</span><span style={{ marginLeft: '5px' }}>hours</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '100px', color: '#344054' }}>10<span style={{ marginLeft: '5px' }}>items</span></p>
                        </div>
                        <div>
                            <p className="paid" style={{ marginTop: '-7px', fontSize: '15.32px', marginLeft: '112px' }}>Paid</p>
                        </div>
                        <div style={{ alignContent: 'center', textAlign: 'center' }}>
                            <p className="notRead" style={{ marginTop: '-5px', fontSize: '15.32px', fontWeight: '500', marginLeft: '180px', color: '#04326B', alignSelf: 'center' }}>In Transit</p>
                        </div>
                        <div>
                            <button style={{ padding: '0', background: 'none', cursor: 'pointer', border: 'none' }}>
                                <img src={fearureIcon} style={{ width: '43.77px', height: '43.77px', marginTop: '-15px', marginLeft: '46px' }} />
                            </button>
                        </div>
                    </div>
                    <p className="divine" style={{ width: '1205px', marginTop: '5px' }}></p>
                    <div style={{ marginTop: '20px', display: 'flex', marginTop: '30px' }}>
                        <input className="icon" type="checkBox" />
                        <div style={{ display: 'block' }}>
                            <p style={{ marginTop: '-17px', fontSize: '15.32px', fontWeight: '500' }}>#KD1890</p>
                            <p style={{ marginTop: '-10px', fontSize: '15.32px', fontWeight: '400' }}>Kyle<span style={{ marginLeft: '6px' }}>Reynolds</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '105px', color: '#344054' }}>May<span style={{ marginLeft: '5px' }}>11,</span><span style={{ marginLeft: '5px' }}>2023</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '55px', color: '#344054' }}>2<span style={{ marginLeft: '5px' }}>days,</span><span style={{ marginLeft: '5px' }}>12</span><span style={{ marginLeft: '5px' }}>hours</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '100px', color: '#344054' }}>10<span style={{ marginLeft: '5px' }}>items</span></p>
                        </div>
                        <div>
                            <p className="paid" style={{ marginTop: '-7px', fontSize: '15.32px', marginLeft: '112px', }}>Paid</p>
                        </div>
                        <div style={{ alignContent: 'center', textAlign: 'center' }}>
                            <p className="notRead" style={{ marginTop: '-5px', fontSize: '15.32px', fontWeight: '500', marginLeft: '180px', color: '#04326B', alignSelf: 'center' }}>In Transit</p>
                        </div>
                        <div>
                            <button style={{ padding: '0', background: 'none', cursor: 'pointer', border: 'none' }}>
                                <img src={fearureIcon} style={{ width: '43.77px', height: '43.77px', marginTop: '-15px', marginLeft: '46px' }} />
                            </button>
                        </div>
                    </div>
                    <p className="divine" style={{ width: '1205px', marginTop: '5px' }}></p>
                    <div style={{ marginTop: '20px', display: 'flex', marginTop: '30px' }}>
                        <input className="icon" type="checkBox" />
                        <div style={{ display: 'block' }}>
                            <p style={{ marginTop: '-17px', fontSize: '15.32px', fontWeight: '500' }}>#KD1890</p>
                            <p style={{ marginTop: '-10px', fontSize: '15.32px', fontWeight: '400' }}>Kyle<span style={{ marginLeft: '6px' }}>Reynolds</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '105px', color: '#344054' }}>May<span style={{ marginLeft: '5px' }}>11,</span><span style={{ marginLeft: '5px' }}>2023</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '55px', color: '#344054' }}>2<span style={{ marginLeft: '5px' }}>days,</span><span style={{ marginLeft: '5px' }}>12</span><span style={{ marginLeft: '5px' }}>hours</span></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '-7px', fontSize: '15.32px', fontWeight: '400', marginLeft: '100px', color: '#344054' }}>10<span style={{ marginLeft: '5px' }}>items</span></p>
                        </div>
                        <div>
                            <p className="paid" style={{ marginTop: '-7px', fontSize: '15.32px', marginLeft: '112px', }}>Paid</p>
                        </div>
                        <div style={{ alignContent: 'center', textAlign: 'center' }}>
                            <p className="lolz" style={{ marginTop: '-5px', fontSize: '15.32px', fontWeight: '500', marginLeft: '180px', alignSelf: 'center' }}>Pending</p>
                        </div>
                        <div>
                            <button style={{ padding: '0', background: 'none', cursor: 'pointer', border: 'none' }}>
                                <img src={fearureIcon} style={{ width: '43.77px', height: '43.77px', marginTop: '-15px', marginLeft: '46px' }} />
                            </button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: '-15px', marginLeft: '350px' }}>
                        <p style={{ fontWeight: '600', fontSize: '15.32px' }}>Page 1 of 30</p>
                        <div className="navigation">
                            <div className="arrows">
                                <img src={leftArrow} style={{ marginLeft: '5px', marginTop: '10px' }} />
                            </div>
                            <div style={{ display: 'flex', fontSize: '15.32px', color: '#98A2B3', fontWeight: '400' }}>
                                <p style={{ marginLeft: '-22px' }}>1</p>
                                <p style={{ marginLeft: '15px' }}>2</p>
                                <div style={{ width: '26.26px', height: '26.26px', border: '1px solid #009A49', alignSelf: "center", borderRadius: '6.57px', marginLeft: '15px', marginTop: '2px' }}>
                                    <p style={{ marginLeft: '8px', marginTop: '1px', color: 'black', fontWeight: '400' }}>3</p>
                                </div>
                                <p style={{ marginLeft: '15px' }}>...</p>
                                <p style={{ marginLeft: '15px' }}>12</p>
                                <p style={{ marginLeft: '15px' }}>13</p>
                                <p style={{ marginLeft: '15px' }}>14</p>
                            </div>
                            <div className="arrows" style={{ marginLeft: '10px' }}>
                                <img src={rightArrow} style={{ marginLeft: '5px', marginTop: '10px' }} />
                            </div>
                        </div>
                        <p style={{ color: '#98A2B3', fontSize: '15.32px', fontWeight: '400', marginLeft: '-8px' }}>Go to page</p>
                        <div style={{ display: 'flex', width: '70.03px', height: '39.51px', border: '1px solid #D0D5DD', borderRadius: '6.57px', marginLeft: '15px', marginTop: '10px' }}>
                            <p style={{ marginLeft: '15px', marginTop: '8px', color: '#98A2B3', fontSize: '15.32px', fontWeight: '400' }}>00</p>
                            <img src={icon88} style={{ height: '6.47px', width: '11.94px', marginLeft: '10px', marginTop: '16px', }} />
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