import React from 'react';
import image100 from './assets/image100.png';
import seeicon from './assets/seeicon.png';
import googlee from "./assets/downloa1d.png";
import twitterr from "./assets/download.png";
import { NavLink } from 'react-router-dom';

function App() {
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <img src={image100} style={{ width: '700px', height: '1024px' }} />
            </div>
            <div style={{ marginLeft: '113px', marginTop: '235px' }}>
                <p style={{ fontSize: '36px', fontWeight: '600', }}>Welcome back!</p>

                <div>
                    <p style={{ fontSize: '14px', fontWeight: '400', color: '#645D5D', marginTop: '-25px' }}>
                        Don't have an account?{' '}
                        <NavLink to="/signup">
                            <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                                <span style={{ fontWeight: '600', color: '#2F945C' }}>Sign up</span>
                            </button>
                        </NavLink>
                    </p>
                </div>

                <div style={{ display: 'block', marginTop: '30px' }}>
                    <p style={{ fontWeight: '500', fontSize: '14px', color: '#101928' }}>Email address</p>
                    <input className='input77' style={{ marginLeft: '0px', marginTop: '-10px', backgroundColor: '#FBFEFC', height: '50px' }} />
                    <p style={{ fontWeight: '500', fontSize: '14px', color: '#101928' }}>Password</p>
                    <input className='input77' style={{ marginLeft: '0px', marginTop: '-10px', backgroundColor: '#FBFEFC', height: '50px' }} />
                    <img style={{ position: 'absolute', left: '76.5%', marginTop: '7px' }} src={seeicon} />

                    <div style={{ textAlign: 'center', lineHeight: '50px', borderRadius: '6px', fontSize: '16px', width: '383px', marginTop: '30px', height: '56px', backgroundColor: '#2F945C', color: '#ffffff', fontWeight: '600', fontSizeAdjust: '16px' }}>
                        <NavLink to="/loginsuccess">
                            <button style={{ border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}>
                                <p style={{color:'#fff'}}>Login</p>
                            </button>
                        </NavLink>
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: '400px', marginLeft: '117.5px', marginTop: '20px' }}>Forgot Password?<span style={{ fontWeight: '600', color: '#2F945C' }}> Recover</span></p>
                    <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'space-between', }}>
                        <p className='divine' style={{ flexGrow: '1', marginTop: '30px', border: '1px solid #F0F2F5' }}></p>
                        <p style={{ padding: '0 10px', marginLeft: '25px' }}>Or</p>
                        <p className='divine' style={{ marginLeft: '30px', flexGrow: '1', padding: '0 10px', marginTop: '30px', border: '1px solid #F0F2F5' }} ></p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className='google' style={{ display: "flex" }}>
                            <img src={googlee} style={{ marginLeft: "50px", height: "40px", marginTop: "10px" }} />
                            <p style={{ fontSize: "16px", marginLeft: "8px", fontWeight: '600' }}>Google</p>
                        </div>
                        <div className='twitter' style={{ display: "flex" }}>
                            <img src={twitterr} style={{ marginLeft: "50px", height: "30px", marginTop: "20px", width: '20px', height: '19.25px' }} />
                            <p style={{ fontSize: "16px", marginLeft: '8px', fontWeight: '600' }}>Twitter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
