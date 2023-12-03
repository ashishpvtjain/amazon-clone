import "./App.css"
import Header from "./layout/Header/Header"
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import Home from "./Components/Home/Home"
import Footer from "./layout/Footer/Footer"
import Login from "./Components/Login/Login"
import Order from "./Components/Orders/Order"
import Profile from "./Components/Profile/Profile"
import Cart from "./Components/Cart/Cart"
import AllProducts from "./Components/AllProducts/allproducts"
import Books from "./Components/Books/Books"
import Mobile from "./Components/Mobile/mobile"
import Electronics from "./Components/Electronics/electronics"
import Clothes from "./Components/Clothes/Clothes"
import Prime from "./Components/Prime/Prime"
const App = () => {
    return(
        <>
        <h1>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={[<Header/>, <Home/>, <Footer/>]}></Route>
                        <Route path="/Login" element={<Login/>}></Route>
                        <Route path="/Orders" element={[<Header/>, <Order/>, <Footer/>]}></Route>
                        <Route path="/Profile" element={<Profile/>}></Route>
                        <Route path="/Cart" element={[<Header/>, <Cart/>]}></Route>
                        <Route path="/AllProducts" element={[<Header/>, <AllProducts/>, <Footer/>]}></Route>
                        <Route path="/Books" element={[<Header/>, <Books/>, <Footer/>]}></Route>
                        <Route path="/Mobile" element={[<Header/>, <Mobile/>, <Footer/>]}></Route>
                        <Route path="/Electronics" element={[<Header/>, <Electronics/>, <Footer/>]}></Route>
                        <Route path="/Clothes" element={[<Header/>, <Clothes/>, <Footer/>]}></Route>
                        <Route path="/Prime" element={[<Header/>, <Prime/>, <Footer/>]}></Route>
                    </Routes>
                </div>
            </Router>
        </h1>
        
        </>

    )
}
export default App