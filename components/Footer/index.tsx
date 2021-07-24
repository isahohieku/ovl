import { currentYear } from "@lib/date";

export default function Footer(){
    return (
        <div id="footer" className="margin-top-55">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <img className="footer-logo" src="/favicon.svg" alt="" />
                        <br />
                        <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
                    </div>
                    <div className="col-md-4 col-sm-6 ">
                        <h4>Helpful Links</h4>
                        <ul className="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/careers">Careers</a></li>
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
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyrights">&copy; {currentYear()} Ovivi Ventures Limited. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
