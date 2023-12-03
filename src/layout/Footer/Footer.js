import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./Footer.css";
const Footer = () => {
    const Scto = () =>{
        window.scrollTo(0,0);
    }
    return(
        <>
        <div className="Footer">
            <a onClick={Scto}>
            <div className="FooterBottomToTop">
            <ExpandLessIcon/>
            </div>
            </a>
            <div className='FooterVerRow'>
                <div className='FooterVerCol'>
                    <div className='FooterVerColHead'>Get To 
                    Know US</div>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Amazon Cares</li>
                        <li>Gift Products</li>
                    </ul>
                </div>
                <div className='FooterVerCol'>
                    <div className='FooterVerColHead'>Connect To 
                    us</div>
                    <ul>
                        <li>Meta</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Github</li>
                    </ul>
                </div>
                <div className='FooterVerCol'>
                    <div className='FooterVerColHead'>Make Money</div>
                    <ul>
                        <li>Amazon Pay</li>
                        <li>Become An Affiliate</li>
                        <li>Sell On Amazon</li>
                    </ul>
                </div>
            
            </div>
            <hr />
            <div className='FooterLast'>
                <span className='FooterMess'>
                    Amazon Clone &copy; Ashish Jain
                </span>
            </div>
        </div>
        </>
    )
}
export default Footer;