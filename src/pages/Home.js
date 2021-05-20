import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Content from '../components/Content';
import Footer from '../components/Footer';


function Home({all, data, allContent}) {
    return (
        <div className="Home_page">
            <Header/>
            <Banner all={all}/>
            <Content data={data} allContent={allContent}/>
           <Footer/>
        </div>
    )
}

export default Home;
