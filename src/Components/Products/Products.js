import StarRateIcon from '@mui/icons-material/StarRate';
import "./Products.css";
const Products = ({title,image,price}) => {
   return(
    <>
    <div className="Products">
        <img src={image}  alt=""/>
        <div className="ProductInformation">
         <p>{title}</p>   
         <div className="ProductsGroup">
            <p className="ProductPrice">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            {/* For The Rating */}
            <div className="ProductRating">
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
         </div>
         </div>
        </div>
        <button>Add To Cart</button>
    </div>
    </>
   );
};
export default Products;