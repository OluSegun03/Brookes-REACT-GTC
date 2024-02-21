import React from "react";
import "./page2.css";
import icon1 from './assets/Icon-left.png';
import icon8 from "./assets/icon8.jpg";
import vector from "./assets/Vector 1.png";
import stgreen from "./assets/1stgreen.png"
import white from "./assets/white.png"
import ndgreen from "./assets/2ndgreen.png"
import icon3 from "./assets/heart.jpg";
import icon4 from "./assets/icon.jpg";
import frameM from "./assets/Frame 427321331.png";
import heartt from './assets/heartt.png';
import image101 from './assets/image 1101.png';
import trash from './assets/trash.png';
import { NavLink } from "react-router-dom";
import icon82 from './assets/icon82.png';

function App() {
    return (
        <div>
            <div className="container11">
                <div style={{ display: "flex", marginTop: '-10px' }}>
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
                            <img src={frameM} alt="icon2" style={{ alignSelf: "center", width: '42.74px', height: "43.74px", marginLeft: "152px", color: "#2F945C", marginTop: "10px" }} />
                        </button>
                    </NavLink>
                    <NavLink to={'/fruits'}>
                        <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                            <p style={{ marginTop: "35px", marginLeft: "65px", fontWeight: '600', alignSelf: "center", fontSize: '14px' }}>Fruits</p>
                        </button>
                    </NavLink>
                    <NavLink to={'/vegetables'}>
                        <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                            <p style={{ marginTop: "35px", marginLeft: "65px", fontWeight: '600', alignSelf: "center", fontSize: '14px' }}>Vegetables</p>
                        </button>
                    </NavLink>

                    <NavLink to={'/grains'}>
                        <button className="buttonz">
                            <p style={{ marginTop: "15px", marginLeft: "65px", fontWeight: '600', lineHeight: "50px" }}>Grains</p>
                        </button>
                    </NavLink>

                    <input style={{ marginLeft: '110px' }} className='input77' type="input" placeholder={"Search here..."} />

                    <NavLink to={'/wishlist'}>
                        <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                            <img src={icon82} style={{ width: "23px", height: "20px", marginTop: '30px', paddingLeft: "47px" }} />
                        </button>
                    </NavLink>

                    <NavLink to={'/cart'}>
                        <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                            <img src={icon4} style={{ width: '21.13', height: '21px', top: '1px', marginLeft: '60px', marginTop: '30px', marginRight: '50px' }} />
                        </button>
                    </NavLink>

                    <NavLink to={'/address'}>
                        <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                            <div className="om" style={{ marginLeft: '110px' }}>
                                <p style={{ marginLeft: '0px', lineHeight: '40px', fontWeight: '600' }}>OM</p>
                            </div>
                        </button>
                    </NavLink>

                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '100px' }}>
                <img src={heartt} style={{ width: '40px', height: '34.33px', marginRight: '10px', marginLeft: '150px', marginTop: '50px' }} />
                <p style={{ fontWeight: '500', fontSize: '40px', }}>Wishlist</p>
            </div>
            <div className="tillEnd">
                <p className="divine" style={{ width: '1100px' }}></p>
                <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: '200px', color: '#101928', fontWeight: '600', fontSize: '16px' }}>Product Name</p>
                    <p className="product">Unit Price </p>
                    <p className="product">Stock Status</p>
                    <p className="product">Action</p></div>
            </div>
            <p className="divine" style={{ marginLeft: '170px', marginTop: '30px', width: '1100px' }}></p>
            <div style={{ display: "flex", marginTop: '40px' }}>
                <img src={trash} style={{ width: '16.67px', height: '23px', marginTop: '50px', marginRight: '45.67px', marginLeft: '122.67px' }} />
                <img src={image101} style={{ width: '103.08px', height: '137px' }} />
                <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: '83px', color: '#101928', fontWeight: '500', fontSize: '16px', lineHeight: '90px' }}>Product Name</p>
                    <p className="product2">Unit Price </p>
                    <p className="product2">Stock Status</p>
                    <div style={{}}>
                        <p className="product2" style={{ width: '100px', height: '40px', fontSize: '14px', color: '#F7FDFA', fontWeight: '600', backgroundColor: '#2F945C', lineHeight: '30px', marginTop: '40px', }}><span style={{ marginLeft: '10px', lineHeight: '40px' }}>Add</span><span style={{ marginLeft: '5px' }}>To</span><span style={{ marginLeft: '5px' }}>Cart</span></p></div></div>
            </div>
            {/* <p className="divine" style={{marginTop:'50px', marginLeft:'150.67px'}}></p> */}
            <p className="divine" style={{ marginLeft: '170px', marginTop: '30px', width: '1100px' }}></p>
            <div style={{ display: "flex", marginTop: '40px' }}>
                <img src={trash} style={{ width: '16.67px', height: '23px', marginTop: '50px', marginRight: '45.67px', marginLeft: '122.67px' }} />
                <img src={image101} style={{ width: '103.08px', height: '137px' }} />
                <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: '83px', color: '#101928', fontWeight: '500', fontSize: '16px', lineHeight: '90px' }}>Product Name</p>
                    <p className="product2">Unit Price </p>
                    <p className="product2">Stock Status</p>
                    <div style={{}}>
                        <p className="product2" style={{ width: '100px', height: '40px', fontSize: '14px', color: '#F7FDFA', fontWeight: '600', backgroundColor: '#2F945C', lineHeight: '30px', marginTop: '40px', }}><span style={{ marginLeft: '10px', lineHeight: '40px' }}>Add</span><span style={{ marginLeft: '5px' }}>To</span><span style={{ marginLeft: '5px' }}>Cart</span></p></div></div>
            </div>
            {/* <p className="divine" style={{marginTop:'50px', marginLeft:'150.67px'}}></p> */}
            <p className="divine" style={{ marginLeft: '170px', marginTop: '30px', width: '1100px' }}></p>
            <div style={{ display: "flex", marginTop: '40px' }}>
                <img src={trash} style={{ width: '16.67px', height: '23px', marginTop: '50px', marginRight: '45.67px', marginLeft: '122.67px' }} />
                <img src={image101} style={{ width: '103.08px', height: '137px' }} />
                <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: '83px', color: '#101928', fontWeight: '500', fontSize: '16px', lineHeight: '90px' }}>Product Name</p>
                    <p className="product2">Unit Price </p>
                    <p className="product2">Stock Status</p>
                    <div style={{}}>
                        <p className="product2" style={{ width: '100px', height: '40px', fontSize: '14px', color: '#F7FDFA', fontWeight: '600', backgroundColor: '#2F945C', lineHeight: '30px', marginTop: '40px', }}><span style={{ marginLeft: '10px', lineHeight: '40px' }}>Add</span><span style={{ marginLeft: '5px' }}>To</span><span style={{ marginLeft: '5px' }}>Cart</span></p></div></div>
            </div>
            <p className="divine" style={{ marginTop: '50px', marginLeft: '170px', width: '1100px' }}></p>


        </div>
    );
}

export default App;

