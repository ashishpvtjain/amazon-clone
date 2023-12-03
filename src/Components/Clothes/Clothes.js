import "./Clothes.css"
import Products from "../Products/Products"
import Clothes1 from "../../../src/clothesimg/41Nbh2cHKwL._SY445_SX342_.jpg"
import Clothes2 from "../../../src/clothesimg/51agrAsQxxL._SY679_.jpg"
import Clothes3 from "../../../src/clothesimg/61SmsCyfZOL._SY741_.jpg"
import Clothes4 from "../../../src/clothesimg/712GTx78xmL._SY741_.jpg"
import Clothes5 from "../../../src/clothesimg/714UHLq6TgL._SY879_.jpg"
import Clothes6 from "../../../src/clothesimg/71UkW9i6uRL._SX679_.jpg"
const Clothes = () => {
    return(
        <>
        <div className="Clothes">
            <div>{
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" 
                className="ClothesAD" alt=""/>}
                <div>
                <div className="Clothes_Row">

                <Products title="Majestic Man Slim Fit Cotton Casual Printed Shirt for Men" price={200} 
                image={Clothes1}/>
                </div>
                <div className="Clothes_Row">

                <Products title="LEOTUDE Men T-Shirt" price={65} 
                image={Clothes2}/>
                </div>
                <div className="Clothes_Row">

                <Products title="Leriya Fashion Shirt for Men | Tropical Leaf Printed Rayon Shirts for Men" price={390} 
                image={Clothes3}/>
                </div>
                <div className="Clothes_Row">

                <Products title="LEOTUDE Men's Round Neck Half Sleeve Drop Shoulder Tshirt" price={500} 
                image={Clothes4}/>
                </div>
                <div className="Clothes_Row">

                <Products title="Amazon Brand - Symbol Men Casual Shirt" price={450} 
                image={Clothes5}/>
                </div>
                <div className="Clothes_Row">

                <Products title="Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt" price={502} 
                image={Clothes6}/>
                </div>
               </div>
        </div>
        </div>
        </>
    );
};
export default Clothes; 