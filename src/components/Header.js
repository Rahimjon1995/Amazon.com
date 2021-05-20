// import React from 'react';
import React, { useState } from 'react';
import '../styles/Header.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import UsaFlag from '../assets/united-states.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Card from '../assets/cart.svg';
import { Link } from 'react-router-dom';
import Header_bottom from './Header_bottom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useStateValue } from "../StateProvider";
import '../responsive/HeaderResponsive.css';


function Header() {
  const [basket, dispatch] = useStateValue({});
  const [user] = useStateValue({});
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    const [showUp, setshowUp] = useState(false);
    
    const showTheLanguageBar = (e) => {
    const languageBar = document.querySelector('.language_bar');
    // const language = document.querySelector('.language');
        if(!showUp){
            languageBar.classList.add("active");
            // language.style.border = "1px solid #fff"
        } else{
            console.log("done");
        }
        setshowUp(true)

    }

    const hideTheLanguageBar = (e) => {
    const languageBar = document.querySelector('.language_bar');
    // const language = document.querySelector('.language');

        if(showUp){
            languageBar.classList.remove("active");
            // language.style.border = "none"

            setshowUp(false)
        } else {
            console.log("done")
        } 
        
    }
   
    const createLine = (e) => {
        if(!showUp){
            e.target.parentElement.classList.add("createLine");
            setshowUp(true)
        } else{
            e.target.parentElement.classList.remove("createLine");
            setshowUp(false)
        }
    }


    const [accountUp, setaccountUp] = useState(false);
    
    const showTheAccountBar = (e) => {
    const accountBar = document.querySelector('.account_onMouse');
        if(!accountUp){
            accountBar.classList.add("active");
           
        } else{
            console.log("done");
        }
        setaccountUp(true)

    }

    const hideTheAccountBar = (e) => {
        const accountBar = document.querySelector('.account_onMouse');
        if(accountUp){
            accountBar.classList.remove("active");


            setaccountUp(false)
        } else {
            console.log("done")
        } 
        
    }
   
    
  
    
    
    return (
     <div>
          <div className="Header_wrapper">
              <div className="Header">
         <Link to="/"> <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon_logo"/></Link>   

          <div className="delivery_wrapper">
               <LocationOnOutlinedIcon className="loc_icon"/>

               <div className="deliver">
                   <span>Delivery to</span>
                    <h4>Uzbekistan</h4>
               </div>
          </div>  
        <div className="search_bar">
            <select name="" id="category">
                <option value="all">All</option>
                <option value="Clothes">Clothes</option>
                <option value="Smartphones">Smartphones</option>
                <option value="Laptops">Laptops</option>
                <option value="Watches">Watches</option>
            </select>
            <input type="search"  id="search" onClick={createLine}/>
            <div className="search_icon">
                <SearchOutlinedIcon style={{fontSize: '30px'}} className="sear_icon"/>
            </div>
        </div>
        <div className="account">
            <div className="language" onMouseEnter={showTheLanguageBar} onMouseLeave={hideTheLanguageBar}>
                <img src={UsaFlag} alt="" className="lang_img"/>
                <ArrowDropDownIcon/>
                <div className="language_bar" >
                    <FormControl component="fieldset">
      <FormLabel component="legend">English</FormLabel>
      <RadioGroup aria-label="English" name="language" value={value} onChange={handleChange}>
        <FormControlLabel value="language" control={<Radio />} label="English" />
      <FormLabel component="legend">Russkiy</FormLabel>
        <FormControlLabel value="russkie" control={<Radio />} label="Russkie" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
                </div>
                  
            </div>
           <Link to="/login" className="link_style">
           <div className="sign_in_out" onMouseEnter={showTheAccountBar} onMouseLeave={hideTheAccountBar}>
               <div className="sign">
               <span>Hello, {user?.user?.user?.user ? user?.user?.user?.user?.email : "sign In"}</span>
                <h4>Account & Lists</h4>
               </div>
               <ArrowDropDownIcon/>
               <div className="account_onMouse">

</div>
            </div>
           </Link>
          
            <div className="orders">
               <span>Returns</span>
                <h4>&Orders</h4>
               </div>
           
         <Link to="/cart" className="link_style">
         <div className="card">
                <div className="counter"><span>{basket.basket?.length}</span></div>
                <img src={Card} alt="" className="card_img"/>
                <h4>Cart</h4>
            </div>
         </Link>

           
        </div>
        
        </div>
        <div className="Header_bottom">
       <Header_bottom/>
        </div>
      </div>

        

     </div>
    )
}

export default Header
