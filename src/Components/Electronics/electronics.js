import "./electronics.css"
import Products from "../Products/Products"
import Electronics1 from "../../../src/eleimg/21qKn0ChHNL._SY300_SX300_QL70_FMwebp_.webp"
import Electronics2 from "../../../src/eleimg/41-zB3M31dL._SX300_SY300_QL70_FMwebp_.webp"
import Electronics3 from "../../../src/eleimg/414Cwv2guxL._SX300_SY300_QL70_FMwebp_.webp"
import Electronics4 from "../../../src/eleimg/41jiu5-qw3L._SX300_SY300_QL70_FMwebp_.webp"
import Electronics5 from "../../../src/eleimg/41wQM1nIulL._SX300_SY300_QL70_FMwebp_.webp"
import Electronics6 from "../../../src/eleimg/61RGJpcuU0L._SY741_.jpg"
const Electronics = () => {
    return(
        <>
        <div className="Electronics">
            <div>{
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" 
                className="ElectronicsAD" alt=""/>}
               <div>
                <div className="Electronics_Row">

                <Products title="GM 3060 E-Book 4 + 1 Power with Master Switch" price={27} 
                image={Electronics1}/>
                </div>
                <div className="Electronics_Row">

                <Products title="Fire-Boltt Ninja Call Pro Plus 1.83"  price={60} 
                image={Electronics2}/>
                </div>
                <div className="Electronics_Row">

                <Products title="beatXP Kitchen Scale Multipurpose Weighing Scale" price={38} 
                image={Electronics3}/>
                </div>
                <div className="Electronics_Row">

                <Products title="Casio MC-12M Shop Calculator" price={49} 
                image={Electronics4}/>
                </div>
                <div className="Electronics_Row">

                <Products title="JSB HF28 Foot Massager Machine with Heat" price={10} 
                image={Electronics5}/>
                </div>
                <div className="Electronics_Row">

                <Products title="ELV Mobile Phone Mount Tabletop Holder for Phones and Tablets" price={60} 
                image={Electronics6}/>
                </div>
               </div>
        </div>
        </div>
        </>
    )
};
export default Electronics;