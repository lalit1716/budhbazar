import React from "react";
import { Link } from "react-router-dom";


function Home() {

  
  return (
    <div id="home-container">
      <div className="grid1 slidebar-container">
        
        {/* <button className="btn-left">&#60;</button> */}
      
          <img className="img-animation" src='/images/Screenshot_01.png' alt={Error} />
        
      
          <img className="img-animation" src='/images/Screenshot_02.png' alt={Error} />
        
      
          <img className="img-animation" src='/images/Screenshot_03.png' alt={Error} />
        
        {/* <button className="btn-right">&#62;</button> */}
      </div>







      
      <div className="grid2 home-products-container">
        <div>
          <Link to="/Tshirts" className="products-link">
            <img className="mainImg0 mainImg" src='/images/Tshirts/tshirt1.png' alt={Error} />

            <h5 className="lable1">T-shirts</h5>
            <h3 className="price2">From 399</h3>
          </Link>
        </div>

        <div>
          <Link to="/Shoes" className="products-link">
            <img className="mainImg1 mainImg" src='/images/shoes/shoes1.jpeg' alt={Error} />

            <h5 className="lable1">Shoes</h5>
            <h3 className="price2">From 499</h3>
          </Link>
        </div>

        <div>
          <Link to="/Laptops" className="products-link">
            <img className="mainImg2 mainImg" src='/images/laptop/laptop6.png' alt={Error} />

            <h5 className="lable1">Laptops</h5>
            <h3 className="price2">From 35499</h3>
          </Link>
        </div>

        <div>
          <Link to="/Trimers" className="products-link">
            <img className="mainImg3 mainImg" src='/images/trimer/trimer1.jpg' alt={Error} />

            <h5 className="lable1">Trimers</h5>
            <h3 className="price2">From 699</h3>
          </Link>
        </div>

        <div>
          <Link to="/Watchs" className="products-link">
            <img className="mainImg4 mainImg" src='/images/watchs/twatch8.jpg' alt={Error} />

            <h5 className="lable1">Watchs</h5>
            <h3 className="price2">From 1499</h3>
          </Link>
        </div>

        <div>
          <Link to="/Bags" className="products-link">
            <img className="mainImg5 mainImg" src='/images/bags/bag5.png' alt={Error} />
            <h5 className="lable1">Bags</h5>
            <h3 className="price2">From 449</h3>
          </Link>
        </div>

        <div>
          <Link to="/Airpods" className="products-link">
            <img className="mainImg6 mainImg" src='/images/airpods/airpod1.png' alt={Error} />
            <h5 className="lable1">Airpods</h5>
            <h3 className="price2">From 899</h3>
          </Link>
        </div>

        <div>
          <Link to="/Headphones" className="products-link">
            <img className="mainImg7 mainImg" src='/images/headphones/headphone7.jpeg' alt={Error} />
            <h5 className="lable1">Headphones</h5>
            <h3 className="price2">From 899</h3>
          </Link>
        </div>

        <div>
          <Link to="/Mobiles" className="products-link">
            <img className="mainImg8 mainImg" src='/images/mobiles/phone1.png' alt={Error} />
            <h5 className="lable1">Mobiles</h5>
            <h3 className="price2">From 8289</h3>
          </Link>
        </div>

        <div>
          <Link to="/Toys" className="products-link">
            <img className="mainImg9 mainImg" src='/images/toys/toys8.png' alt={Error} />
            <h5 className="lable1">Toys</h5>
            <h3 className="price2">From 99</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
