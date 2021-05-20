import React from 'react';
import '../styles/Header_bot.css';
import MenuIcon from '@material-ui/icons/Menu';
import LeftNavbar from './LeftNavbar';
import { Link } from 'react-router-dom';
import '../responsive/Header_bot_respon.css';

function Header_bottom() {
    const openNavbar = (e) =>{
            document.body.style.overflow = "hidden";
        let openNavbar = document.getElementById("left_navbar").style.display = "flex";
          
     }

    return (
        <div className="header_bot">
           <div className="container">
            <div className="All" onClick={openNavbar}>
            <MenuIcon/>
            <p>All</p>
            </div>

            <div className="menu_ul">
                <ul>
                   <Link to="/today"><li>Today's Deals</li></Link>
                    <Link to="/customer"><li>Customer Service</li></Link>
                    <Link to="/giftcards"><li>Gift Cards</li></Link>
                    <Link to="/registry"><li>Registry</li></Link>
                    <Link to="/sell"><li>Sell</li></Link>

                </ul>
            </div>
            <div className="amazon_covid">
                <h4>Amazon's response to Covid-19</h4>
            </div>
           </div>
            <LeftNavbar id="left_navbar"/>
        </div>
        
    )
}

export default Header_bottom
