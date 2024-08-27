import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./style.scss"
const mediaItems = [
    {
        id: 1,
        thumbnail: "/assets/Images/streamingthumbnail.png",
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 2,
        thumbnail: "/assets/svg/streamingthumbnail2.svg",
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 3,
        thumbnail: "/assets/Images/streamingthumbnail.png",
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 4,
        thumbnail: "/assets/Images/streamingthumbnail.png",
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 5,
        thumbnail: "/assets/svg/streamingthumbnail2.svg",
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 6,
        thumbnail: "/assets/Images/streamingthumbnail.png",
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 7,
        thumbnail: "/assets/Images/streamingthumbnail.png",
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 8,
        thumbnail: "/assets/svg/streamingthumbnail2.svg",
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 9,
        thumbnail: "/assets/Images/streamingthumbnail.png",
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    }
];
const CreaterMedia = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <div className='livestreambox1'>
                    <h3 className='h2heading'>All Media</h3>
                    <p className='pgray_b1'>Explore my captivating media collection.</p>
                    <hr className={"custom-hr"} />
                    <Row>
                        {mediaItems.map(item => (
                            <Col xl={4} key={item.id}>
                                <div className='allmediaouter'>
                                    <p className='h5heading'>{item.description}</p>
                                    <img src={item.thumbnail} alt="" className='streamthumbnail' />
                                    <div className='socialboxshare'>
                                        <img src="/assets/svg/heart.svg" alt="" />
                                        <img src="/assets/svg/comments.svg" alt="" />
                                        <img src="/assets/svg/sendtips.svg" alt="" />
                                    </div>
                                    <div className='socialboxview'>
                                        <img src="/assets/svg/eye.svg" alt="" />
                                        <span>{item.views}</span>
                                        <div>.</div>
                                        <div>{item.time}</div>
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

export default CreaterMedia;
