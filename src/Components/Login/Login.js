import "./Login.css";
import { Link } from "react-router-dom";
const Login = () =>{
    return(
        <>
         <div className="Login">
           <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            className="LoginLogo"
             alt="Amazon logo"/>
           </Link>
           {/* Login form */}
           <div className="LoginContainer">
           <h2>Sign In</h2>
           <form>
            <h4>Email</h4>
            <input type="email" placeholder="Your Email"/>
            <h4>Password</h4>
            <input type="password" placeholder="Your Password"/>
            <button className="LoginButton">Sign In</button>
           </form>
           <p>
            By Continuing, you agree with Amazon Conditions
            of Use and Privacy Notice.
           </p>
           <button className="LoginRegisterButton">
            Create Your Amazon Account
           </button>
           <br/>
           <p style={{textAlign:"center"}}>Login with:</p>
           <a className="LoginButtonGoogle">
            <img src="https://pngimg.com/uploads/google/google_PNG102344.png" alt="" 
            className="LoginGoogleImg"/>
           </a>
         </div>
         </div>
        </>
    );
};
export default Login;