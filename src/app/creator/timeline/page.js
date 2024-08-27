"use client"
import { useEffect, useState } from 'react';
import PrivateRoute from '../../../components/PrivateRoute';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./../../../styles/creatortimeline.module.scss";
import SilckSlider from '@/components/SlickSlider';
import Giftcarousel from '@/components/Giftcarousel';
import UsersTab from '@/components/UsersTab';
import ExploreCreators from '@/components/ExploreCreators';
import ExploreStreamers from '@/components/ExploreStreamers';
import TopUsersTab from '@/components/TopUsersTab';
import AddPost from '@/components/AddPost';

// Directly use relative paths as served by Next.js from the public folder
const GameGif = '/assets/gifs/game.gif';
const GameThumbnail = '/assets/svg/game_thumbnail.svg';
export default function CreatorTimeline() {
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
    <>
      <PrivateRoute allowedRoles={['creator']}>
        <Container>
          <Row>
            <Col md={9} sm={12}>
              <Row className={`bg-white ${styles['livestreambox1']}`}>
                <AddPost />
              </Row>
              <Row className={`bg-white ${styles['livestreambox1']} my-4`}>
                <h3>Live Streams</h3>
                <p className={styles['pgray']} style={{ color: "#99A1B7" }}>Upcoming & on-going live streams from creators you follow.</p>
                <hr className={styles["custom-hr"]} />
                <SilckSlider />
              </Row>
              <Row className={`bg-white ${styles['livestreambox1']} my-4`}>
                <Row>
                  <h3>Creators Hub</h3>
                  <p className={styles['pgray']} style={{ color: "#99A1B7" }}>Stay up to date with updates from your favorite creators.</p>
                  <hr className={styles["custom-hr"]} />

                </Row>
                <Row>
                  <div className={styles['author_with_time']}>
                    <div className={styles['author_details_withimage']}>
                      <img src="/assets/svg/Avatar.svg" alt='' />
                      <div className={styles['authordetails']}>
                        <h6 className={styles['author_spanname']}>Kelly Norman</h6>
                        <p className={styles['author_emailspan']} style={{ color: "#99A1B7" }}>@kellynorman</p>
                      </div>
                    </div>
                    <div>
                      <span className={styles['timerspan']}>2 hrs ago</span>
                    </div>
                  </div>
                  <div className={`mt-3 ${styles['headingblue']}`}>
                    <p>Add a new gift option to his wishlist.</p>
                  </div>
                  <Row className={`align-items-center ${styles['giftmainbox']}`}>
                    <Col md={3}>
                      <img className='img-fluid' src="/assets/svg/gameremote.svg" alt="" />
                    </Col>
                    <Col md={9}>
                      <div className={styles['giftrightbox']}>
                        <h3 className='m-0'>Sony PS5 Dual Controller Marvel Spiderman 2</h3>
                        <div className={`mb-2 ${styles['pricebox']}`}>
                          <span>$</span>
                          <p className='m-0' style={{ fontSize: "24px", fontWeight: "600", color: "#404B5A" }}>2,222</p>
                        </div>
                        <p className={styles['giftdescription_2']}>Gift Mark the brand new sony PS5 dual controller Marvel Spiderman</p>
                        <div className={styles['giftwrap']}>
                          <img src="/assets/svg/giftbutton.svg" alt="" />
                          <button className='btn btn-outline-primary' style={{ fontWeight: "600" }}>View Wishlist</button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <div className={styles['author_with_time']}>
                    <div className={styles['author_details_withimage']}>
                      <img src="/assets/svg/Avatar.svg" alt='' />
                      <div className={styles['authordetails']}>
                        <p className={styles['author_spanname']}>Kelly Norman</p>
                        <p className={styles['author_emailspan']}>@kellynorman</p>
                      </div>
                    </div>
                    <div>
                      <span className={styles['timerspan']}>2 hrs ago</span>
                    </div>
                  </div>
                  <div className={`mt-3 ${styles['headingblue']}`}>
                    <p>Add new gifts option to her “Painting” collection.</p>
                  </div>
                  <Row>
                    <Col md={4} sm={12}>
                      <img src="/assets/svg/painting_vertical.svg" alt="" className={styles['vertivalIMG']} /></Col>
                    <Col md={8} sm={12}>
                      <Giftcarousel />
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <div className={styles['author_with_time']}>
                    <div className={styles['author_details_withimage']}>
                      <img src="/assets/svg/Avatar.svg" alt='' />
                      <div className={styles['authordetails']}>
                        <p className={styles['author_spanname']}>Kelly Norman</p>
                        <p className={styles['author_emailspan']}>@kellynorman</p>
                      </div>
                    </div>
                    <div>
                      <span className={styles['timerspan']}>2 hrs ago</span>
                    </div>
                  </div>
                  <div className={`mt-3 ${styles['headingblue']}`}>
                    <p>Thank you for this gift <a href="">@username#01</a></p>
                  </div>
                  <Row className={`align-items-center ${styles['giftmainbox']}`}>
                    <div className='thank_user_box'>
                      <div className='author_details_withimage'>
                        <img src="/assets/svg/username.svg" alt='' />
                        <div className='authordetails'>
                          <p className='author_spanname'>Username</p>
                          <p className='author_emailspan'>@username#01 gifted you <a href=''>PlayStation PS5 Dual Controller Marvel Spiderman 2</a></p>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Row>
                <Row>
                  <div className={styles['author_with_time']}>
                    <div className={styles['author_details_withimage']}>
                      <img src="/assets/svg/Avatar.svg" alt='' />
                      <div className={styles['authordetails']}>
                        <h6 className={styles['author_spanname']}>Kelly Norman</h6>
                        <p className={styles['author_emailspan']}>@kellynorman</p>
                      </div>
                    </div>
                    <div>
                      <span className={styles['timerspan']}>2 hrs ago</span>
                    </div>
                  </div>
                  <div className={`mt-3 ${styles['headingblue']}`}>
                    <p>Thank you for this gift <a href="">@username#01</a></p>
                  </div>
                  <Row className={`align-items-center ${styles['giftmainbox']}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Col md={4} className={styles["giftrightboximg_2"]}>
                      {/* <img className='img-fluid' src={thumbnailSrc} alt="Game Thumbnail" style={imgStyle} /> */}
                      <img className='img-fluid' src={thumbnailSrc} alt="Game Thumbnail" style={imgStyle} />
                    </Col>
                    <Col md={8} className={styles['giftrightbox_2']}>
                      <h3>Fastest CSGO Ace Ever? [SHROUD]</h3>
                      <p className={styles['giftdescription_2']} style={{ color: "#99A1B7" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.</p>

                      <div className={styles["authro_with_live"]}>
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

                      <button className={styles['get_notifiedcss']}>Play Stream</button>
                    </Col>
                  </Row>
                </Row>
              </Row>
            </Col>
            <Col md={3} sm={12}>
              <UsersTab />
              <ExploreCreators />
              <ExploreStreamers />
              <TopUsersTab />
            </Col>
          </Row>
        </Container >
      </PrivateRoute>
    </>
  );
}
