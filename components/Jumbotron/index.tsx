import { useEffect } from "react";

declare let revslider_showDoubleJqueryError: any;
declare let jQuery: any;

const Jumbotron = () => {

    useEffect(() => {
        const tpj = jQuery;
        let revapi4;
        
            if (tpj("#rev_slider_4_1").revolution === undefined) {
                revslider_showDoubleJqueryError("#rev_slider_4_1");
            } else {
                revapi4 = tpj("#rev_slider_4_1").show().revolution({
                    sliderType: "standard",
                    jsFileLocation: "../scripts/",
                    sliderLayout: "auto",
                    dottedOverlay: "none",
                    delay: 9000,
                    navigation: {
                        keyboardNavigation: "off",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "on",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            swipe_direction: "horizontal",
                            drag_block_vertical: false
                        }
                        ,
                        arrows: {
                            style: "zeus",
                            enable: true,
                            hide_onmobile: true,
                            hide_under: 600,
                            hide_onleave: true,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            tmp: '<div class="tp-title-wrap"></div>',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 40,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 40,
                                v_offset: 0
                            }
                        }
                        ,
                        bullets: {
                            enable: false,
                            hide_onmobile: true,
                            hide_under: 600,
                            style: "hermes",
                            hide_onleave: true,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 32,
                            space: 5,
                            tmp: ''
                        }
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels: [1200, 992, 768, 480],
                    visibilityLevels: [1200, 992, 768, 480],
                    gridwidth: [1180, 1024, 778, 480],
                    gridheight: [640, 500, 400, 300],
                    lazyType: "none",
                    parallax: {
                        origo: "slidercenter",
                        speed: 2000,
                        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 25, 47, 48, 49, 50, 51, 55],
                        type: "mouse",
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
    })
    return (
        <div id="rev_slider_4_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="classicslider1" style={{ margin: '0px auto', backgroundColor: 'transparent', padding: 0, marginTop: 0, marginBottom: 0 }}>
            <div id="rev_slider_4_1" className="rev_slider home fullwidthabanner" style={{ display: 'none' }} data-version="5.0.7">
                <ul>
                    <li data-index="rs-1" data-transition="fade" data-slotamount="default" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="1000" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="800" data-fsslotamount="7" data-saveperformance="off">

                        <img src="/images/slider-bg-01.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina data-kenburns="on" data-duration="12000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" />

                        <div className="tp-caption custom-caption-2 tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0"
                            id="slide-1-layer-2"
                            data-x="['left','left','left','left']"
                            data-hoffset="['0','40','40','40']"
                            data-y="['middle','middle','middle','middle']" data-voffset="['0']"
                            data-width="['640','640', 640','420','320']"
                            data-height="auto"
                            data-whitespace="nowrap"
                            data-transform_idle="o:1;"
                            data-transform_in="y:0;opacity:0;s:1000;e:Power2.easeOutExpo;s:400;e:Power2.easeOutExpo"
                            data-transform_out=""
                            data-mask_in="x:0px;y:[20%];s:inherit;e:inherit;"
                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                            data-start="1000"
                            data-responsive_offset="on">

                            <div className="R_title margin-bottom-15"
                                id="slide-2-layer-1"
                                data-x="['left','center','center','center']"
                                data-hoffset="['0','0','40','0']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['-40','-40','-20','-80']"
                                data-fontsize="['42','36', '32','36','22']"
                                data-lineheight="['70','60','60','45','35']"
                                data-width="['640','640', 640','420','320']"
                                data-height="none" data-whitespace="normal"
                                data-transform_idle="o:1;"
                                data-transform_in="y:-50px;sX:2;sY:2;opacity:0;s:1000;e:Power4.easeOut;"
                                data-transform_out="opacity:0;s:300;"
                                data-start="600"
                                data-splitin="none"
                                data-splitout="none"
                                data-basealign="slide"
                                data-responsive_offset="off"
                                data-responsive="off"
                                style={{ zIndex: 6, color: '#fff', letterSpacing: 0, fontWeight: 600 }}>Discover City Gems</div>

                            <div className="caption-text">Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures.</div>
                            <a href="#" className="button medium">Get Started</a>
                        </div>

                    </li>

                    <li data-index="rs-2" data-transition="fade" data-slotamount="default" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="1000" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="800" data-fsslotamount="7" data-saveperformance="off">

                        <img src="/images/slider-bg-02.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina data-kenburns="on" data-duration="12000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="112" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" />

                        <div className="tp-caption custom-caption-2 tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0"
                            id="slide-2-layer-2"
                            data-x="['left','left','left','left']"
                            data-hoffset="['0','40','40','40']"
                            data-y="['middle','middle','middle','middle']" data-voffset="['0']"
                            data-width="['640','640', 640','420','320']"
                            data-height="auto"
                            data-whitespace="nowrap"
                            data-transform_idle="o:1;"
                            data-transform_in="y:0;opacity:0;s:1000;e:Power2.easeOutExpo;s:400;e:Power2.easeOutExpo"
                            data-transform_out=""
                            data-mask_in="x:0px;y:[20%];s:inherit;e:inherit;"
                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                            data-start="1000"
                            data-responsive_offset="on">

                            <div className="R_title margin-bottom-15"
                                id="slide-2-layer-3"
                                data-x="['left','center','center','center']"
                                data-hoffset="['0','0','40','0']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['-40','-40','-20','-80']"
                                data-fontsize="['42','36', '32','36','22']"
                                data-lineheight="['70','60','60','45','35']"
                                data-width="['640','640', 640','420','320']"
                                data-height="none" data-whitespace="normal"
                                data-transform_idle="o:1;"
                                data-transform_in="y:-50px;sX:2;sY:2;opacity:0;s:1000;e:Power4.easeOut;"
                                data-transform_out="opacity:0;s:300;"
                                data-start="600"
                                data-splitin="none"
                                data-splitout="none"
                                data-basealign="slide"
                                data-responsive_offset="off"
                                data-responsive="off"
                                style={{ zIndex: 6, color: '#fff', letterSpacing: 0, fontWeight: 600 }}>Streamline Your Business</div>

                            <div className="caption-text">Proactively envisioned multimedia based on expertise cross-media growth strategies. Pontificate installed base portals after maintainable products.</div>
                            <a href="#" className="button medium">Read More</a>
                        </div>

                    </li>

                </ul>
                <div className="tp-static-layers"></div>

            </div>
        </div>
    )
}

export default Jumbotron;