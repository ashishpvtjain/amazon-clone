import "./Header.css";
import { Link, Route, Router } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Header = () => {
  return (
    <>
      <nav className="header">
        {/* <Router> */}
        <div className="headerTop">
          <div className="headerLeftNav">
            <MenuIcon />
          </div>
          {/* logo */}
          <Link to="/">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
              className="logo"
            />
          </Link>
          {/* logo */}
          {/* Search box */}
          <div className="headerSearch">
            <input type="text" className="headerSearchInput" />
            <SearchIcon className="headerSearchIcon" />
          </div>

          {/* Search box */}
          {/* links */}
          <div className=" headerNavbar">
            {/* Signin/Signout */}

            <Link to="/Login" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_One">Hello</span>
                <span className="headerOption_Two">User</span>
              </div>
            </Link>
            {/* Return Order */}
            <Link to="/Orders" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_One">Return</span>
                <span className="headerOption_Two">Order</span>
              </div>
            </Link>
            {/* Prime */}
            <Link to="/Prime" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_One">Try</span>
                <span className="headerOption_Two">Prime</span>
              </div>
            </Link>
            {/* Profile */}
            <Link to="/Profile" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_One">Your</span>
                <span className="headerOption_Two">Profile</span>
              </div>
            </Link>
            {/* Basket */}
            <Link to="/Cart" className="headerLink">
              <div className="headerOptions_Basket">
                <ShoppingCartIcon />
                <span className="headerOption_two basketCount">0</span>
              </div>
            </Link>
          </div>
          {/* links */}
        </div>
        {/* </Router> */}
        {/* Navbar Bottom */}
        <div className="headerBottom">
          {/* Address */}
          <div className="headerAddress">
          <LocationOnIcon/>
            <div className="headerLocation">
              <span className="headerOption_One">Deliver To</span>
              <span className="headerOption_Two">Ashish Jain</span>
            </div>
          </div>
          {/* Header Bottom Nav */}
          <div className="headerbottom_Navbar">
            <span>
              <Link to="/AllProducts" className="headerLink">
                All Products
              </Link>
            </span>
            <span>
              <Link to="/Books" className="headerLink">
                Books
              </Link>
            </span>

            <span>
              <Link to="/Mobile" className="headerLink">
                Mobile
              </Link>
            </span>
            <span>
              <Link to="/Electronics" className="headerLink">
              Electronics
              </Link>
            </span>
            <span>
              <Link to="/Clothes" className="headerLink">
                Trending Clothes
              </Link>
            </span>
          </div>
        </div>
        {/* Navbar Bottom */}
      </nav>
    </>
  );
};
export default Header;
