export default function VendorScripts() {
    const APIKey = process.env.NEXT_PUBLIC_MAP_API;
    return (
        <>
            <script type="text/javascript" src="/scripts/jquery-3.6.0.min.js"></script>
            <script type="text/javascript" src="/scripts/jquery-migrate-3.3.2.min.js"></script>
            <script type="text/javascript" src="/scripts/mmenu.min.js"></script>
            <script type="text/javascript" src="/scripts/chosen.min.js"></script>
            <script type="text/javascript" src="/scripts/slick.min.js"></script>
            <script type="text/javascript" src="/scripts/rangeslider.min.js"></script>
            <script type="text/javascript" src="/scripts/magnific-popup.min.js"></script>
            <script type="text/javascript" src="/scripts/waypoints.min.js"></script>
            <script type="text/javascript" src="/scripts/counterup.min.js"></script>
            <script type="text/javascript" src="/scripts/jquery-ui.min.js"></script>
            <script type="text/javascript" src="/scripts/tooltips.min.js"></script>
            <script type="text/javascript" src="/scripts/custom.js"></script>

            <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&amp;language=en"></script>
            <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${APIKey}&callback=singleListingMap`}></script>
            <script type="text/javascript" src="/scripts/infobox.min.js"></script>
            <script type="text/javascript" src="/scripts/markerclusterer.js"></script>
            <script type="text/javascript" src="/scripts/maps.js"></script>


            <script type="text/javascript" src="/scripts/extensions/revolution.extension.actions.min.js"></script>
            <script type="text/javascript" src="/scripts/extensions/revolution.extension.carousel.min.js"></script>
            <script type="text/javascript" src="/scripts/extensions/revolution.extension.kenburn.min.js"></script>
            <script type="text/javascript" src="/scripts/extensions/revolution.extension.layeranimation.min.js"></script>
            <script type="text/javascript" src="/scripts/extensions/revolution.extension.migration.min.js"></script>
            <script type="text/javascript" src="/scripts/extensions/revolution.extension.navigation.min.js"></script>
            <script type="text/javascript" src="/scripts/extensions/revolution.extension.parallax.min.js"></script>
            <script type="text/javascript" src="/scripts/extensions/revolution.extension.slideanims.min.js"></script>
            <script type="text/javascript" src="/scripts/extensions/revolution.extension.video.min.js"></script>
            <script src="scripts/parallax.min.js"></script>

            <script type="text/javascript" src="scripts/themepunch.tools.min.js"></script>
            <script type="text/javascript" src="scripts/themepunch.revolution.min.js"></script>
        </>
    )
}