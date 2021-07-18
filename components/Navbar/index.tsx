export default function Navbar() {

    return (
        <>
            <header id="header-container">
                <div id="header">
                    <div className="container">
                        <div className="left-side">
                            <div id="logo">
                                <a href="index.html"><img src="images/logo.png" alt="" /></a>
                            </div>

                            <div className="mmenu-trigger">
                                <button className="hamburger hamburger--collapse" type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>

                            <nav id="navigation" className="style-1">
                                <ul id="responsive">
                                    <li><a className="current" href="/">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Services</a></li>
                                </ul>
                            </nav>
                            <div className="clearfix"></div>

                        </div>
                        <div className="right-side">
                            <div className="header-widget">
                                <a href="/contact" className="button border with-icon">Contact us <i className="sl sl-icon-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
            <div className="clearfix"></div>
        </>
    )
}