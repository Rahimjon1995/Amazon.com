import React, { useState } from 'react';
import '../styles/Banner.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


function Banner({all}) {
    const [img, setImg ] = useState(0);
    const prev = (e) =>{
        const imageBanner = document.querySelector('.banner_image');
        if(img === 0){
            setImg(5)
        }else {
            setImg(prev => prev -1);
        }
    } 
    const next = (e) =>{
        const imageBanner = document.querySelector('.banner_image');
        if(img === 5){
            setImg(0)
        } else{
            setImg(prev => prev +1);
        }
    }

    return (
        <div className="carousel">
            <button className="arrow left-a" onClick={prev}><NavigateBeforeIcon style={{fontSize: "40px"}}/></button>

                <img src={all[img].image} alt="" className="banner_image"/>
            <button className="arrow right-a" onClick={next}><NavigateNextIcon style={{fontSize: "40px"}}/></button>

            </div>
    )
}

export default Banner
