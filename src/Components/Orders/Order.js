import "./Order.css"
import SearchIcon from '@mui/icons-material/Search';
const Order = () => {
    return(
        <>
        <div className="Orders">
            <div>
                {
                    <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" 
                    alt="" className="OrdersAD"/>
                }
                <div>
                    <h3>Your Orders</h3>
                    
                    <div className="OrdersSearchBar">
                    <SearchIcon className="OrdersSearchIcon" />
                    <input type="text" placeholder="Search all Order" className="OrdersSearchInput"/>
                    <button>Search</button>
                    </div><div className="text">
                    <p>0 Order Placed in </p>
                    <button>past 3 months</button>
                    </div>
                    <div className="text2"><p>Looks like you haven't placed an order in the last 3 months.</p></div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Order;