import React, { useState } from 'react';
import Slider from 'react-slick';
import './style.scss'
import { Col, Row } from 'react-bootstrap';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <>
            <img className={className} onClick={onClick} src='/assets/svg/slickArrownext.svg' />
        </>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <>
            <img className={className} onClick={onClick} src='/assets/svg/slickArrowprev.svg' />
        </>
    );
}

const SilckSlider = () => {

    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (index) => {
        setIsHovered(index);
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // nextArrow: "/assets/svg/slickArrownext.svg",
        // prevArrow: "/assets/svg/slickArrowprev.svg",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };

    const imgStyle = {
        height: '160px', // Set desired height
        width: '100%',   // Set desired width, ensures it adjusts with the container
        objectFit: 'cover' // Ensures the image is scaled to cover the container without distorting aspect ratio
    };
    return (
        <>
            <Slider {...settings}>
                <Col>
                    <img src="/assets/svg/live_countdown.svg" alt="" className='live_stream_thumbnailimg' style={imgStyle} />
                    <p className='pblue'>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                    <Row>
                        <div className='authro_with_live_1'>
                            <img src="/assets/svg/Avatar.svg" alt="" /> <span>Mark Villiams</span>
                        </div>
                        <Col xl='12'>
                            <button className='get_notifiedcss'><span>+</span> Get Notified</button>
                        </Col>
                    </Row>
                </Col>
                <Col
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                    className="liveVideocard"
                >
                    <img
                        src={isHovered === 1 ? "/assets/gifs/girl1.gif" : "/assets/svg/LiveStreamThumbnail.svg"}
                        style={imgStyle}
                        alt=""
                        className='live_stream_thumbnailimg'
                    />
                    <p className='pblue'>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                    <div className='authro_with_live'>
                        <div className='authro_with_live_1'>
                            <img src="/assets/svg/Avatar.svg" alt="" /> <span>Kelly Normna</span>
                        </div>
                        <div>
                            <div className='authro_with_live_2'>
                                <img src="/assets/svg/eye.svg" alt="" style={{ float: "red" }} /> <span>1K</span> <img src="/assets/svg/livebox.svg" alt='' />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                    className="liveVideocard"
                >
                    <img
                        src={isHovered === 2 ? "/assets/gifs/girl2.gif" : "/assets/svg/live_stream_2.svg"}
                        alt=""
                        style={imgStyle}
                        className='live_stream_thumbnailimg'
                    />
                    <p className='pblue'>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                    <div className='authro_with_live'>
                        <div className='authro_with_live_1'>
                            <img src="/assets/svg/Avatar.svg" alt="" /> <span>Kelly Normna</span>
                        </div>
                        <div>
                            <div className='authro_with_live_2'>
                                <img src="/assets/svg/eye.svg" alt="" style={{ float: "red" }} /> <span>1K</span> <img src="/assets/svg/livebox.svg" alt='' />
                            </div>
                        </div>
                    </div>
                </Col>
            </Slider>
        </>
    );
};

export default SilckSlider;
