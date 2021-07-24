import Head from 'next/head';
import Layout, { siteTitle } from '@components/layout';
import Jumbotron from '@components/Jumbotron';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Jumbotron />

      {/* Popular cities */}
      <div className="container">
        <div className="row">

          <div className="col-md-12">
            <h3 className="headline centered margin-bottom-35 margin-top-70">Popular Cities <span>Browse listings in
              popular places</span></h3>
          </div>

          <div className="col-md-4">

            <a href="listings-list-with-sidebar.html" className="img-box"
              data-background-image="/images/popular-location-01.jpg">
              <div className="img-box-content visible">
                <h4>New York </h4>
                <span>14 Listings</span>
              </div>
            </a>

          </div>

          <div className="col-md-8">

            <a href="listings-list-with-sidebar.html" className="img-box"
              data-background-image="/images/popular-location-02.jpg">
              <div className="img-box-content visible">
                <h4>Los Angeles</h4>
                <span>24 Listings</span>
              </div>
            </a>

          </div>

          <div className="col-md-8">

            <a href="listings-list-with-sidebar.html" className="img-box"
              data-background-image="/images/popular-location-03.jpg">
              <div className="img-box-content visible">
                <h4>San Francisco </h4>
                <span>12 Listings</span>
              </div>
            </a>

          </div>

          <div className="col-md-4">

            <a href="listings-list-with-sidebar.html" className="img-box"
              data-background-image="/images/popular-location-04.jpg">
              <div className="img-box-content visible">
                <h4>Miami</h4>
                <span>9 Listings</span>
              </div>
            </a>

          </div>

        </div>
      </div>

      {/* Info Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h3 className="headline centered margin-top-80">
              Plan The Vacation of Your Dreams
              <span className="margin-top-25">Explore some of the best tips from around the world from our partners and friends.  Discover some of the most popular listings in Sydney.</span>
            </h3>
          </div>
        </div>

        <div className="row icons-container">
          <div className="col-md-4">
            <div className="icon-box-2 with-line">
              <i className="im im-icon-Map2"></i>
              <h3>Find Interesting Place</h3>
              <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="icon-box-2 with-line">
              <i className="im im-icon-Mail-withAtSign"></i>
              <h3>Contact a Few Owners</h3>
              <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum metus nullam viverra porta purus.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="icon-box-2">
              <i className="im im-icon-Checked-User"></i>
              <h3>Make a Reservation</h3>
              <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin feugiat pharetra consectetur.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Parallax */}
      <div className="parallax"
        data-background="/images/slider-bg-02.jpg"
        data-color="#36383e"
        data-color-opacity="0.6"
        data-img-width="800"
        data-img-height="505"
        style={{ marginTop: 120}}
        >

        <div className="text-content white-font">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-8">
                <h2>Streamline Your Business</h2>
                <p>We’re full-service, local agents who know how to find people and home each together. We use online tools with an unmatched search capability to make you smarter and faster.</p>
                <a href="listings-list-with-sidebar.html" className="button margin-top-25">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Little footer */}
      <section className="fullwidth margin-top-40 margin-bottom-0 padding-top-60 padding-bottom-65" data-background-color="#ffffff">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <h3 className="headline centered margin-bottom-40 margin-top-10">Companies We've Worked With <span>We can assist you with your innovation or commercialisation journey!</span></h3>
            </div>

            <div className="col-md-12">
              <div className="logo-slick-carousel dot-navigation">

                <div className="item">
                  <img src="images/logo-01.png" alt="" />
                </div>

                <div className="item">
                  <img src="images/logo-02.png" alt="" />
                </div>

                <div className="item">
                  <img src="images/logo-03.png" alt="" />
                </div>

                <div className="item">
                  <img src="images/logo-04.png" alt="" />
                </div>

                <div className="item">
                  <img src="images/logo-05.png" alt="" />
                </div>

                <div className="item">
                  <img src="images/logo-06.png" alt="" />
                </div>

                <div className="item">
                  <img src="images/logo-07.png" alt="" />
                </div>


              </div>
            </div>

          </div>
        </div>
      </section>


    </Layout>
  )
}
