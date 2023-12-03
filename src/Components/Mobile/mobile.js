import "./mobile.css"
import Products from "../Products/Products"
import Mobile1 from "../../../src/mobimg/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.webp"
import Mobile2 from "../../../src/mobimg/31Q14qzdoZL._SX300_SY300_QL70_FMwebp_.webp"
import Mobile3 from "../../../src/mobimg/31p5cVyRLmL._SY445_SX342_QL70_FMwebp_.webp"
import Mobile4 from "../../../src/mobimg/41rxSxVXs7L._SX300_SY300_QL70_FMwebp_.webp"
import Mobile5 from "../../../src/mobimg/41tSQSq1xJL._SX300_SY300_QL70_FMwebp_.webp"
import Mobile6 from "../../../src/mobimg/61JS7lF2aqL._SX679_.jpg"
const Mobile = () => {
    return(
        <>
        <div className="Mobile">
            <div>{
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" 
                className="MobileAD" alt=""/>}
                <div>
                <div className="Mobile_Row">

                <Products title="Apple iPhone 13 (128GB) - Blue" price={2000} 
                image={Mobile1}/>
                </div>
                <div className="Mobile_Row">

                <Products title="Apple iPhone 15 (128 GB) - Blue" price={6005} 
                image={Mobile2}/>
                </div>
                <div className="Mobile_Row">

                <Products title="Apple iPhone 13 (128GB) - Pink" price={3900} 
                image={Mobile3}/>
                </div>
                <div className="Mobile_Row">

                <Products title="Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage" price={5000} 
                image={Mobile4}/>
                </div>
                <div className="Mobile_Row">

                <Products title="realme narzo 60X 5G（Stellar Green,6GB,128GB Storage)" price={4500} 
                image={Mobile5}/>
                </div>
                <div className="Mobile_Row">

                <Products title="iQOO Neo 7 5G (Frost Blue, 8GB RAM, 128GB Storage)" price={5020} 
                image={Mobile6}/>
                </div>
               </div>
        </div>
        </div>
        </>
    )
};
export default Mobile;