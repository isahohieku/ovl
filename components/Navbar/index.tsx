import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    return (
        <>
            <header id="header-container">
                <div id="header">
                    <div className="container">
                        <div className="left-side">
                            <div id="logo">
                                <a href="index.html"><img src="/favicon.svg" alt="Favicon" /></a>
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
                                    <li><a href="/" className={router.pathname === '/' ? 'current' : ''}>Home</a></li>
                                    <li><a href="/about" className={router.pathname === '/about' ? 'current' : ''}>About Us</a></li>
                                    <li><a href="/services" className={router.pathname === '/services' ? 'current' : ''}>Services</a></li>
                                    <li><a href="/careers" className={router.pathname === '/careers' ? 'current' : ''}>Careers</a></li>
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