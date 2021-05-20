import React from 'react';
import '../styles/Footer.css';
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import UsaFlag from '../assets/united-states.svg';
import { BackTop } from 'antd';
import { Link } from 'react-router-dom';
import TelegramIcon from '@material-ui/icons/Telegram';
import '../responsive/Footer_respons.css';

function Footer() {
    return (
        <div className="footer_wrapper">
           <div className="sign_in_to">
          <div className="sign_in_to_top_content"></div>
          <div className="sign_in_to_center_content">
            <button type="submit" className="sign_button">Sign in to see personalized recomendations</button>
          </div>
          <div className="sign_in_to_bottom_content">
            <button className="back_to_top_button"><BackTop>Back to top</BackTop></button>
          </div>
      </div>
      <div className="footer_top_content">
        <div className="footer_top_content_top_div">
          <ul><h3>Get to Know Us</h3>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Tours</li>

          </ul>

          <ul><h3>Make Money with Us</h3>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon </li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>See More Make Money with Us</li>

          </ul>

          <ul><h3>Amazon Payment Products</h3>
              <li>Amazon Business</li>
              <li>Shop with Points </li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>

          </ul>

          <ul><h3>Let Us Help You</h3>
              <li>Amazon and Covid-19</li>
              <li>Your Account </li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies </li>
              <li>Returns & Replacements</li>
              <li>Manege Your Content and </li>
              <li>Amazon Assistant</li>
              <li>Help</li>


          </ul>
        </div>
        <div className="footer_top_content_bottom_div">
          <Link to="/"><div className="footer_top_content_bottom_img">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
          </div></Link>
          <div className="footer_top_content_bottom_language">
              <div className="english_footer">
                <LanguageIcon/> English
              </div>
              <div className="ussd_dollor">
                <AttachMoneyIcon/> USD - U.S Dollar
              </div>
              <div className="ussd_dollor2">
                <img src={UsaFlag} alt="" />
                United States
              </div>
          </div>
        </div>
        </div>

        <div className="footer_bottom_content">
            <div className="footer_bottom_content_wrapper">
              <div className="link_div_first">
                
                <Link className="link_style_footer"><ul><p>Amazon Music</p>
                  <li>Stream millions</li>
                  <li>of songs</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Sell on Amazon</p>
                  <li>Start a Selling</li>
                  <li>Account</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Book Depository</p>
                  <li>Books With Free</li>
                  <li>Delivery</li>
                  <li>Worlwide</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>IMDb</p>
                  <li>Movies, TV</li>
                  <li>& Celebrities</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Ring</p>
                  <li>Smart home</li>
                  <li>Security</li>
                  <li>Systems</li>
                </ul></Link>

                
              </div>
              <div className="link_div_first">
              <Link className="link_style_footer"><ul><p>Amazon Advertising</p>
                  <li>Find, attract, and</li>
                  <li>engage</li>
                  <li>customers</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Amazon Busines</p>
                  <li>Everything For</li>
                  <li>Your Business</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Box Office Mojo</p>
                  <li>Find Movie</li>
                  <li>Box Office Data</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>IMDb Pro</p>
                  <li>Get info</li>
                  <li>Entertainment</li>
                  <li>Professionals</li>
                  <li>Need</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>eero WIFI</p>
                  <li>Stream 4K Video</li>
                  <li>in Every Room</li>
                </ul></Link>

              </div>
              <div className="link_div_first">
              <Link className="link_style_footer"><ul><p>Amazon Drive</p>
                  <li>Cloud Storage</li>
                  <li>from Amazon</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Amazon Global</p>
                  <li>Ship Orders</li>
                  <li>internationally</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>ComIXology</p>
                  <li>Thousands of</li>
                  <li>Digital Comics</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Kindle Direct Publishing</p>
                  <li>Indie Digital & Print</li>
                  <li>Publishing</li>
                  <li>Made Easy</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Blink</p>
                  <li>Smart Security</li>
                  <li>for Every Home</li>
                </ul></Link>

              </div>
              <div className="link_div_first">
              <Link className="link_style_footer"><ul><p>6pm</p>
                  <li>Score deals</li>
                  <li>on fashion</li>
                  <li>brands</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Home Services</p>
                  <li>Experienced</li>
                  <li>Pros</li>
                  <li>Happiness</li>
                  <li>Guarantee</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>DPReview</p>
                  <li>Digital</li>
                  <li>Photography</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Prime Video Direct</p>
                  <li>Video</li>
                  <li>Distribution</li>
                  <li>Made Easy</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Neighbors App</p>
                  <li>Real-Time</li>
                  <li>Crime</li>
                  <li>&Safety Alerts</li>
                </ul></Link>

              </div>
              <div className="link_div_first">
              <Link className="link_style_footer"><ul><p>AbeBooks</p>
                  <li>Books, art</li>
                  <li>& collectibles</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Amazon Ingnite</p>
                  <li>Sell your original</li>
                  <li>Digital Educational </li>
                  <li>Resources</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>East Dane</p>
                  <li>Designer Men's</li>
                  <li>Fashion</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Shopbop</p>
                  <li>Designer</li>
                  <li>Fashion Brands</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Amazon Subscription Boxes</p>
                  <li>Top subscription boxes-right</li>
                  <li>to your door</li>
                </ul></Link>

              </div>
              <div className="link_div_first">
              <Link className="link_style_footer"><ul><p>ACX</p>
                  <li>Audiobook</li>
                  <li>Publishing</li>
                  <li>Made Easy</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Amazon Web Services </p>
                  <li>Scalable Cloud</li>
                  <li>Computing</li>
                  <li>Services</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Fabric</p>
                  <li>Sewing, Quilting</li>
                  <li>& Knitting</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Woot!</p>
                  <li>Deals and</li>
                  <li>shenanigans</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>PillPack</p>
                  <li>Pharmacy</li>
                  <li>Simplified</li>
                </ul></Link>

              </div>
              <div className="link_div_first">
              <Link className="link_style_footer"><ul><p>Alexa</p>
                  <li>Actionable</li>
                  <li>Analiytics</li>
                  <li>for the Web</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Audible</p>
                  <li>Listen to Books &</li>
                  <li>Original </li>
                  <li>Audio</li>
                  <li>Performances</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Goodreads</p>
                  <li>Book reviews &</li>
                  <li>recomendations</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Zappos</p>
                  <li>Shoes &</li>
                  <li>Clothing</li>
                </ul></Link>

                <Link className="link_style_footer"><ul><p>Amazon Second Chance</p>
                  <li>Pass it on, trade it in,</li>
                  <li>give it a second life </li>
                </ul></Link>

              </div>

            </div>
            <p className="footer_bottom_content_p"><Link className="link_style_footer"><span>Conditions of Use </span></Link> <Link className="link_style_footer"> <span>Privacy Notice</span></Link> <Link className="link_style_footer"> <span>Interest-Based Ads</span></Link> <span>© 1996-2021, Amazon.com, Inc. or its affiliates</span><a href="https://t.me/rahimjon_web_developer" target="black"> <TelegramIcon/></a></p>
        </div>
        </div>
    )
}

export default Footer
