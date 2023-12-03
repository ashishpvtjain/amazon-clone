import "./Prime.css"
import { Link } from "react-router-dom";
const Prime = () => {
    return(
        <>
        <div className="Prime">
            <div className="box">
            <Link to="/">
                <img src="https://m.media-amazon.com/images/G/31/marketing/prime/inline-prime-logo._CB636295712_.png" 
                alt="" className="PrimeLogo"/>
            </Link>
            <p>FREE 1-day delivery, videos, music & more<br/>One simple membership, many benefits. Join now.</p>
            <div className="row">
                <div className="box1">
                <p>Try Prime Free</p>
                <button>Start your 30-day free trial</button>
                <p className="p2">Pay via UPI or select credit / debit cards.</p>
                </div>
                <div className="box2">
                <p>Prime yearly</p>
                <button>$100 per year</button>
                <p className="p2">Pay by all electronic methods.</p>
            </div>
            </div>
            
        </div>
        </div>
        </>
    );
};
export default Prime;