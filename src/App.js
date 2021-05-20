import './App.css';
// import Header from './components/Header';
import LoginEmailPassword from './components/LoginEmailPassword';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Link from './components/Link';
import Product from './components/Product';
import Todays from './components/Todays';
import Customer from './components/Customer';
import GiftCards from './components/GiftCards';
import Registry from './components/Registry';
import Sell from './components/Sell';
import Home from './pages/Home';

function App() {
  
  const bannerImages = [
    {
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
    },

    {
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
    },

    {
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
    },

    {
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
    },

    {
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
    },

    {
      image : "https://images-na.ssl-images-amazon.com/images/G/01/CurrencyConverter/2020/AMZ_Associates_ACC_Banner_Evergreen_1500x600_v2._CB415565312_.jpg"
    }

  ]
  // const discoverImage = [
  //   {
  //     image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
  //   },
  //   {
  //     image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg"
  //   },
  //   {
  //     image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg"
  //   },
  //   {
  //     image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg"
  //   },
  //   {
  //     image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg"
  //   },
  //   {
  //     image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg"
  //   }
  // ]
  const contentImage = [
    
      {
        id: 1,
        title:  "Get fit at home",
        image : "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg"
    },
    {
      id: 2,
      title : "Computers ",
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"
    },
    {
      id: 3,
      title : "AmazonBasics",
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
    }
    
  ];
  const contentImageBot = [
    {
      id: 1,
      title : "Shop Top Categories",
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
    },
    {
      id: 2,
      title : "Computers & Accessories",
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
    },
    {
      id: 3,
      title : "Find Your Ideal TV",
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
    },
    {
      id: 4,
      title : "Beauty picks",
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
    }

  ]
const basketProduct = [
   {
      id: 1,
      title : "Shop Top Categories",
      cost :  10,
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
    },
    {
      id: 2,
      title : "Computers & Accessories",
      cost :  13,
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
    },
    {
      id: 3,
      title : "Computers & Accessories",
      cost :  15,
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
    },
    {
      id: 4,
      title : "Computers & Accessories",
      cost :  20,
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
    }
]
  
  return (
  <Router>
      <div className="app">
        <Switch>
          <Route path="/login" component={LoginEmailPassword}></Route>
          <Route path="/cart">
            <Cart allBacketItems={basketProduct}/>
          </Route>
          <Route path="/link" component={Link}></Route>
          <Route path="/product">
          <Product allBacketItems={basketProduct}/>
          </Route>
          <Route path="/today"><Todays/></Route>
          <Route path="/customer"><Customer/></Route>
          <Route path="/giftcards"><GiftCards/></Route>
          <Route path="/registry"><Registry/></Route>
          <Route path="/sell"><Sell/></Route>
          <Route path="/">
           <Home all={bannerImages} data={contentImage} allContent={contentImageBot}/>
          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
