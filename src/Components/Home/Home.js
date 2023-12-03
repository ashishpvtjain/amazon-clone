import { useEffect } from "react";
import Products from "../Products/Products";
import "./Home.css"
import { Watch } from "@mui/icons-material";
const Home = () => {
    useEffect(() => Slider(0), [])
    return(
        <>
        <div className="home">
            <div className="homeContainer">
                <div className="homeSliderContainer">
                    <div className="homeSlide">
                        <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_3000x1200._CB405585145_.jpg" 
                        alt=""/>
                    </div>
                    <div className="homeSlide">
                        <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.JPG" 
                        alt=""/>
                    </div>
                    <div className="homeSlide">
                        <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg" 
                        alt=""/>
                    </div>
                    <div className="homeSlide">
                        <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg" 
                        alt=""/>
                    </div>
                </div>
                {/* HOME ROW */}
                <div className="HomeRow">
                  <Products title="Fitbit Watch" price={50} 
                  image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
                  <Products title="Apple iPhone 13 (128GB) - Midnight" price={2000} 
                  image="https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"/>
                  <Products title="OPTIMUM NUTRITION Performance Whey Protein Powder Blend with Isolate" price={228} 
                  image="https://m.media-amazon.com/images/I/61-QYBTceML._SL1500_.jpg"/>
                  <Products title="WorkPro® 12000 Series Ergonomic Mesh/Fabric Mid-Back Chair" price={500} 
                  image="https://m.media-amazon.com/images/I/718tz13018L._AC_SL1500_.jpg"/>
                </div>
                {/* Second Row */}
                <div className="HomeRow">
                  <Products title="ASIAN Men's Tarzan-11 White Casual Sneaker High-Neck Shoes for Men's & Boy's" price={100} 
                  image="https://m.media-amazon.com/images/I/71cflgAolqL._SL1500_.jpg"/>
                  <Products title="Fossil Grant Sport Analog Blue Dial Men's Watch-FS5237" price={250} 
                  image="https://m.media-amazon.com/images/I/71PzJidbCRL._SL1500_.jpg"/>
                </div>
                {/* Third Row */}
                <div className="HomeRow">
                  <Products title="RIHANI FAB 2023-2024 Men's Clothes Pilot Bomber Couple Jacket Boys Tops" price={70} 
                  image="https://m.media-amazon.com/images/I/41Ik9uowQ8L.jpg"/>
                  <Products title="Hocazor Shooting Ear Protection NRR 26dB Black&Green HO1006" price={30} 
                  image="https://m.media-amazon.com/images/I/71OV5Rx+jFL._AC_SL1500_.jpg"/>
                  <Products title= "Acer Nitro 17 Gaming Laptop" price={1170} 
                  image="https://m.media-amazon.com/images/I/711+0tgn+6L._AC_SY300_SX300_.jpg"/>
                  <Products title="TACVASEN Men's Hoodie Sweatshirt Winter" price={60} 
                  image="https://m.media-amazon.com/images/I/71+soe32pxL._AC_SX466_.jpg"/>
                </div>
                {/* Forth Row */}
                <div className="HomeRow">
                  <Products title="Super Soft Warm Buffalo Plaid Plush Blankets" price={30} 
                  image="https://m.media-amazon.com/images/I/71QiCPcV-gL._AC_SX679_.jpg"/>
                  <Products title="FRACORA Mens White Canvas Shoes" price={20} 
                  image="https://m.media-amazon.com/images/I/81L-27Yt8xL._AC_SY575_.jpg"/>
                  <Products title="SAMSUNG 34” ViewFinity S65VC Series Ultrawide" price={600} 
                  image="https://m.media-amazon.com/images/I/71OGys4EQ+L._AC_SX679_.jpg"/>
                  <Products title="TP-Link Deco AXE5400 Tri-Band WiFi" price={230} 
                  image="https://m.media-amazon.com/images/I/51Fsp750hNL._AC_SL1336_.jpg"/>
                </div>
            </div>
        </div>
        </>
    );
};
// For the slider
function Slider(Counter){
  const Slides = document.querySelectorAll(".homeImg")
  Slides.forEach((slide, index) =>{
    if(index !== Counter){
      slide.style.visibility = `hidden`;
      slide.classList.add(`image-$(index)`);
    }
  })
  moveCarousal(Counter, Slides, Slides.length)
}
function moveCarousal(Counter, Slides, len){
   if(Slides) {
    if(Counter >= len-1) Counter = 0;
    else Counter += 1;
    Slides.forEach((slide, index) => {
        if(index === Counter){
            slide.style.visibility = `visible`;
        } else {
            slide.style.visibility = `hidden`;
        }
    })
   }
   setTimeout(() => {
     moveCarousal(Counter, Slides, len);
   }, 4000);
}
export default Home;