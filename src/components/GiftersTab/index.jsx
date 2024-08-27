import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.scss'

const gifts = [
    {
        image: '/assets/svg/gifters1.svg',
        description: 'ZEBRONICS ZEB-SBSPK 6 (Juke bar 4101) 110 W...',
        giftedBy: '@mason_cooper',
        link: 'amazon.com'
    },
    {
        image: '/assets/svg/gifters2.svg',
        description: 'Running Shoes For Women',
        giftedBy: '@mason_cooper',
        link: 'flipkart.com'
    },
    {
        image: '/assets/svg/gifters3.svg',
        description: 'Puma Kinta Wns Sneakers For Women (Purple)',
        giftedBy: '@mason_cooper',
        link: 'amazon.com'
    },
    {
        image: '/assets/svg/gifters4.svg',
        description: 'Solid Men Black Gym Shorts, Sports Shorts...',
        giftedBy: '@mason_cooper',
        link: 'flipkart.com'
    },
    {
        image: '/assets/svg/gifters5.svg',
        description: 'MY TYA Makeup Kit + Hello Kitty Makeup...',
        giftedBy: '@mason_cooper',
        link: 'flipkart.com'
    },
    {
        image: '/assets/svg/gifters6.svg',
        description: 'COI To Do List Notepad | Daily...',
        giftedBy: '@mason_cooper',
        link: 'flipkart.com'
    },
    {
        image: '/assets/svg/gifters7.svg',
        description: 'Men Full Sleeve Graphic Print Hooded Sweatshirt',
        giftedBy: '@mason_cooper',
        link: 'amazon.com'
    },
    {
        image: '/assets/svg/gifters8.svg',
        description: 'Classmate Origami Longbook - Unruled, 27...',
        giftedBy: '@mason_cooper',
        link: 'amazon.com'
    }
];

const GiftersTab = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <div className='livestreambox1'>
                    <h3 className='h2heading'>Received Gifts</h3>
                    <p className='pgray_b1'>Discover the array of thoughtful and exquisite gifts I have received.</p>
                    <div className='hrline'></div>
                    <Row>
                        {gifts.map((gift, index) => (
                            <Col key={index} xl={3}>
                                <div className='allmediaouter'>
                                    <img src={gift.image} alt="Gift" className='streamthumbnail' />
                                    <p className='h4heading'>{gift.description}</p>
                                    <div className="checktotalleft extraspace1">Gifted by <span>{gift.giftedBy}</span></div>
                                    <div className='socialboxshare2'>
                                        <img src="/assets/svg/linksimg.svg" alt="Link icon" />
                                        <div className='pgray_b3'>{gift.link}</div>
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

export default GiftersTab;
