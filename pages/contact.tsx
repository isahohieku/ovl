import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="contact-map margin-bottom-60">

                <div id="singleListingMap-container">
                    <div id="singleListingMap" data-latitude="9.037746" data-longitude="7.488335" data-map-icon="im im-icon-Map2"></div>
                    <a href="#" id="streetView">Street View</a>
                </div>

                <div className="address-box-container">
                    <div className="address-container" data-background-image="images/our-office.jpg">
                        <div className="office-address">
                            <h3>Our Office</h3>
                            <ul>
                                <li>John Street 304</li>
                                <li>New York</li>
                                <li>Phone (123) 123-456 </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>

            <div className="container">

                <div className="row">

                    <div className="col-md-4">

                        <h4 className="headline margin-bottom-30">Find Us There</h4>

                        <div className="sidebar-textbox">
                            <p>Collaboratively administrate channels whereas virtual. Objectively seize scalable metrics whereas proactive e-services.</p>

                            <ul className="contact-details">
                                <li><i className="im im-icon-Phone-2"></i> <strong>Phone:</strong> <span>(123) 123-456 </span></li>
                                <li><i className="im im-icon-Fax"></i> <strong>Fax:</strong> <span>(123) 123-456 </span></li>
                                <li><i className="im im-icon-Globe"></i> <strong>Web:</strong> <span><a href="#">www.example.com</a></span></li>
                                <li><i className="im im-icon-Envelope"></i> <strong>E-Mail:</strong> <span><a href="#">office@example.com</a></span></li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-md-8">

                        <section id="contact">
                            <h4 className="headline margin-bottom-35">Contact Form</h4>

                            <div id="contact-message"></div>

                            <form method="post" action="contact.php" name="contactform" id="contactform" autoComplete="on">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <input name="name" type="text" id="name" placeholder="Your Name" required />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div>
                                            <input name="email" type="email" id="email" placeholder="Email Address" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <input name="subject" type="text" id="subject" placeholder="Subject" required />
                                </div>

                                <div>
                                    <textarea name="comments" cols={40} rows={3} id="comments" placeholder="Message" required></textarea>
                                </div>

                                <input type="submit" className="submit button" id="submit" value="Submit Message" />

                            </form>
                        </section>
                    </div>

                </div>

            </div>
        </Layout>
    )
}