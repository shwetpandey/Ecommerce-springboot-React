
import './App.css';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="w3_footer_grids">
                    <div className="col-md-3 w3_footer_grid">
                        <h3>Contact</h3>
                        <p>Further any detail</p>
                        <ul className="address">
                            <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>Chennai</span></li>
                            <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
                            <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+91 8795382985</li>
                        </ul>
                    </div>
                    <div className="agileits_social_button">
                        <ul>
                            <li><a href="#" className="facebook"> </a></li>
                            <li><a href="#" className="twitter"> </a></li>
                            <li><a href="#" className="google"> </a></li>
                            <li><a href="#" className="pinterest"> </a></li>
                        </ul>
                    </div>

                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="footer-copy">
                <div className="footer-copy1">
                    <div className="footer-copy-pos">
                        <a href="#home1" className="scroll"><img src="../assets/images/arrow.png" alt=" " className="img-responsive" /></a>
                    </div>
                </div>

                <div className="container">
                    <p>&copy; 2022 Shoppers Cart. Design by <a href="http://w3layouts.com/">ADM21JF027</a></p>
                </div>
            </div>
        </div>
    )
}
export default Footer;
