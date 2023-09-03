import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../Carousel";
import BestSells from "../BestSells"

const HomePage = () => {
    const navigate = useNavigate();
    const handleShopNow = () => {
        navigate("/mobiles");
      };    

    return(
        <> 
            <div className="backgroundImage">
            <img src="/images/backgroundd1.jpg" alt="Background" />
                <div className="overlayText">
                    <h1>Welcome to MobileShop</h1>
                    <p>See our offer here</p>
                    <button className="button_mobiles" onClick={handleShopNow}>
                       Shop now
                    </button>   
                </div>
            </div>
            <div className="carousel_div">
            <Carousel />
            </div>
            <div className="bs_title">
                <h3>These are the best selling products</h3>
            </div>
            <div className="besttsells">
                <BestSells />
            </div>

        </>

    )
}
export default HomePage;