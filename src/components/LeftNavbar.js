import React from 'react'
import '../styles/LeftNavbar.css'
import ClearIcon from '@material-ui/icons/Clear';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import LanguageIcon from '@material-ui/icons/Language';
import UsaFlag from '../assets/united-states.svg';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useStateValue } from "../StateProvider";



function LeftNavbar() {
    
 
    document.body.addEventListener('click', () => {
        document.body.style.overflow = "scroll";
    });
    const [user] = useStateValue({});
  
     const remove_icon = (e) =>{
         let close = document.getElementById("left_navbar");
         close.style.display = "none";
        document.body.style.overflow = "scroll";
        
     }
     
     const amazon_music = (e) => {
         let open_amazon_music = document.querySelector('.amazon_music');
         open_amazon_music.style.display = "block";
         let close_all_list = document.querySelector('.left_navbar_product_ul_list');
          close_all_list.style.display = "none";
     }
     const closeMusic = (e) => {
         let open_nav_music = document.querySelector('.left_navbar_product_ul_list');
         open_nav_music.style.display = "block";
         let close_nav_music = document.querySelector('.amazon_music');
         close_nav_music.style.display = "none";
     }

     const seeAllClick = (e) => {
         let closeSeeAll = document.querySelector('#see_all_none_block');
          closeSeeAll.style.display = "none";
         let openSeeAll = document.querySelector('.see_All');
         openSeeAll.style.display ="block";

        
     }

     const seLessClick = (e) => {
        let openSeeAll = document.querySelector('.see_All');
        openSeeAll.style.display = "none";
        let closeSeeAll = document.querySelector('#see_all_none_block');
        closeSeeAll.style.display = "flex";


     }

     const seeAllClick2 = (e) => {
         let closeSeeAll2 = document.querySelector('#see_all_none_block2');
         closeSeeAll2.style.display = "none";
         let openSeeAll2 = document.querySelector('.see_all2');
         openSeeAll2.style.display = "block";
     }

     const seeLessClick2 = (e) => {
         let openSeeAll2 = document.querySelector('.see_all2');
         openSeeAll2.style.display = "none";
         let closeSeeAll2 = document.querySelector('#see_all_none_block2');
         closeSeeAll2.style.display = "flex";
     }
     
    return (
        <div>
            <div id="left_navbar" >
                <div className="left_navbar_navigation">
                    
                       <div className="top_content_container">
                       <AccountCircleIcon id="navbar_profile_account"/>
                        <h4 className="hello">Hello, {user?.user?.user?.user ? user?.user?.user?.user?.email : "sign In"}</h4>
                       </div>
                     <div className="left_navbar_product_list">
                        <ul className="left_navbar_product_ul_list">
                            <li id="left_navbar_navigation_product_name"><h2>Digital Content & Devices</h2> </li>
                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>Amazon Music  <KeyboardArrowRightIcon/></li>

                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>Kindle E-readers & Books <KeyboardArrowRightIcon/> </li>

                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>Appstore for Android <KeyboardArrowRightIcon/> </li>

                            <li id="left_navbar_navigation_container_li_border"></li>

                            <li id="left_navbar_navigation_product_name"><h2>Shop By Department</h2> </li>    

                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>Electronics <KeyboardArrowRightIcon/> </li>

                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>Computers <KeyboardArrowRightIcon/> </li>

                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>Smart Home <KeyboardArrowRightIcon/> </li>

                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>Art & Crafts <KeyboardArrowRightIcon/> </li>

                            <li id="see_all_none_block" onClick={seeAllClick}>See All <ExpandMoreIcon/></li>
                                
                        <div className="see_All">
                           <ul className="see_all_product_ul_list">
                                                       
                            <li id="left_navbar_navigation_container_li_border"></li>
                            
                           <Link to="/link" className="link_style color_black"> <li id="left_navbar_navigation_container_li">Automotive <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Baby <KeyboardArrowRightIcon/></li></Link>
                            
                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Beauty and personalr care <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Women's Fashion <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Men's Fashion <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Girls' Fashion <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Boys' Fashion  <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Health and Household <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Home and Kitchen <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Industrial and Scientific  <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Luggage <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Movies & Television <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Pet supplies <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Software <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Sports and Outdoors <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Tools & Home Improvement <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Toys and Games <KeyboardArrowRightIcon/></li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Video Games <KeyboardArrowRightIcon/></li></Link>

                            <li id="see_all_none_block" onClick={seLessClick}>See Less <ExpandLessIcon/></li>
                                              

                           </ul>
                        </div>

                            <li id="left_navbar_navigation_container_li_border"></li>

                            <li id="left_navbar_navigation_product_name"><h2>Programs & Features</h2> </li>    

                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>Gift Cards <KeyboardArrowRightIcon/> </li>

                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>#FoundltOnAmazon <KeyboardArrowRightIcon/> </li>

                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>Amazon Live <KeyboardArrowRightIcon/> </li>

                            <li id="left_navbar_navigation_container_li" onClick={amazon_music}>International Shopping <KeyboardArrowRightIcon/> </li>

                           <li id="see_all_none_block2" onClick={seeAllClick2} >See All <ExpandMoreIcon/> </li>
                                <div className="see_all2">
                                    <ul className="see_all_product_ul_list">
                                  
                                    <li id="left_navbar_navigation_container_li_border"></li>
                                   
                                    <Link to="/link" className="link_style color_black"> <li id="left_navbar_navigation_container_li">Amazon Second Chance</li></Link>
                                   
                                    <li id="see_all_none_block2" onClick={seeLessClick2}>See Less <ExpandLessIcon/></li>

                                    </ul>
                                </div>

                            <li id="left_navbar_navigation_container_li_border"></li>

                            <li id="left_navbar_navigation_product_name"><h2>Help & Settings</h2> </li>   

                            <li id="left_navbar_navigation_container_li">Your Account </li>

                            <li id="left_navbar_navigation_container_li_globus"><LanguageIcon/> <p>English</p> </li>

                            <li id="left_navbar_navigation_container_li_flage_usa"><img src={UsaFlag} alt=""/> <p>United States</p> </li>

                            <li id="left_navbar_navigation_container_li">Customer Service </li>

                            <Link to="/login" className="link_sign_out"><li id="left_navbar_navigation_container_li">Sign Out </li></Link>



                        </ul>

                        <div className="amazon_music">
                           <ul className="left_navbar_product_ul_list">
                            <li id="left_navbar_navigation_container_li_main_menu" onClick={closeMusic}><NavigateBeforeIcon/> <p>MAIN MENU</p> </li>
                            
                            <li id="left_navbar_navigation_container_li_border"></li>
                            
                            <li id="left_navbar_navigation_product_name"><h2>Stream Music</h2> </li>   

                           <Link to="/link" className="link_style color_black"> <li id="left_navbar_navigation_container_li">Amazon Music Unlimited </li></Link>

                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Amazon Music HD </li></Link>
                            
                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Amazon Music Prime </li></Link>

                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Podcasts </li></Link>

                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Open Web Player </li></Link>

                            <li id="left_navbar_navigation_container_li_border"></li>

                            <li id="left_navbar_navigation_product_name"><h2>Buy Music</h2> </li>  

                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">CDs & Vinyl </li></Link>

                            <Link to="/link" className="link_style color_black"><li id="left_navbar_navigation_container_li">Download Store </li></Link>

                            <Link to="/" className="link_style color_black"><li id="left_navbar_navigation_container_li">Artist Merch Shop </li></Link>





                           </ul>
                        </div>
                    
                     </div>


                    
                </div>
                <div className="remove_icon" onClick={remove_icon}>
                    <ClearIcon id="cler_iconcs"/>
                </div>
            </div>
            {/* <AmazonMusic id="amazonMusic"/> */}

        </div>
    )
}

export default LeftNavbar
