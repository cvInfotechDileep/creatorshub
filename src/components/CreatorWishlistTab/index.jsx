import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./style.scss"

const wishlistItems = [
    {
        img: "/assets/svg/wishlist1.svg",
        title: 'Lakme Absolute Blur Perfect Matte Face...',
        price: 19,
        link: 'amazon.com'
    },
    {
        img: "/assets/svg/wishlist2.svg",
        title: 'RENEE Glass Glow Pre Make-up Oil Primer...',
        price: 34,
        link: 'flipkart.com'
    },
    {
        img: "/assets/svg/wishlist3.svg",
        title: 'boAt Rockerz 450 Bluetooth On Ear...',
        price: 28,
        link: 'amazon.com'
    },
    {
        img: "/assets/svg/wishlist4.svg",
        title: 'Lakme Absolute Blur Perfect Matte Face...',
        price: 86,
        link: 'flipkart.com'
    },
    {
        img: "/assets/svg/wishlist5.svg",
        title: 'The FloralMart Fresh Flowers Bouquet...',
        price: 81,
        link: 'amazon.com'
    },
    {
        img: "/assets/svg/wishlist6.svg",
        title: 'VGRASSP Handheld Video Game Console...',
        price: 19,
        link: 'amazon.com'
    },
    {
        img: "/assets/svg/wishlist7.svg",
        title: 'EFERMONE® International Edition...',
        price: 19,
        link: 'amazon.com'
    },
    {
        img: "/assets/svg/wishlist8.svg",
        title: 'Sonata Women Polyurethane Pink...',
        price: 19,
        link: 'amazon.com'
    }
];

const CreatorWishlistTab = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <div className='livestreambox1'>
                    <h3 className='h2heading'>Wishlist</h3>
                    <p className='pgray_b1'>Explore my carefully curated and exquisite wishlist.</p>
                    <div className='hrline'></div>
                    <Row>
                        {wishlistItems.map((item, index) => (
                            <Col xl={3} key={index}>
                                <div className='allmediaouter'>
                                    <img src={item.img} alt="" className='streamthumbnail' />
                                    <p className='pblack_b1'>{item.title}</p>
                                    <div className="productGiftprice2">$ <span>{item.price}</span></div>
                                    <div className='d-flex'>
                                        <div className='flex-grow-1 d-flex gap-2 align-items-center'>
                                            <img src="/assets/svg/linksimg.svg" alt=""  style={{width:"24px"}}/>
                                            <div className='pgray_b3'>{item.link}</div>
                                        </div>
                                        <div><img src="/assets/svg/editIcon.svg" alt="" /></div>
                                        <div><img src="/assets/svg/deleteIcon1.svg" alt="" /></div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Row>
        </Container>
    );
}

export default CreatorWishlistTab;
