import Head from 'next/head';

export default function VendorScripts() {
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
            <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCiDWRNXD28SNRErYSSp3hTiYES4VhdDa0&callback=singleListingMap"
                async defer></script>
            <script type="text/javascript" src="/scripts/infobox.min.js"></script>
            <script type="text/javascript" src="/scripts/markerclusterer.js"></script>
            <script type="text/javascript" src="/scripts/maps.js"></script>
        </>
    )
}