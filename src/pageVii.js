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
import flag from "./assets/flag.png";
import caller from './assets/caller.png';
import mail from './assets/mail.png';
import vectoree from './assets/Vectoree.png';
import edit from './assets/edit.png';
import fb from './assets/fb.png'
import ig from "./assets/ig.png";
import inl from './assets/in.png';
import frameM from "./assets/Frame 427321331.png";
import twitter from './assets/twittter.png';
import { NavLink } from "react-router-dom";

function App() {
    return (
        <div>
            <div className="topHeader">
                <div style={{ display: "flex" }}>
                    <img src={icon1} alt="icon" style={{ alignSelf: "center", width: '20.81px', height: "23px", marginLeft: "112px" }} />
                    <p style={{ color: "#fff", fontWeight: "500", fontSize: "12px", alignSelf: "center", opacity: "70%", marginLeft: "5px" }}>+23470652748</p>
                    <p style={{ color: "#fff", marginLeft: "390px", width: "175px", height: "17px", opacity: "70%", fontWeight: "500", fontSize: "12px", lineHeight: "29px", marginRight: "40px" }}>Get 50% Off on Selected Items</p>
                    <img src={vector} style={{ height: "24px", marginTop: "10px", color: "#fff" }} />
                    <NavLink to={'/wishlist'}>
                        <button className="buttonz">
                            <p style={{ color: '#FBBC05', width: '59px', height: '17px', alignSelf: "center", fontSize: "12px", opacity: "70%", marginLeft: '54px', marginRight: '40px', marginTop: '20px' }}>Shop Now</p>
                        </button>
                    </NavLink>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginLeft: "230px", color: "#fff", width: '41px', height: '17px', opacity: "70%", alignItems: "center", fontSize: '13px', marginRight: '-15px', lineHeight: '30px' }}>EN</p>
                        <img src={icon8} style={{ width: "12px", height: "6.42px", marginTop: '24px', marginRight: '75px' }} />
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
                <NavLink to={'/address'}>
                    <button className="buttonz">
                        <img src={frameM} alt="icon2" style={{ alignSelf: "center", width: '42.74px', height: "43.74px", marginLeft: "112px", color: "#2F945C", marginTop: "15px" }} />
                    </button>
                </NavLink>

                <NavLink to={'/fruits'}>
                    <button className="buttonz">
                        <p style={{ marginTop: "25px", marginLeft: "130px", fontWeight: '600', alignSelf: "center", fontSize: '16px' }}>Fruits</p>
                    </button>
                </NavLink>

                <NavLink to={'/vegetables'}>
                    <button className="buttonz">
                    <p style={{ marginTop: "25px", marginLeft: "80px", fontWeight: '600', alignSelf: "center" }}>Vegtables</p>
                    </button>
                </NavLink>
                
                <p style={{ marginTop: "15px", marginLeft: "80px", fontWeight: '600', lineHeight: "50px", marginRight: '36px' }}>Grains</p>
                <input className="input77" type="input" placeholder={"Search here..."} />
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
                    <NavLink to={'/allOrder'}>
                        <button className="buttonz">
                            <p style={{ marginLeft: '16px', marginTop: '24px', marginRight: '-5px', fontWeight: '500', fontSize: '16px', marginTop: '20px' }}>All Order</p>
                        </button>
                    </NavLink>
                    <p className="divine" style={{ marginRight: '-10px' }}></p>
                </div>
                <div style={{ display: 'block' }}>
                    <NavLink to={'/address'}>
                        <button className="buttonz">
                            <p style={{ marginLeft: '16px', color: '#009A49', fontWeight: '500', fontSize: '16px', marginTop: '20px' }}>Address Book</p>
                        </button>
                    </NavLink>

                    <p className="divine" style={{ width: '121px', backgroundColor: '#009A49' }}></p>
                </div>
                <div style={{ display: 'block' }}>
                    <NavLink to={'/Ncarts'}>
                        <button className="buttonz">
                            <p style={{ marginLeft: '16px', fontWeight: '500', fontSize: '16px', marginTop: '20px' }}>Cart</p>
                        </button>
                    </NavLink>
                    <p className="divine"></p>
                </div>
                <div style={{ display: 'block' }}>
                    <p style={{ marginLeft: '16px', marginTop: '20px' }}>Favorite</p>
                    <p className="divine"></p>
                    <p className="divine" style={{ width: '903px', marginLeft: '90px', marginTop: '-18.5px' }}></p>
                </div>
            </div>
            <div className="container02" style={{ marginTop: '24px' }}>
                <div style={{ display: 'flex' }}>
                    <p style={{ width: '15px', height: '15px', borderRadius: '50%', border: '1px solid #D0D5DD', marginLeft: '20px', marginRight: '5px', marginTop: '33px' }}></p>
                    <div style={{ display: 'flex' }}>
                        <p style={{ fontWeight: '600', fontSize: '24px', color: '#101928' }}>Address One</p>
                        <div style={{ display: 'flex' }}>
                            <img src={edit} style={{ width: '16.67px', height: '16.67px', marginLeft: '980px', marginTop: '30px' }} />
                            <p style={{ fontWeight: '600', fontSize: '16px', color: '#FBBC05', marginTop: '27px', marginLeft: '8px' }}>Edit</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block', fontWeight: '400', fontSize: '14px', color: '#667185' }}>
                    <p style={{ fontWeight: '600', fontSize: '16px', color: '#344054', marginLeft: '20px' }}>Alexandra McPherson</p>
                    <div style={{ display: 'flex' }}>
                        <img src={flag} style={{ width: '17.5px', height: '16.53px', marginLeft: '20px' }} />
                        <p style={{ marginTop: '-5px', marginLeft: '10px' }}>somethign and a placeholder</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={caller} style={{ width: '17.5px', height: '16.53px', marginLeft: '20px' }} />
                        <p style={{ marginTop: '-5px', marginLeft: '10px' }}>somethign and a placeholder</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={mail} style={{ width: '18.33px', height: '15px', marginLeft: '20px' }} />
                        <p style={{ marginTop: '-5px', marginLeft: '10px' }}>somethign and a placeholder</p>
                    </div>
                </div>
            </div>
            <div className="container02" style={{ marginTop: '32px' }}>
                <div style={{ display: 'flex' }}>
                    <p style={{ width: '15px', height: '15px', borderRadius: '50%', border: '1px solid #D0D5DD', marginLeft: '20px', marginRight: '5px', marginTop: '33px' }}></p>
                    <div style={{ display: 'flex' }}>
                        <p style={{ fontWeight: '600', fontSize: '24px', color: '#101928' }}>Address One</p>
                        <div style={{ display: 'flex' }}>
                            <img src={edit} style={{ width: '16.67px', height: '16.67px', marginLeft: '980px', marginTop: '30px' }} />
                            <p style={{ fontWeight: '600', fontSize: '16px', color: '#FBBC05', marginTop: '27px', marginLeft: '8px' }}>Edit</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block', fontWeight: '400', fontSize: '14px', color: '#667185' }}>
                    <p style={{ fontWeight: '600', fontSize: '16px', color: '#344054', marginLeft: '20px' }}>Alexandra McPherson</p>
                    <div style={{ display: 'flex' }}>
                        <img src={flag} style={{ width: '17.5px', height: '16.53px', marginLeft: '20px' }} />
                        <p style={{ marginTop: '-5px', marginLeft: '10px' }}>somethign and a placeholder</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={caller} style={{ width: '17.5px', height: '16.53px', marginLeft: '20px' }} />
                        <p style={{ marginTop: '-5px', marginLeft: '10px' }}>somethign and a placeholder</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={mail} style={{ width: '18.33px', height: '15px', marginLeft: '20px' }} />
                        <p style={{ marginTop: '-5px', marginLeft: '10px' }}>somethign and a placeholder</p>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '732px', backgroundColor: '#F9FAFB' }}>

                <p style={{ fontWeight: '600', fontSize: '12px', color: '#667185', marginLeft: '120px' }}>LIKE WHAT YOU SEE?</p>
                <p style={{ fontWeight: '700', fontSize: '28px', color: '#101928', marginTop: '1px', marginLeft: '120px' }}>Let's work together </p>
                <p style={{ fontWeight: '400', fontSize: '16px', color: '#667185', marginTop: '-10px', marginLeft: '120px' }}>If you'r looking for a kick product design ,<br />agency, were here to help!</p>
                <div className="strLine"></div>
                <div className="finaldiv" style={{ marginLeft: '120px' }}>
                    <img src={fb} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={twitter} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={ig} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={inl} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px', marginRight: '365.25px' }} />
                    <p style={{ fontWeight: '400', fontSize: '14px', color: '#98A2B3', marginRight: '454.75px' }}>2023 Rayna. All rights reserved.</p>
                    <img src={frameM} alt="icon2" style={{ alignSelf: "center", width: '27.52px', height: "27.52px", marginLeft: "112px", color: "#2F945C", marginTop: "px" }} />
                </div>
            </div>
        </div>
    );
}

export default App;