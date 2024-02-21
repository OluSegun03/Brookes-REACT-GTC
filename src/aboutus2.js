import React from "react";
import './aboutus.css';
import icon1 from './assets/Icon-left.png';
import icon8 from "./assets/icon8.jpg";
import vector from "./assets/Vector 1.png";
import stgreen from "./assets/1stgreen.png";
import white from "./assets/white.png";
import ndgreen from "./assets/2ndgreen.png";
import icon3 from "./assets/heart.jpg";
import icon4 from "./assets/icon.jpg";
import frameM from "./assets/Frame 427321331.png";
import search from './assets/search.png';
import iconnz from './assets/iconnz.png';
import bigveggies from './assets/bigveggies.png'
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
                <NavLink to={'/aboutus'}>
                    <button className="buttonz">
                        <p style={{ marginTop:'35px', marginLeft: "100px", fontWeight: '600', alignSelf: "center", fontSize: '16px', color: '#101928',}}>About us</p>
                    </button>
                </NavLink>

                <NavLink to={'/contactus'}>
                    <button className="buttonz">
                         <p style={{ marginTop: "15px", marginLeft: "60px", fontWeight: '600', alignSelf: "center", fontSize: '16px', color: '#101928', marginTop:'35px', color: '#2F945C' }}>Contacts</p>
                    </button>
                </NavLink>
               
                <p style={{ marginTop: "15px", marginLeft: "60px", fontWeight: '600', lineHeight: "50px", }}>FAQs</p>
                <img src={search} style={{ width: '16.67px', height: '16.67px', position: 'absolute', left: '42%', top: '11%' }} />
                <input type="input" placeholder={"          Search here..."} style={{ width: '375px', height: '36px', border: '1px solid #D0D5DD', marginTop: '20px', marginLeft: '90px' }} />
                <img src={icon3} style={{ width: "22px", height: "20px", marginTop: '30px', paddingLeft: "47px" }} />
                <img src={icon4} style={{ width: '21px', height: "21px", marginTop: '30px', paddingLeft: "40px", marginRight: "130px" }} />
                <div style={{ display: 'flex' }}>
                    <div className="logina">
                        <p style={{ marginLeft: '20px', marginTop: '13px', fontWeight: '600', fontSize: '14px', color: '#2F945C' }}>Login</p>
                    </div>
                    <div className="logina" style={{ marginLeft: '1px', backgroundColor: '#2F945C', }}>
                        <p style={{ marginLeft: '15px', marginTop: '13px', fontWeight: '600', fontSize: '14px', color: '#FFFFFF' }}>Sign up</p>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ marginLeft: '120px', fontWeight: '500', color: '#344054' }}>
                    <div style={{ display: 'block' }}>
                        <p style={{ fontWeight: '600', fontSize: '36px', }}>Get in touch </p>
                        <p style={{ color: '#667085', fontSize: '20px', marginTop: '-10px' }}>Our friendly team will love to hear from you </p>
                        <div style={{ display: 'flex', marginTop: '35px', fontSize: '14px', color: '#344054' }}>
                            <div style={{ display: 'block' }}>
                                <p >First name</p>
                                <input placeholder="   Fist name" style={{ marginRight: '32px', border:'1px solid #D0D5DD'}} />
                            </div>
                            <div style={{ display: 'block' }}>
                                <p>Last name</p>
                                <input placeholder="   Last name" style={{border:'1px solid #D0D5DD'}}/>
                            </div>
                        </div>
                        <div>
                            <p style={{ marginTop: '30px' }}>Email</p>
                            <input type="email" placeholder="you@gmail.com" style={{ width: '480px', marginTop: '-10px', border:'1px solid #D0D5DD' }} />
                        </div>
                        <div>
                            <p style={{ marginTop: '30px' }}>Phone number</p>
                            <div style={{ display: 'flex' }}>
                                <p style={{ color: '#101828', fontSize: '14px', fontWeight: '500', position: 'absolute', top: '77.8%', marginLeft: '10px', color:'#101828'}}>US</p>
                                <img src={iconnz} style={{ position: 'absolute', width: '10px', height: '7px', marginLeft: '36px', top: '80.4%' }} />
                            </div>
                            <input type="email" placeholder="              +1(555)000-0000" style={{ width: '480px', marginTop: '-10px', fontSize: '16px', border:'1px solid #D0D5DD' }} />
                        </div>
                        <div>
                            <p style={{ marginTop: '30px', fontSize: '14px', fontWeight: '500' }}>Message</p>
                            <input style={{ width: '480px', height: '128px', marginTop: '-10px', border:'1px solid #D0D5DD' }} />
                        </div>
                        <div style={{ display: 'flex', width: '480px', height: '24px', marginTop: '30px', marginRight: '10px' }}>
                            <input type="checkbox" style={{ width: '20px', height: '20px', border:'1px solid #D0D5DD'}} />
                            <p style={{ marginTop: '0px', marginLeft: '5px', fontWeight: '400', fontSize: '16px' }}>You agree to our friendly privacy policy</p>
                        </div>
                        <button style={{ padding: '0', cursor: 'pointer', background: 'none', border: 'none' }}>
                            <div style={{ width: '480px', height: '48px', backgroundColor: '#2F945C',border:'1px solid #2F945C', borderRadius: '8px', marginTop:'10px'}}>
                                <p style={{color:"#FBFEFC", fontSize:'16px', fontWeight:'600', lineHeight:'20px'}}>Send message</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={bigveggies} style={{width:'576px', height:'800px', marginLeft:'63px', marginTop:'80px'}}/>
                </div>
            </div>
        </div>
    );
}

export default App;

