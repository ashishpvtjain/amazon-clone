import "./Books.css"
import Products from "../Products/Products"
import Books1 from "../../../src/BooksImg/41KxSKpUZrL._SY445_SX342_.jpg"
import Books2 from "../../../src/BooksImg/41SUSwxQ14L._SY445_SX342_.jpg"
import Books3 from "../../../src/BooksImg/51Xjv4IzydL._SY445_SX342_.jpg"
import Books4 from "../../../src/BooksImg/51ejzxd5P5L._SY445_SX342_.jpg"
import Books5 from "../../../src/BooksImg/51k8JdvyACL._SY445_SX342_.jpg"
import Books6 from "../../../src/BooksImg/71dNsRuYL7L._SY466_.jpg"
const Books = () => {
    return(
        <>
        <div className="Books">
            <div>{
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" 
                className="BooksAD" alt=""/>}
               <div>
                <div className="Books_Row">

                <Products title="Everything I Never Told You " price={50} 
                image={Books1}/>
                </div>
                <div className="Books_Row">

                <Products title="Don't Believe Everything You Think (English)" price={60} 
                image={Books2}/>
                </div>
                <div className="Books_Row">

                <Products title="Something I Never Told You" price={39} 
                image={Books3}/>
                </div>
                <div className="Books_Row">

                <Products title="Naruto 3-In-1 Edition 02: Includes vols. 4, 5 & 6" price={50} 
                image={Books4}/>
                </div>
                <div className="Books_Row">

                <Products title="You are the Best Friend: A True Love Story" price={100} 
                image={Books5}/>
                </div>
                <div className="Books_Row">

                <Products title="YOU ONLY LIVE ONCE" price={50} 
                image={Books6}/>
                </div>
               </div>
        </div>
        </div>
        </>
    )
};
export default Books;
