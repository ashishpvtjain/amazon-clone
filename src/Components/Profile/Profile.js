import "./Profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
    return(
        <>
        <div className="Profile">
            <Link to="/">
                <img className="ProfileLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            {/* Profile Main section */}
            <div className="ProfileContainer">
                <h3>Your Profile</h3>
                <form>
                    <h6>Name</h6>
                    <input type="text" placeholder="Enter Your Name"/>
                    <h6>Email</h6>
                    <input type="email" placeholder="Enter Your Email"/>
                    <h6>Contact Number</h6>
                    <input type="number" placeholder="Enter Your Contact Number"/>
                    <button className="ProfileButton">Update Profile</button>
                </form>
            </div>
        </div>
        </>
    );
};
export default Profile;
