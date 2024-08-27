import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./style.scss";


// Directly use relative paths as served by Next.js from the public folder
const GameGif = '/assets/gifs/game.gif';
const GameThumbnail = '/assets/svg/game_thumbnail.svg';
const CreatorMyactivity = () => {

    const [thumbnailSrc, setThumbnailSrc] = useState(GameThumbnail);
    const handleMouseEnter = () => {
        setThumbnailSrc(GameGif); // Change to GIF on hover
    };

    const handleMouseLeave = () => {
        setThumbnailSrc(GameThumbnail); // Revert back to the original image on mouse leave
    };

    const imgStyle = {
        height: '240px', // Set desired height
        width: '100%',   // Set desired width, ensures it adjusts with the container
        objectFit: 'cover', // Ensures the image is scaled to cover the container without distorting aspect ratio
        borderRadius: "12px "
    };
    return (
        <Container className='mt-5'>
            <Row>
                <div className='livestreambox1'>
                    <h3>My Activity</h3>
                    <p className='pgray'>Creators you are following, their updates show up in your timeline.</p>
                    <hr className="custom-hr" />

                    <div className='author_with_time'>
                        <div className='author_details_withimage'>
                            <img src="/assets/svg/avtar_with_tick.svg" alt='' />
                            <div className='authordetails'>
                                <h6 className='author_spanname'>Mason Cooper</h6>
                                <p className='author_emailspan'>@mason_cooper</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span className='timerspan'>5 hrs ago</span>
                            <span>...</span>
                        </div>
                    </div>
                    <div className='headingblue mt-3'><p>Thank you for this gift <a href=''>@pixelwarrior</a></p></div>

                    <div className='livestreambox1'>
                        <div className='author_with_time' style={{ margin: '0' }}>
                            <div className='author_details_withimage'>
                                <img src="/assets/svg/avatar1.svg" alt='' />
                                <div className='authordetails'>
                                    <h6 className='author_spanname'>PixelWarrior</h6>
                                    <p className='author_emailspan'>@pixelwarrior gifted you <a href=''>PlayStation PS5 Dual Controller Marvel Spiderman 2</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className='author_with_time'>
                        <div className='author_details_withimage'>
                            <img src="/assets/svg/avtar_with_tick.svg" alt='' />
                            <div className='authordetails'>
                                <h6 className='author_spanname'>Mason Cooper</h6>
                                <p className='author_emailspan'>@mason_cooper</p>
                            </div>
                        </div>
                        <div>
                            <span className='timerspan'>6 hrs ago</span>
                        </div>
                    </div>
                    <div className='headingblue mt-3'><p>Fastest CSGO Ace Ever? [SHROUD]</p></div>

                    <Row className={`align-items-center ${'giftmainbox'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Col md={4} className={"giftrightboximg_2"}>
                            {/* <img className='img-fluid' src={thumbnailSrc} alt="Game Thumbnail" style={imgStyle} /> */}
                            <img className='img-fluid' src={thumbnailSrc} alt="Game Thumbnail" style={imgStyle} />
                        </Col>
                        <Col md={8} className={'giftrightbox_2'}>
                            <h3>Fastest CSGO Ace Ever? [SHROUD]</h3>
                            <p className={'giftdescription_2'} style={{ color: "#99A1B7" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.</p>

                            <div className={"authro_with_live"}>
                                <div>
                                    <img src="/assets/svg/twitch_svg.svg" alt="" />
                                    <span>Twitch</span>
                                </div>
                                <div>
                                    <div>
                                        <img src="/assets/svg/browse_creators.svg" alt="" />
                                        <span>1K</span>
                                        <img src="/assets/svg/giftnumber.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <button className={'get_notifiedcss'}>Play Stream</button>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    )
}

export default CreatorMyactivity