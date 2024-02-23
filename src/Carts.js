import React from "react";
import { Form, NavLink, useNavigate } from "react-router-dom";
import "./landingPage.css";
import icon1 from "./assets/Icon-left.png";
import some from './assets/some.png'
import icon3 from "./assets/heart.jpg";
import icon4 from "./assets/icon.jpg";
// import pfp from "./assets/Frame 1171274887 (1).png";
import arrow from './assets/arrow.png';//arrow for shop now 
import Nike from "./assets/Rectangle 512.jpg";
import north from "./assets/Rectangle 517.png";
import addias from "./assets/Rectangle 514.png";
import zara from "./assets/Rectangle 516.png";
import vector from "./assets/Vector 1.png";
// import shape as './assets/shape.png'///shape
import icon360 from './assets/icon360.png';
import shape from './assets/shape.png';
import icon5 from "./assets/icon.png";
import frameM from "./assets/Frame 427321331.png";
import iconn8 from './assets/iconn8.png'//like arrow drop down 2 text
// import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import icon8 from "./assets/icon8.jpg";
import stgreen from "./assets/1stgreen.png"
import white from "./assets/white.png"
import ndgreen from "./assets/2ndgreen.png"
import cart from './assets/cart.png'
import smile from './assets/smile.png'
import rect1 from './assets/Rectangle 531.png';//rectangles from the buttom on monday
import rect2 from './assets/Rectangle 501.png';
import rect3 from './assets/Rectangle 51.png';
import background from './assets/Frame 1171274887 (1).png'
import rice from './assets/rice.png';//the end pictures
import star132 from './assets/Star 132.png';
import cart2 from './assets/cart2.png';
import efo from './assets/efo.png'
import g4 from './assets/g4.png'
import beans from './assets/beans.png';
import frame001 from './assets/frame001.png';
import twitter from './assets/twittter.png';
import fb from './assets/fb.png'
import ig from "./assets/ig.png"
import inl from './assets/in.png'
import bgPepper from './assets/bgPepper.png';
import arrow2 from './assets/arrow2.png';
import homeicon from "./assets/homeicon.png";
import xicon from './assets/xicon.png';
import hmm from './assets/hmm.png';
import plus from './assets/plus+.png';
import trash from './assets/trash.png';

function App() {
    return (
        <div>
            <div className="container11">
                <div style={{ display: "flex", }}>
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
                            <img src={icon3} style={{ width: "22px", height: "20px", marginTop: '30px', paddingLeft: "47px" }} />
                        </button>
                    </NavLink>

                    <NavLink to={'/cart'}>
                        <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                            <img src={icon4} style={{ width: '21.13', height: '21px', top: '1px', marginLeft: '60px', marginTop: '30px', marginRight: '50px' }} />
                        </button>
                    </NavLink>

                    <div className="om" style={{ marginLeft: '140px' }}>
                        <p style={{ marginLeft: '6px', lineHeight: '10px', fontWeight: '600' }}>OM</p>
                    </div>
                </div>
                <div className="container2231" style={{ }}>
                    <div style={{ display: 'flex', marginTop: '30px' }}>
                        <div className="bgnow">
                            <p className="underbg">Home / Fruits / Pepper</p>
                            <img className="bgPepper" src={bgPepper} />
                        </div>
                        <div className="runnig">
                            <p className="atatxt">Pepper (Ata rodo)</p>
                            <p className="desc">Description: Praised by the streets for its classic simplicity and comfort, the Nike<br />Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks.</p>
                            <div className="container223">
                                <img className="starz" src={star132} />
                                <img className="starz" src={star132} />
                                <img className="starz" src={star132} />
                                <img className="starz" src={star132} />
                                <img className="starz" src={star132} />
                                <p className="one">(121)</p>
                            </div>
                            <p className="basket">$190.20 per baseket</p>
                            <p className="sugg">Suggestion: you can divide the basket into two</p>
                            <p className="divine" style={{ width: '520px' }}></p>
                            <p className="qu">Quantity</p>
                            <div className="container223">
                                <div className="adj">
                                    <p className="sub"></p>
                                    <p className="sms">1</p>
                                    <div className="sms2">
                                        <p className="p1"></p>
                                        <p className="p2"></p>
                                    </div>
                                </div>
                                <div className="kan">
                                    <p>Only <span className="spa">12 Items</span> Left!<br />Don't miss it</p>
                                </div>
                            </div>
                            <div className="container223" style={{ marginTop: '24px' }}>
                                <div className="buy">
                                    <p> Buy Now</p>
                                </div>
                                <div className="addto">
                                    <p>Add to cart</p>
                                </div>
                            </div>
                            <div className="free">
                                <div className="container223">
                                    <img className="homeicon" src={homeicon} />
                                    <p className="freder">Free Delivery</p>
                                </div>
                                <p className="baisc">Enter your postal code for delivery availability</p>
                            </div>

                        </div>
                    </div>
                    {/* this is the nexta div on the flex  */}

                    <div className="myCarts3">
                        <div className="container223">
                            <p className="tetx">My Carts</p>
                            <p className="no3">3</p>
                           ``
                                <img className="xicon" src={xicon} />

                        </div>
                        <div className="omoo">
                            <div className="container223">
                                <img className="hmm" src={hmm} />
                                <div style={{ display: 'block', marginLeft: '20px' }}>
                                    <p className="pepp">Pepper Atarodo<span className="henn">N</span><span className="hun5">1500</span></p>
                                    <p className="qqt">Qty : Black</p>
                                    <div style={{ display: 'flex' }}>
                                        <div className="adj2">
                                            <p className="subb"></p>
                                            <p className="smzs">1</p>
                                            <img className="plus" src={plus} />
                                        </div>
                                        <img className="trash" src={trash} />
                                    </div>
                                </div>
                            </div>
                            <div className="container223">
                                <img className="hmm" src={hmm} />
                                <div style={{ display: 'block', marginLeft: '20px' }}>
                                    <p className="pepp">Pepper Atarodo<span className="henn2">N</span><span className="hun5">1500</span></p>
                                    <p className="qqt">Qty : Black</p>
                                    <div style={{ display: 'flex' }}>
                                        <div className="adj2">
                                            <p className="subb"></p>
                                            <p className="smzs">1</p>
                                            <img className="plus" src={plus} />
                                        </div>
                                        <img className="trash" src={trash} />
                                    </div>
                                </div>
                            </div>
                            <div className="container223">
                                <img className="hmm" src={hmm} />
                                <div style={{ display: 'block', marginLeft: '20px' }}>
                                    <p className="pepp">Pepper Atarodo<span className="henn3">N</span><span className="hun5">1500</span></p>
                                    <p className="qqt">Qty : Black</p>
                                    <div style={{ display: 'flex' }}>
                                        <div className="adj2">
                                            <p className="subb"></p>
                                            <p className="smzs">1</p>
                                            <img className="plus" src={plus} />
                                        </div>
                                        <img className="trash" src={trash} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="divinre"></p>
                        <p className="subz">SubTotal:<span className="henn23"> N</span><span className="thref">3500.</span><span className="zeo">00</span></p>
                        <p className="divinre"></p>
                        <div className="cheout">
                            Checkout
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )

};

export default App;