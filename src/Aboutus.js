import React from "react";
import './aboutus.css';
import icon1 from './assets/Icon-left.png';
import icon8 from "./assets/icon8.jpg";
import vector from "./assets/Vector 1.png";
import search from './assets/search.png';
import stgreen from "./assets/1stgreen.png";
import white from "./assets/white.png";
import ndgreen from "./assets/2ndgreen.png";
import icon3 from "./assets/heart.jpg";
import icon4 from "./assets/icon.jpg";
import frameM from "./assets/Frame 427321331.png";
import office from './assets/office.png';
import veggies from './assets/veggies.png';
import avater1 from './assets/Avatar1.png';
import avater2 from './assets/Avatar2.png';
import avater3 from './assets/Avatar3.png';
import avater4 from './assets/Avatar4.png';
import Ltwitter from './assets/Ltwitter.png';
import Lin from './assets/Lin.png';
import Lball from './assets/Lball.png';
import fb from './assets/fb.png'
import ig from "./assets/ig.png";
import inl from './assets/in.png';
import twitter from './assets/twittter.png';
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
                        <p style={{ marginTop:'35px', marginLeft: "100px", fontWeight: '600', alignSelf: "center", fontSize: '16px', color:'#2F945C' }}>About us</p>
                    </button>
                </NavLink>

                <NavLink to={'/contactus'}>
                    <button className="buttonz">
                         <p style={{ marginTop: "15px", marginLeft: "60px", fontWeight: '600', alignSelf: "center", fontSize: '16px', marginTop:'35px' }}>Contacts</p>
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
            <div style={{ display: 'block' }}>
                <div style={{ width: '1440px', height: '342px', marginTop: '60px' }}>
                    <p style={{ color: '#2F945C', fontSize: '16px', fontWeight: '600', marginLeft: '720px' }}>About us</p>
                    <p style={{ color: '#101828', fontSize: '48px', fontWeight: '600', marginLeft: '534px', marginTop: '-1px' }}>About the company</p>
                    <p style={{ fontWeight: '400', color: '#667085', fontSize: '20px', marginLeft: '500px', marginTop: '-29px' }}>Learn more about the company and the team behind it. </p>
                </div>
                <div style={{ display: 'flex', backgroundColor: '#F9FAFB', marginTop: '-118px' }}>
                    <div>
                        <img src={office} style={{ width: '560px', height: '560px', paddingTop: '90px', paddingLeft: '112px', paddingBottom: '70px' }} />
                    </div>
                    <div style={{ display: 'block' }}>
                        <div style={{ paddingTop: '90px', marginTop: '30px', paddingLeft: '96px' }}>
                            <p style={{ color: '#2F945C', fontSize: '14px', fontWeight: '600', }}>We've helped hundreds of users get their daily needs</p>
                            <p style={{ fontWeight: '600', fontSize: '48px', marginTop: '-10px', }}>We're only just getting<br />started on out journey</p>
                        </div>
                        <div style={{ display: 'flex', paddingLeft: '96px', marginTop: '-50px', paddingBottom: '70px' }}>
                            <div style={{ display: 'block' }}>
                                <p style={{ fontWeight: '600', fontSize: '60px', color: '#2F945C', marginRight: '140px' }}>400+</p>
                                <p style={{ fontWeight: '500', fontSize: '18px', marginTop: '-55px' }}>Order completed</p>
                                <p style={{ fontWeight: '600', fontSize: '60px', color: '#2F945C', marginRight: '140px', marginTop: '30px' }}>10k</p>
                                <p style={{ fontWeight: '500', fontSize: '18px', marginTop: '-55px' }}>Revenue generated</p>
                            </div>
                            <div style={{ display: 'block', }}>
                                <p style={{ fontWeight: '600', fontSize: '60px', color: '#2F945C' }}>600%</p>
                                <p style={{ fontWeight: '500', fontSize: '18px', marginTop: '-55px' }}>Return on investment</p>
                                <p style={{ fontWeight: '600', fontSize: '60px', color: '#2F945C', marginTop: '30px' }}>200+</p>
                                <p style={{ fontWeight: '500', fontSize: '18px', marginTop: '-55px' }}>5-star review</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ backgroundColor: '#FBFEFC', paddingTop: '70px' }}>
                            <img src={veggies} style={{ width: '634px', height: '486px', borderRadius: '20px', marginLeft: '89px', paddingTop: '20px' }} />
                        </div>
                        <div>
                            <p style={{ color: '#2F945C', fontWeight: '650', fontSize: '48px', marginTop: '70px', marginLeft: '60px' }}>Our vision</p>
                            <p style={{
                                marginTop: '-36px', marginLeft: '60px', fontWeight: '500', color: '#454773', fontSize: '20px'
                            }}>"To be leading finacial solutions provider in<br />Africa by consistently delivering excellent services<br />through an arm's length distribution of merchants<br />agents and channels."</p>
                            <div className="getstarted">
                                <p>Get started</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop:'60px'}}>
                        <div>
                            <p style={{ color: '#2F945C', fontWeight: '650', fontSize: '48px', marginTop: '70px', marginLeft: '60px' }}>Our mission</p>
                            <p style={{
                                marginTop: '-36px', marginLeft: '60px', fontWeight: '500', color: '#454773', fontSize: '20px'
                            }}>"To be the Partner of choice for the provision of<br/>excellent financial services to the unbanked and undernanked in Africa, while delivering superior<br/>and sustainable value topur shareolders.<br/>employees and the communities we exist in. </p>
                            <div className="getstarted">
                                <p>Get started</p>
                            </div> 
                        </div>
                                <div style={{ backgroundColor: '#FBFEFC', paddingTop: '70px', marginRight:'60px'}}>
                            <img src={veggies} style={{ width: '634px', height: '486px', borderRadius: '20px', marginLeft: '89px', paddingTop: '20px' }} />
                        </div>
                    </div>
                </div>
                <div style={{display:'block', width:'1440px', height:'932px', paddingTop:'70px'}}>
                        <p style={{paddingTop:'98px',marginLeft:'650px', fontWeight:'600', fontSize:'36px'}}>Meet our team</p>
                        <p style={{fontWeight:'400', fontSize:'20px', color:'#667085', marginLeft:'450px'}}>Our philosophy is simple --hire a team of diverse, passionate people and foster<br/><span style={{marginLeft:'140px'}}>a culure that empowers you to do your best work.</span></p>
                </div>
                <div style={{display:'flex'}}>
                    <div className="info" style={{display:'block',}}>
                            <img src={avater1} style={{marginTop:'30px'}}/>
                            <p style={{color:'#101828',fontWeight:'600', fontSize:'18px', marginLeft:'-10px'}}>Olivia Rhye</p>
                            <p style={{color:'#2F945C',fontWeight:'400', fontSize:'16px', marginLeft:'-20px', marginTop:'-19px'}}>Founder & CEO</p>
                            <p style={{color:'#667085',fontWeight:'400', fontSize:'16px', marginLeft:'-15px', marginTop:'-10px',}}>Former co-founder of<br/><span style={{marginLeft:'-10px', marginTop:'10px',}}>Opendoor.</span> Early staff at<br/>Spotify and Clearbit.</p>
                            <img src={Ltwitter} style={{width:'20px', height:'16.25px', marginRight:'10px', marginLeft:'-20px', marginTop:'-10px'}}/>
                            <img src={Lin} style={{width:'20px', height:'20px', marginRight:'10px'}}/>
                            <img src={Lball} style={{width:'20px', height:'20px'}}/>
                    </div>
                    <div className="info" style={{display:'block', marginLeft:'32px'}}>
                            <img src={avater2} style={{marginTop:'30px'}}/>
                            <p style={{color:'#101828',fontWeight:'600', fontSize:'18px', marginLeft:'-10px'}}>Phoenix Baker</p>
                            <p style={{color:'#2F945C',fontWeight:'400', fontSize:'16px', marginLeft:'-20px', marginTop:'-19px'}}>Engineering Manager</p>
                            <p style={{color:'#667085',fontWeight:'400', fontSize:'16px', marginLeft:'-30px', marginTop:'-10px',}}>Lead Engineering teams at<br/><span style={{marginTop:'10px',}}>Figma, Pitch and protocol</span><br/>Labs</p>
                            <img src={Ltwitter} style={{width:'20px', height:'16.25px', marginRight:'10px', marginLeft:'-10px'}}/>
                            <img src={Lin} style={{width:'20px', height:'20px', marginRight:'10px'}}/>
                            <img src={Lball} style={{width:'20px', height:'20px'}}/>
                    </div>
                    <div className="info" style={{display:'block', marginLeft:'32px'}}>
                            <img src={avater3} style={{marginTop:'30px'}}/>
                            <p style={{color:'#101828',fontWeight:'600', fontSize:'18px', marginLeft:'-10px'}}>Lana Steiner</p>
                            <p style={{color:'#2F945C',fontWeight:'400', fontSize:'16px', marginLeft:'-20px', marginTop:'-19px'}}>Product Manager</p>
                            <p style={{color:'#667085',fontWeight:'400', fontSize:'16px', marginLeft:'-30px', marginTop:'-10px',}}>Former PM for Linear, Lambda<br/><span style={{marginLeft:'-10px', marginTop:'10px',}}>School, and On Deck</span></p>
                            <img src={Ltwitter} style={{width:'20px', height:'16.25px', marginRight:'10px', marginLeft:'-10px'}}/>
                            <img src={Lin} style={{width:'20px', height:'20px', marginRight:'10px'}}/>
                            <img src={Lball} style={{width:'20px', height:'20px'}}/>
                    </div>
                    <div className="info" style={{display:'block', marginLeft:'32px'}}>
                            <img src={avater4} style={{marginTop:'30px'}}/>
                            <p style={{color:'#101828',fontWeight:'600', fontSize:'18px', marginLeft:'-10px'}}>Demi Wilkinson</p>
                            <p style={{color:'#2F945C',fontWeight:'400', fontSize:'16px', marginLeft:'-20px', marginTop:'-19px'}}>Fontend Developer</p>
                            <p style={{color:'#667085',fontWeight:'400', fontSize:'16px', marginLeft:'-30px', marginTop:'-10px',}}>Former frontend dex for<br/><span style={{marginLeft:'-10px', marginTop:'10px',}}> Linear, CoinBase, and</span><br/>Postscript.</p>
                            <img src={Ltwitter} style={{width:'20px', height:'16.25px', marginRight:'10px', marginLeft:'-10px'}}/>
                            <img src={Lin} style={{width:'20px', height:'20px', marginRight:'10px'}}/>
                            <img src={Lball} style={{width:'20px', height:'20px'}}/>
                    </div>
                </div> 
            </div>
            <div style={{ marginTop: '100px', backgroundColor: '#F9FAFB' }}>

                <p style={{ fontWeight: '600', fontSize: '12px', color: '#667185', marginLeft: '120px', paddingTop:'80px'}}>LIKE WHAT YOU SEE?</p>
                <p style={{ fontWeight: '700', fontSize: '28px', color: '#101928', marginTop: '1px', marginLeft: '120px' }}>Let's work together </p>
                <p style={{ fontWeight: '400', fontSize: '16px', color: '#667185', marginTop: '-10px', marginLeft: '120px',paddingBottom:'20px'}}>If you're looking for a kick-ass product design ,<br />were here to help!</p>
                <div className="strLine" style={{marginLeft:'120px', marginTop:'40px', width:'1320px'}}></div>
                <div className="finaldiv" style={{ marginLeft: '120px', marginTop:'10px'}}>
                    <img src={fb} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={twitter} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={ig} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px' }} />
                    <img src={inl} style={{ width: '24px', height: '24px', marginRight: '24px', marginTop: '15px', marginRight: '365.25px' }} />
                    <div style={{display:'flex'}}>
                        <div style={{border:'1px solid #98A2B3', borderRadius:'50%', width:'10px', height:'10px', marginTop:'18px', marginRight:'6px', textAlign:'center', justifyContent:'center'}}><p style={{marginTop:'-6px', color:'#98A2B3', fontSize:'10px', lineHeight:'22px'}}>c</p></div>
                    <p style={{ fontWeight: '400', fontSize: '14px', color: '#98A2B3', marginRight: '454.75px' }}>. All rights reserved.</p></div>
                    <img src={frameM} alt="icon2" style={{ alignSelf: "center", width: '27.52px', height: "27.52px", marginLeft: "112px", color: "#2F945C", marginTop: "px" }} />
                </div>
            </div>
        </div>
    );
}

export default App;