import "./Cart.css";
const Cart = () => {
    return(
        <>
        <div className="Cart">
            <div>
                {
                    <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" 
                    alt="" className="CartAD"/>
                }
                <div>
                    <h3>Your Cart Is Empty</h3>
                    <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG5.png"
                     alt="" className="CartemptyImg"/>
                </div>
            </div>
        </div><hr/>
        <p className="text">The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.

<br/>Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
        </>
    );
};
export default Cart;