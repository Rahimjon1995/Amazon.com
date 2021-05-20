import React, { useState } from 'react'
import '../styles/LoginEmailPassword.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {auth, provider} from "../firebase";
import { Link, useHistory } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useStateValue } from "../StateProvider";



function LoginEmailPassword() {
  const [user, dispatch] = useStateValue({});
  const history = useHistory();     
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const signInWithEmail = (e) => {
          auth.signInWithEmailAndPassword(email, password)
          .then((user) => {
            if(user){
              dispatch({
                type: "CREATE_USER",
                user: {
                  user: user
                }
              })
              history.push("/")
            }
          })
          .catch(err => alert(err.messege));
          e.preventDefault()
        }

        const createAccountWithEmail = (e) => {
          auth.createUserWithEmailAndPassword(email, password)
          .then(user => console.log(user))
          .catch(err => console.log(err));
          e.preventDefault();
        }

        const [nedDrop, setDrop] = useState(false);
        const needClick = (e) => {
          const helpText = document.querySelector('.help_text_down');
          const arrowDropRight = document.querySelector('.arrowRight');
          const arrowDropDown = document.querySelector('.ArrowDown');
          if (!nedDrop) {
            helpText.style.display = "block";
            arrowDropDown.style.display = "block";
            arrowDropRight.style.display = "none";

            setDrop(true);
          } else{
            helpText.style.display = "none";
            arrowDropDown.style.display = "none";
            arrowDropRight.style.display = "block";
            setDrop(false);
          }
        }
    return (
        <div className="loginEmailPassword">
          <Link to="/">
          <img src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png" alt="" className="login_img"/>
          
          </Link>           
            <div className="loginContainer">
                <h1>Sign-In</h1>
              <form action="#" id="form">
              <label htmlFor="email">Email or mobile phone number</label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                <button type="submit" onClick={signInWithEmail}>Continue</button>
              </form>

            <div className="text">
            <p>By continuing, you agree to Amazon's <Link to="/link" className="link_login">Conditions of Use</Link></p>
              <p>and <Link to="/login" className="link_login">Privacy Notice.</Link></p>
            </div>
            <div className="need_wrapper">
             <div className="flex_div">
             <Link to="/login" className="link_login">
              <div className="need_help" onClick={needClick}>
                <div className="arrowRight"> <ArrowRightIcon className="arrow_icon"/></div>
                <div className="ArrowDown"><ArrowDropDownIcon className="arrow_icon"/></div> 
                <p>Need help?</p>
              </div>
              </Link>
              <div className="pusto"></div>
             </div>

            <div className="help_text_down">
            <Link to="/login" className="link_login"><p>Forgot your password?</p></Link>
            <Link to="/login" className="link_login"><p>Other issues with Sign-In</p>
</Link>
                  
            </div>

            </div>
            

            </div>


        <button id="create_account" onClick={createAccountWithEmail}>Create Account</button>
        </div>
    )
}

export default LoginEmailPassword
