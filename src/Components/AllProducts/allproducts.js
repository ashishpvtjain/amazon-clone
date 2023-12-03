import Products from "../Products/Products";
const AllProducts = () => {
    return(
        <>
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
        </>
    );
};
export default AllProducts;