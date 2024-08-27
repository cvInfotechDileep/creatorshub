import React from 'react';
import Slider from 'react-slick';
import "./style.scss"
import { Col } from 'react-bootstrap';

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

const Giftcarousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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

    return (
        <Slider {...settings}>
            <Col xl='6'>
                <div className='collectionright'>
                    <img src="/assets/svg/paint_canvas.svg" alt="" />
                    <p className='gifttitle'>Easel And Paint Canvas</p>
                    <div className='pricebox mb-3'>
                        <span style={{fontSize:"16px", color:"#929FB1"}}>$</span>
                        <p className='m-0' style={{fontSize:"24px", fontWeight:"600", color:"#404B5A"}}>2,222</p>
                    </div>
                    <p className='giftdescription'>Discover our high-quality paint canvases, perfect for artists of all levels. Our canvases offer a smooth, durable surface, ideal for oil, acrylic, and watercolor paints. Shop now to elevate your artistic creations with our premium canvases.</p>
                    <div className='marketplace d-flex align-items my-3 gap-2'>
                        <img src="/assets/svg/amazon.svg" alt="" />
                        <p className="m-0">amazon.com</p>
                    </div>
                    <div className='giftwrap'>
                        <img src="/assets/svg/giftbutton.svg" alt="" />
                        <button className='btn btn-outline-primary' style={{fontWeight:"600"}}>View Wishlist</button>
                    </div>
                </div>
            </Col>
            <Col xl='6'>
                <div className='collectionright'>
                    <img src="/assets/svg/makeupbox.svg" alt="" />
                    <p className='gifttitle'>ARTEZA Outdoor Acrylic Paint, Set of 20 Colors/Tubes (59ml)</p>
                    <div className='pricebox mb-3'>
                        <span style={{fontSize:"16px", color:"#929FB1"}}>$</span>
                        <p className='m-0' style={{fontSize:"24px", fontWeight:"600", color:"#404B5A"}}>2,222</p>
                    </div>
                    <p className='giftdescription'>Discover our high-quality paint canvases, perfect for artists of all levels. Our canvases offer a smooth, durable surface, ideal for oil, acrylic, and watercolor paints. Shop now to elevate your artistic creations with our premium canvases.</p>
                    <div className='marketplace d-flex align-items my-3 gap-2'>
                        <img src="/assets/svg/amazon.svg" alt="" />
                        <p className="m-0">amazon.com</p>
                    </div>
                    <div className='giftwrap'>
                        <img src="/assets/svg/giftbutton.svg" alt="" />
                        <button className='btn btn-outline-primary' style={{fontWeight:"600"}}>View Wishlist</button>
                    </div>
                </div>
            </Col>
        </Slider>
    );
};

export default Giftcarousel