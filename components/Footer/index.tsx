export default function Footer(){
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <img className="footer-logo" src="images/logo.png" alt="" />
                        <br />
                        <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
                    </div>
                    <div className="col-md-4 col-sm-6 ">
                        <h4>Helpful Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>

                    <div className="col-md-3  col-sm-12">
                        <h4>Contact Us</h4>
                        <div className="text-widget">
                            <span>12345 Little Lonsdale St, Melbourne</span> <br />
                            Phone: <span>(123) 123-456 </span><br />
                            E-Mail:<span> <a href="#">office@example.com</a> </span><br />
                        </div>

                        <ul className="social-icons margin-top-20">
                            <li><a className="facebook" href="#"><i className="icon-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="icon-twitter"></i></a></li>
                            <li><a className="gplus" href="#"><i className="icon-gplus"></i></a></li>
                            <li><a className="vimeo" href="#"><i className="icon-vimeo"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyrights">&copy; 2021 Ovivi Ventures Limited. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
