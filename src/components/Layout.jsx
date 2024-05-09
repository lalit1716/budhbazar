import React, { useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import ProductContext from '../Context/ProductContext/ProductContext';


const Layout =()=> {
    const {CartItem}= useContext(ProductContext)
    
    return(
        <>
        <nav id='nav'>
            <div className='nav-div'>
                <img src='/images/download (2).png' alt='Error' />
            </div>
            <div className='nav-div nav-option'>
                <div><Link className="navLink" to="/">Home</Link></div>
                <div><Link className="navLink" to="/Aboute">About</Link></div>
                <div><Link className="navLink" to="/Contact">Contact</Link></div>
                <div><Link className="navLink" to="/Cart">Cart<sup style={CartItem.length>0?{display:'inline'}:{ display:'none'}}>{CartItem.length}</sup></Link></div>
                
            </div>
        </nav>

        <Outlet />
        </>
    )
};

export default Layout;