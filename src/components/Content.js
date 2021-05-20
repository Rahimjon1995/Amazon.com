import React, { useState } from "react";
import "../styles/Content.css";
import UpperProduct from "./UpperProduct";
import AllContent from "./AllContent";
import { Link } from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import UsaFlag from '../assets/united-states.svg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../responsive/Content-respons.css';

function Content({ data, allContent }) {
  const leftAnimat = (e) => {
    
    const animate = document.querySelector('.discover_iconcs');
    const animateOverflow = document.querySelector('.discover_Amazon');
    animate.animate({
      transform: ['translateX(70px)']
    }, 1000);
    animateOverflow.style.overflow = 'hidden';
  };
  
  const rightAnimat = (e) => {
    
    const animate = document.querySelector('.discover_iconcs');
    const animateOverflow = document.querySelector('.discover_Amazon');
    animate.animate({
      transform: ['translateX(-70px)']
    }, 1000);
    animateOverflow.style.overflowX = 'hidden';
  };
 
  const [discoverHover, setdiscoverHover] = useState(false);
    
  const discoverEnterHover = (e) => {
    const discoverButon = document.querySelector('.button_discover_left');
    const discoverButon2 = document.querySelector('.button_discover_right');
      if(!discoverHover){
        discoverButon.classList.add("flex");
        discoverButon2.classList.add("flex");
         
      } else{
          console.log("done");
      }
      setdiscoverHover(true)

  }

  const discoverLeaveHover = (e) => {
    const discoverButon = document.querySelector('.button_discover_left');
    const discoverButon2 = document.querySelector('.button_discover_right');
        if(discoverHover){
          discoverButon.classList.remove("flex");
          discoverButon2.classList.remove("flex");
        
            setdiscoverHover(false)
        } else{
            console.log("done");
        }
  
    }
  
    

  return (
    <div className="content_wrapper">
      <div className="content_wrapper_top">
         {data.map((everyProduct) => {
            return (
              <UpperProduct
                key={everyProduct.id}
                title={everyProduct.title}
                img={everyProduct.image}
              />
            );
          })}
          <div className="sign_in_for ">
            <div className="sign_in_for_the_best">
              <strong>
                <h1>Sign in for the best</h1> <h1>experience</h1>
              </strong>
              <button type="submit">Sign in securely</button>
            </div>
            <div className="we_ship_over">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
                alt=""
              />
            </div>
          </div>
        
          {allContent.map((everyConProduct) => {
            return (
              <AllContent
                key={everyConProduct.id}
                title={everyConProduct.title}
                img={everyConProduct.image}
              />
            );
          })}
          
      </div>

      <div className="discover_Amazon" onMouseEnter={discoverEnterHover} onMouseLeave={discoverLeaveHover}>
          <div className="dicover_text">
              <h1>Discover Amazon</h1> <p>Click to learn more</p>
          </div><button className="button_discover_left" onClick={leftAnimat}><ArrowBackIosIcon/></button>
          <div className="discover_iconcs">
              
              <div className="discover_iconcs_icon">
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png" alt="" />
              </div>
           
              <div className="discover_iconcs_icon">
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg" alt="" />
              </div>

              <div className="discover_iconcs_icon">
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg" alt="" />
              </div>

              <div className="discover_iconcs_icon">
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg" alt="" />
              </div>

              <div className="discover_iconcs_icon">
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg" alt="" />
              </div>

              <div className="discover_iconcs_icon">
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg" alt="" />
              </div>
             
          </div>
          <button className="button_discover_right" onClick={rightAnimat}><ArrowForwardIosIcon/></button>
      </div>
      
      <div className="img_content_shopping">
          <div className="comfy_styles">
              <h1>Comfy styles for her</h1>
              <div className="comyf_styles_img">
              <div className="cardigans">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg" alt="" />
                <p>Sweartshirts</p>
              </div>
              <div className="cardigans">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg" alt="" />
                <p>Joggers</p>
              </div>
              <div className="cardigans">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg" alt="" />
                <p>Cardigans</p>
              </div>
              <div className="cardigans">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg" alt="" />
                <p>Easy tees</p>
              </div>
              </div>
              <p>See more</p>
          </div>
          <div className="img_content_shop_explore">
              <h1>Shop Laptops & Tablets</h1>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg" alt="" />
              <p>See more</p>
          </div>
          <div className="img_content_shop_explore">
              <h1>Explore home bedding</h1>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg" alt="" />
              <p>See more</p>
          </div>
          <div className="img_content_shop_explore">
              <h1>Create with strip lights</h1>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg" alt="" />
              <p>Shop now</p>
          </div>
      </div>

      
    </div>
  );
}

export default Content;
