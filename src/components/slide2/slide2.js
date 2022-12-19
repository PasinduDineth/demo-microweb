import './slide2.css';
import Slider from "react-slick";
import CarouselItem from "../carouselItem/carouselItem";
import {IoIosArrowDropleftCircle} from "react-icons/io";
import {IoIosArrowDroprightCircle} from "react-icons/io";
import React from "react";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function Slide2({isOpen, data}) {
    function getImage(type) {
            return data.sliderTwoImages.find(img => img.type === type)
    }
    const css = `@media (max-width: 767px) {
    .main_view {
        background-image: url("${getImage("SMALL").url}")
    }
}
@media (min-width: 768px) {
    .main_view {
        background-image: url("${getImage("MEDIUM").url}");
    }
}
@media (min-width: 992px) {
    .main_view {
        background-image: url("${getImage("LARGE").url}");
    }
}
@media (min-width: 1200px) {
    .main_view {
        background-image: url("${getImage("LARGE").url}");
    }
}
`;
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [

            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const slider = React.useRef(null);
    return (
        <>
            <style scoped>{css}</style>
            <div className="main_view" style={{opacity: !isOpen ? "0" : "1", transition: "all .8s", visibility: !isOpen ? "hidden" : "visible"}}>
                <div className="logo_nav_wrapper">
                    <div>
                        <img src={data.logoImage}/>
                    </div>
                    <p className="nav_bar_text">DISCOVER MORE</p>
                </div>
                <div className="carousel_wrapper">
                    <div>
                        <h1>{data.sliderTwoHeader}</h1>
                        <Slider ref={slider} {...settings}>
                            {data.carouselItems.map(itm =>
                                <CarouselItem itemTitle={itm.itemTitle} iteamDescription={itm.iteamDescription}/>
                            )}
                        </Slider>
                        <div className="arrow_wrapper">
                            <IoIosArrowDropleftCircle color="white" size="2em" onClick={() => slider?.current?.slickPrev()} className="swing"/>
                            <IoIosArrowDroprightCircle color="white" size="2em" onClick={() => slider?.current?.slickNext()} className="swing"/>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    );
}

export default Slide2;
