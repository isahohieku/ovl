import Head from 'next/head';
import Layout, { siteTitle } from '@components/layout';

export default function ErrorPage() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <section id="not-found" className="center">
                            <h2>404 <i className="fa fa-question-circle"></i></h2>
                            <p>We're sorry, but the page you were looking for doesn't exist.</p>
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="main-search-input gray-style margin-top-50 margin-bottom-10">
                                        <div className="main-search-input-item">
                                            <input type="text" placeholder="What are you looking for?" value="" />
                                        </div>

                                        <button className="button">Search</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>

    )
}