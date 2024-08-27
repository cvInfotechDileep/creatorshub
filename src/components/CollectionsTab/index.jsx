import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const collectionsData = [
    {
        img: "/assets/svg/collection1.svg",
        title: 'Painting',
        gifts: 3,
    },
    {
        img: "/assets/svg/collection2.svg",
        title: 'Gaming',
        gifts: 8,
    },
    {
        img: "/assets/svg/collection3.svg",
        title: 'Reading',
        gifts: 2,
    },
    {
        img: "/assets/svg/collection2.svg",
        title: 'Painting',
        gifts: 3,
    },
    {
        img: "/assets/svg/collection3.svg",
        title: 'Gaming',
        gifts: 8,
    },
    {
        img: "/assets/svg/collection1.svg",
        title: 'Reading',
        gifts: 2,
    },
];

const CollectionsTab = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <div className='livestreambox1'>
                    <h3 className='h2heading'>Gift Collections</h3>
                    <p className='pgray_b1'>Discover my collective elegantly curated wishlist here.</p>
                    <hr className={"custom-hr"} />
                    <Row>
                        {collectionsData.map((collection, index) => (
                            <Col xl={4} key={index}>
                                <div className='allmediaouter'>
                                    <img src={collection.img} alt="" className='streamthumbnail' />
                                    <div className='socialboxshare'>
                                        <p className='h3heading'>{collection.title}</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className="d-flex gap-1 rounded-pill px-2 border border-1">
                                            <img src="/assets/svg/gifticon.svg" alt="" />
                                            <div><span>{collection.gifts}</span> gifts</div>
                                        </div>
                                        <div className='dotsclass'>...</div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Row>
        </Container>
    )
}

export default CollectionsTab
