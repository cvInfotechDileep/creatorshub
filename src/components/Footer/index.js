'use client';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";

function Footer() {
    return (
        <div className={`${styles["footer-container"]}`}>
            <Container fluid className={`${styles["footer-wrapper"]}`}>
                <Row className={`mx-2 mb-2 ${styles["footer-wrapper-row"]}`}>
                    <Col className={`${styles["left-footer"]}`} sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <img src='/assets/svg/footerLogo.svg' />
                        <h6 >
                            <span className={`${styles["highlight-italic"]}`}> Creator </span>{" "}
                            <span className={`${styles["highlight"]}`}>
                                {" "}
                                <strong>Appreciation</strong>
                                <br className={`${styles["break-line"]}`} />
                            </span>{" "}
                            <span className={`${styles["rest-highlight"]}`}> Made Safe and Easy</span>
                        </h6>
                        <p className="pe-4">
                            {" "}
                            Fans support their favorite creators by sending them gifts, subscribing to their exclusive content or by tipping them for their hard work. All the while keeping both fans and creators safe by ensuring their personal information is kept private. We provide creators with all the important tools to create, share and then monetize their content.
                        </p>
                    </Col>
                    <Col
                        className={`${styles["right-footer"]}`}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        xxl={8}
                    >
                        <div style={{ width: "100%" }} >
                            <Row className={`${styles["social-or-link-row"]}`}>
                                <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={8} >
                                    {" "}
                                    <Row className="mt-5">
                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={4}
                                            lg={4}
                                            xl={4}
                                            xxl={4}
                                            className={`my-3 ${styles["col-links"]}`}
                                        >
                                            <h5 className={`${styles["highlight"]}`}>Quick Links</h5>
                                            <div className={`${styles["links"]}`}>
                                                <a href="">Home</a>
                                                <a href="">About Us</a>
                                                <a href="">Login</a>
                                                <a href="">How It Works</a>
                                            </div>
                                        </Col>
                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={4}
                                            lg={4}
                                            xl={4}
                                            xxl={4}
                                            className={`my-3 ${styles["col-links"]}`}
                                        >
                                            <h5 className={`${styles["highlight"]}`}>Help</h5>
                                            <div className={`${styles["links"]}`}>
                                                <a href="">FAQ & Help</a>
                                                <a href="">Contact</a>
                                                <a href="">Blog</a>
                                                <a href="">Support</a>
                                            </div>
                                        </Col>
                                        <Col
                                            sm={6}
                                            md={4}
                                            lg={4}
                                            xl={4}
                                            xxl={4}
                                            className={`my-3 ${styles["col-links"]}`}
                                        >
                                            <h5 className={`${styles["highlight"]}`}>Legal</h5>
                                            <div className={`${styles["links"]}`}>
                                                <a href="">Terms of Service</a>
                                                <a href="">Privacy Policy</a>
                                                <a href="">Data Security</a>
                                                <a href="">Careers</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4} className="col">
                                    <Row className={`${styles["footer-social-wrapper"]}`}>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={10} xxl={10} className={`${styles["footer-social-container"]} ${styles['col-links']}`}>
                                            <h5 className={`${styles["highlight"]}`}>Follow Us</h5>
                                            <Row className={`gap-1 ${styles["footer-social-icon-row"]}`}>
                                                <div className={`col-2 ${styles["footer-social-icon"]} ${styles['icon-container']}`}>
                                                    <a href="#" className={`${styles["social-icon"]}`}>
                                                        <img src="/assets/svg/facebook.svg" className={`${styles["hover-image"]}`} />
                                                        <img src="/assets/svg/footerfb1.svg" className={`${styles["animated-img"]}`} />
                                                    </a>
                                                </div>
                                                <div className={`col-2 ${styles["footer-social-icon"]} ${styles['icon-container']}`}>
                                                    <a href="#" className={`${styles["social-icon"]}`}>
                                                        <img src="/assets/svg/tiktok.svg" className={`${styles["hover-image"]}`} />
                                                        <img src="/assets/svg/footertiktok1.svg" className={`${styles["animated-img"]}`} />
                                                    </a>
                                                </div>
                                                <div className={`col-2 ${styles["footer-social-icon"]} ${styles['icon-container']}`}>
                                                    {/* <img src={instaSvg} /> */}
                                                    <a href="#" className={`${styles["social-icon"]}`}>
                                                        <img src="instagram" className={`${styles["hover-image"]}`} />
                                                        <img src="/assets/svg/footerinsta1.svg" className={`${styles["animated-img"]}`} />
                                                    </a>
                                                </div>
                                                <div className={`col-2 ${styles["footer-social-icon"]} ${styles['icon-container']}`}>
                                                    {/* <img src={twitchSvg} /> */}
                                                    <a href="#" className={`${styles["social-icon"]}`}>
                                                        <img src="/assets/svg/twitch.svg" className={`${styles["hover-image"]}`} />
                                                        <img src="/assets/svg/footertwitch1.svg" className={`${styles["animated-img"]}`} />
                                                    </a>
                                                </div>
                                                <div className={`col-2 ${styles["footer-social-icon"]} ${styles['icon-container']}`}>
                                                    {/* <img src={youtubeSvg} /> */}
                                                    <a href="#" className={`${styles["social-icon"]}`}>
                                                        <img src="/assets/svg/youtube.svg" className={`${styles["hover-image"]}`} />
                                                        <img src="/assets/svg/footeryoutube1.svg" className={`${styles["animated-img"]}`} />
                                                    </a>
                                                </div>
                                            </Row>
                                            <Row className={`mt-3 gap-1 ${styles["footer-social-icon-row"]}`}>
                                                <Col className={`col-2 ${styles["footer-social-icon"]} ${styles['icon-container']}`}>
                                                    {/* <img src={redditSvg} /> */}
                                                    <a href="#" className={`${styles["social-icon"]}`}>
                                                        <img src="/assets/svg/footerreddit2.svg" className={`${styles["hover-image"]}`} />
                                                        <img src="/assets/svg/footerreddit1.svg" className={`${styles["animated-img"]}`} />
                                                    </a>
                                                </Col>
                                                <Col className={`col-2 ${styles["footer-social-icon"]} ${styles['icon-container']}`}>
                                                    {/* <img src={chatSvg} /> */}
                                                    <a href="#" className={`${styles["social-icon"]}`}>
                                                        <img src="/assets/svg/footerchat2.svg" className={`${styles["hover-image"]}`} />
                                                        <img src="/assets/svg/footerchat1.svg" className={`${styles["animated-img"]}`} />
                                                    </a>
                                                </Col>
                                                <Col className={`col-2 ${styles["footer-social-icon"]} ${styles['icon-container']}`}>
                                                    {/* <img src={ytgamingSvg} /> */}
                                                    <a href="#" className={`${styles["social-icon"]}`}>
                                                        <img src="/assets/svg/footerytgaming2.svg" className={`${styles["hover-image"]}`} />
                                                        <img src="/assets/svg/footerytgaming1.svg" className={`${styles["animated-img"]}`} />
                                                    </a>
                                                </Col>
                                                <Col className={`col-2 ${styles["footer-social-icon"]} ${styles['icon-container']}`}>
                                                    {/* <img src={twitterSvg} /> */}
                                                    <a href="#" className={`${styles["social-icon"]}`}>
                                                        <img src="/assets/svg/twitter.svg" className={`${styles["hover-image"]}`} />
                                                        <img src="/assets/svg/footertwitter1.svg" className={`${styles["animated-img"]}`} />
                                                    </a>
                                                </Col>
                                                <Col className={`col-2 ${styles["footer-social-icon"]} ${styles['icon-container']}`}>
                                                    {/* <img src={offSvg} /> */}
                                                    <a href="#" className={`${styles["social-icon"]}`}>
                                                        <img src="/assets/svg/footerthread2.svg" className={`${styles["hover-image"]}`} />
                                                        <img src="/assets/svg/footerthread1.svg" className={`${styles["animated-img"]}`} />
                                                    </a>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className={`${styles["bottom-footer"]}`}>

                                <Col md={4} sm={12} xs={12}>
                                    <Row>
                                        <div className={`${styles["footer-para"]}`}>
                                            <p>
                                                Copyright © 2024, All Rights Reserved - MWP Entertainment
                                                LLC
                                            </p>
                                            <p>Developed by CV Infotech</p>
                                        </div>
                                    </Row>
                                </Col>
                                <Col md={8} sm={12} xs={12} className={`${styles["logsStyle"]}`}>
                                    <Row className={`d-flex gap-3 ${styles["custom-image-container"]} ${styles["footerLogos"]}`}>
                                        <img
                                            src="/assets/svg/footer2.svg"
                                            className={`${styles["first-image"]}`}
                                            alt="Footer Image 1"
                                        />
                                        <img
                                            src="/assets/svg/footer1.svg"
                                            className={`${styles["second-image"]}`}
                                            alt="Footer Image 2"
                                        />
                                        <img
                                            src="/assets/svg/footer3.svg"
                                            className={`${styles["third-image"]}`}
                                            alt="Footer Image 3"
                                        />
                                        <img
                                            src="/assets/svg/footer4.svg"
                                            className={`${styles["fourth-image"]}`}
                                            alt="Footer Image 4"
                                        />
                                    </Row>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Footer;
