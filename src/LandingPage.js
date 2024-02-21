import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

import arrow2 from './assets/arrow2.png'


function App() {
    return (
        <div className="container11">
            <div style={{ display: "flex" }}>
                <img src={icon1} alt="icon" style={{ alignSelf: "center", width: '20.81px', height: "23px", marginLeft: "112px" }} />
                <p style={{ color: "#fff", fontWeight: "500", fontSize: "12px", alignSelf: "center", opacity: "70%", marginLeft: "5px" }}>+234 70652748</p>
                <p style={{ color: "#fff", marginLeft: "380px", width: "175px", height: "17px", opacity: "70%", fontWeight: "500", fontSize: "12px", lineHeight: "29px", marginRight: "24px" }}>Get 50% Off on Selected Items</p>
                <img src={vector} style={{ height: "24px", marginTop: "10px", color: "#fff" }} />
                <p style={{ color: '#FBBC05', width: '59px', height: '17px', alignSelf: "center", fontSize: "12px", opacity: "70%", marginLeft: '24px' }}>Shop Now</p>
                <div style={{ display: "flex", marginLeft:'50px'}}>
                    <p style={{ marginLeft: "200px", color: "#fff", width: '41px', height: '17px', opacity: "70%", alignItems: "center" }}>EN</p>
                    <img src={icon8} style={{ width: "12px", height: "6.42px", marginTop: '24px' }} />
                </div>
                <div style={{ display: 'flex', marginLeft:'40px' }}>
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
                <NavLink to={'/fruits'}>
                    <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                        <img src={icon4} style={{ width: '21.13', height: '21px', top: '1px', marginLeft:'30px' , marginTop: '30px', marginRight:'50px' }} />
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
                            <p className="signup" style={{ marginLeft: "22px", color: "#fff", textAlign: "center", fontWeight: '600', lineHeight: "40px", lineHeight:'46px' }}>Sign up</p>
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="background" >
                <img src={background} style={{ width: "1270px", marginLeft: "112px", marginTop: "10px" }} />
            </div>
            <div style={{ marginLeft: "112px" }}>
                <p style={{ marginLeft: "112px,", width: "93px", height: "36px", fontWeight: "700", fontSize: "36px" }}>Brands</p>
                <div className="brandNames">
                    <img src={Nike} />
                    <img src={north} />
                    <img src={addias} />
                    <img src={zara} />
                    <img src={Nike} />
                    <img src={north} />
                    <img src={addias} />
                </div>
                <div style={{ display: "flex" }}>
                    <p style={{ fontWeight: "700", fontSize: "28px", textAlign: "center", marginTop: '80px' }}>Categories</p>
                    <div style={{ display: "flex" }}>
                        <p style={{ paddingLeft: "1000px", fontSize: "14px", color: "#2F945C", textAlign: "center", lineHeight: "40px" }}>view all</p>
                        <img src={icon5} style={{ width: "10px", height: "12px", paddingTop: "26px", marginLeft: "4px" }} />
                    </div>
                </div>
                {/* here is whweew you going man */}
                <div className="container223" style={{ display: "flex", marginTop: '-74px' }}>
                    <div style={{ display: 'block', position: 'relative' }}>
                        <img src={some} style={{ width: '596px', height: "770px", marginTop: "68px", borderRadius: '10px' }} />
                        <div style={{ position: 'absolute', top: '79%', left: '8%', color: '#fff' }}>
                            <p style={{ fontWeight: "600", fontSize: '36px', lineHeight: '44px', margin: '0' }}>Fresh veggies</p>
                            <p style={{ margin: 0, lineHeight: '2', marginBottom: '10px', opacity: '80%' }}>Ranging from Efo, Ewedu, Gbure, Carrots....etc</p>

                            <div className="shopnow" ><p style={{ marginLeft: '18px', }}>Shop Now</p>
                                <img src={arrow2} alt="arrpow" style={{ width: '9.63px', height: '19px', marginTop: '16.1px', marginLeft: '20px' }} />
                            </div>

                        </div>
                    </div>
                    <div style={{ display: "block" }}>
                        <div style={{ position: 'relative', }}>
                            <img src={two} style={{ width: "596px", height: '373px', borderRadius: "10px", marginTop: "68px", paddingLeft: "24px", display: 'inline-block', paddingBottom: "24px" }} alt="Your Alt Text" />
                            <div style={{ position: 'absolute', top: '55%', left: '10%', color: '#fff' }}>
                                <p style={{ fontWeight: "600", fontSize: '36px', lineHeight: '44px', margin: '0' }}>Grains</p>
                                <p style={{ margin: 0, lineHeight: '2', marginBottom: '10px', opacity: '80%' }}>Ranging from Efo, Ewedu, Gbure, Carrots....etc</p>
                                <div className="shopnow" ><p style={{ marginLeft: '18px', }}>Shop Now</p>
                                    <img src={arrow2} alt="arrpow" style={{ width: '9.63px', height: '19px', marginTop: '16.1px', marginLeft: '20px' }} />
                                </div>
                            </div>
                        </div>


                        <div style={{ display: "block" }}>
                            <div style={{ position: 'relative', }}>
                                <img src={three} style={{ width: "596px", height: '373px', borderRadius: "10px", paddingLeft: "24px" }} />
                                <div style={{ position: 'absolute', top: '55%', left: '10%', color: '#fff' }}>
                                    <p style={{ fontWeight: "600", fontSize: '36px', lineHeight: '44px', margin: '0' }}>Fresh Fruits</p>
                                    <p style={{ margin: 0, lineHeight: '2', marginBottom: '10px', opacity: '80%' }}>Ranging from Efo, Ewedu, Gbure, Carrots....etc</p>
                                    <div className="shopnow" ><p style={{ marginLeft: '18px', }}>Shop Now</p>
                                        <img src={arrow2} alt="arrpow" style={{ width: '9.63px', height: '19px', marginTop: '16.1px', marginLeft: '20px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ display: 'block', fontSize: '24px', fontWeight: '700', lineHeight: '36px', }}><p style={{ display: 'block' }}>We provide the<br />best customer experiences</p></div>
            </div>
            <div style={{ display: 'flex', marginTop: '-30px' }}>
                <div style={{ display: 'block', marginLeft: '125.5px' }}>
                    <img src={cart} style={{ width: '21.13', height: '21px', top: '1px', left: '1.5px', marginTop: '51px' }} />
                    <p style={{ fontWeight: '600', fontSize: '18px' }}>Fresh products</p>
                    <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '' }}>we ensure money-back guarantee if<br />the product is counterfeit</p>
                </div>
                <div style={{ display: 'block', marginLeft: '100.5px' }}>
                    <img src={smile} style={{ width: '21.13', height: '21px', top: '1px', left: '1.5px', marginTop: '51px' }} />
                    <p style={{ fontWeight: '600', fontSize: '18px' }}>Satisfaction Guarantee</p>
                    <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '' }}>we ensure money-back guarantee if<br />the product is counterfeit</p>
                </div>
                <div style={{ display: 'block', marginLeft: '100.5px' }}>
                    <img src={shape} style={{ width: '21.13', height: '21px', top: '1px', left: '1.5px', marginTop: '51px' }} />
                    <p style={{ fontWeight: '600', fontSize: '18px' }}>New Arrival Everyday</p>
                    <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '' }}>we ensure money-back guarantee if<br />the product is counterfeit</p>
                </div>
                <div style={{ display: 'block', marginLeft: '100.5px' }}>
                    <img src={icon360} style={{ width: '21.13', height: '21px', top: '1px', left: '1.5px', marginTop: '51px' }} />
                    <p style={{ fontWeight: '600', fontSize: '18px' }}>Fast & Free Shipping</p>
                    <p style={{ fontWeight: '400', fontSize: '14px', paddingBottom: '80px' }}>We ensure money-back guarantee if<br />the product is counterfeit</p>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '-30px' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ position: 'relative', }}>
                        <img src={rect1} style={{ width: '692px', height: '532px', marginLeft: '26px', marginLeft: '125.5px', borderRadius: '10px' }} />
                        <div >
                            <p className="per21" style={{ position: 'absolute', top: '5%', left: "20%", fontSize: '14px', lineHeight: '20px', fontWeight: '600', alignSelf: 'center' }}>UP TO 80% OFF</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: 'column' }}>
                            <p style={{ position: 'absolute', top: '65%', left: '20%', color: '#fff', fontWeight: '600', fontSize: '36px' }}>Shops from popular<br />Collection</p>
                        </div>

                        <div className="shopnow" style={{ position: 'absolute', top: '74%', left: '75%' }} >
                            <p style={{ marginLeft: '18px', }}>Shop Now</p>
                            <img src={arrow2} alt="arrpow" style={{ width: '9.63px', height: '19px', marginTop: '16.1px', marginLeft: '20px' }} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <img src={rect2} style={{ marginLeft: '20px', width: '484px', height: '250px', borderRadius: "10px", marginBottom: '30px' }} />
                        <div >
                            <p className="per20" style={{ position: 'absolute', top: '25%', left: "10%", fontSize: '14px', lineHeight: '20px', fontWeight: '600', alignSelf: 'center' }}>UP TO 20% OFF</p>
                            <p style={{ position: 'absolute', top: '38%', color: '#ffffff', left: "10%", fontSize: '28px', fontWeight: '600' }}>Fresh Tomatoes from<br />the farm</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <img src={rect3} style={{ marginLeft: '20px', width: '484px', height: '250px', borderRadius: "10px", marginBottom: '30px' }} />
                        <div >
                            <p className="per20" style={{ position: 'absolute', top: '25%', left: "10%", fontSize: '14px', lineHeight: '20px', fontWeight: '600', alignSelf: 'center' }}>UP TO 20% OFF</p>
                            <p style={{ position: 'absolute', top: '38%', color: '#ffffff', left: "10%", fontSize: '28px', fontWeight: '600' }}>Fresh Tomatoes from<br />the farm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lastdiv" style={{ display: 'flex' }}>
                <p className="txt">Popular</p>
                <div className="view">
                    <NavLink to={'/'}> <p style={{ marginLeft: '15px', lineHeight: '10px', fontWeight: '500', fontSize: '14px', color: '#667185' }}>View more </p></NavLink>
                    <img src={iconn8} style={{ width: "14.25px", height: "7.22px", marginTop: '17px', marginLeft: '9.8px' }} />
                </div>
            </div>
            <div className="pics" style={{ display: 'flex' }}>
                <div style={{ marginLeft: '120px', }}>
                    <img src={rice} style={{ borderRadius: '6px', width: '300.68px', height: '276px' }} />
                    <div style={{ display: 'flex' }}>
                        <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                        <p style={{ marginLeft: '150px' }}>
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
                <div style={{ marginLeft: '18px', }}>
                    <img src={beans} style={{ borderRadius: '6px', width: '290.25px', height: '274px' }} />
                    <div style={{ display: 'flex' }}>
                        <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                        <p style={{ marginLeft: '140px' }}>
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
                <div style={{ marginLeft: '18px', }}>
                    <img src={g4} style={{ borderRadius: '6px', width: '280.68px', height: '276px' }} />
                    <div style={{ display: 'flex' }}>
                        <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                        <p style={{ marginLeft: '160px' }}>
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
                <div style={{ marginLeft: '18px', }}>
                    <img src={efo} style={{ borderRadius: '6px', width: '280.68px', height: '276px' }} />
                    <div style={{ display: 'flex' }}>
                        <p style={{ fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>Court Heels</p>
                        <p style={{ marginLeft: '139px' }}>
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
            <div style={{ marginLeft: '120px' }}>
                <img src={frame001} style={{ width: '1216px', height: '245px', marginTop: '80px', paddingBottom: '150px' }} />
                <p style={{ fontWeight: '600', fontSize: '12px', color: '#667185' }}>LIKE WHAT YOU SEE?</p>
                <p style={{ fontWeight: '700', fontSize: '28px', color: '#101928', marginTop: '1px' }}>Let's work together </p>
                <p style={{ fontWeight: '400', fontSize: '16px', color: '#667185', marginTop: '-10px' }}>If you'r looking for a kick product design<br />agency, were here to help!</p>
                <div className="strLine"></div>
                <div className="finaldiv">
                    <img src={fb} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={twitter} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={ig} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={inl} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px', marginRight: '365.25px' }} />
                    <p style={{ fontWeight: '400', fontSize: '14px', color: '#98A2B3', marginRight: '454.75px' }}>2023 Rayna. All rights reserved.</p>
                    <img src={frameM} alt="icon2" style={{ alignSelf: "center", width: '27.52px', height: "27.52px", marginLeft: "112px", color: "#2F945C", marginTop:'30px' }} />
                </div>
            </div>
        </div>
    )

};

export default App;