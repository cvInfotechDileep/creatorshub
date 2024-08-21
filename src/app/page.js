'use client';
import { useRef } from "react";
import { Button, Card, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import styles from './../styles/page.module.scss'
import Tab from "@/components/Tab";
import ConnectionPeople from "@/components/ConnectionPeople";
import JoinHub from "@/components/JoinHub";
import Footer from "@/components/Footer";

export default function Home() {

  const videoRef = useRef(null);
  const dummyData = [
    {
      title: "Instagram",
      icon: "/assets/svg/instagram.svg",
      color: "inset 0px 0px 20px -12px rgb(124, 122, 124)",
      hoverTitle: "",
    },
    {
      title: "",
      icon: '/assets/svg/twitter2.svg',
      color: "",
      hoverTitle: "X",
      hoverIcon: '/assets/svg/twitter.svg',
    },
    {
      title: "Twitch",
      icon: '/assets/svg/twitch.svg',
      color: "inset 0px 0px 20px -12px rgb(124, 122, 124)",
      hoverTitle: "",
    },
    {
      title: "",
      icon: "",
      color: "",
      hoverTitle: "",
    },
    {
      title: "",
      icon: "",
      color: "",
      hoverTitle: "",
    },
    {
      title: "",
      icon: "",
      color: "",
      hoverTitle: "",
    },
    {
      title: "YouTube",
      icon: "/assets/svg/youtube.svg",
      color: "inset 0px 0px 20px -12px rgb(124, 122, 124)",
      hoverTitle: "",
    },
    {
      title: "",
      icon: "/assets/svg/ytgaming2.svg",
      color: "",
      hoverTitle: "TikTok",
      hoverIcon: "/assets/svg/tiktok.svg",
    },
    {
      title: "",
      icon: "/assets/svg/ytgaming2.svg",
      color: "",
      hoverTitle: "YT Gaming",
      hoverIcon: "/assets/svg/ytgaming.svg",
    },
    {
      title: "",
      icon: "",
      color: "",
      hoverTitle: "",
    },
    {
      title: "",
      icon: "",
      color: "",
      hoverTitle: "",
    },
    {
      title: "",
      icon: '/assets/svg/snap.svg',
      color: "",
      hoverTitle: "Snap",
      hoverIcon: '/assets/svg/snapchat.svg',
    },
    {
      title: "Facebook",
      icon: '/assets/svg/facebook.svg',
      color: "inset 0px 0px 20px -12px rgb(124, 122, 124)",
      hoverTitle: "",
    },
    {
      title: "",
      icon: "",
      color: "",
      hoverTitle: "",
    },
    {
      title: "",
      icon: "",
      color: "",
      hoverTitle: "",
    },
  ];

  return (
    <main className={`${styles['main']}`}>
      <Container fluid className={`d-flex align-items-center justify-content-center p-0 my-5 ${styles["content-row"]}`}>
        <Card className={styles['hero-main-card']}>
          <Row className={styles['hero-card-row']}>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className={styles["content-column"]}>
              <div className={`${styles["dummmy"]} ${styles["left-content-column"]}`}>
                <div className={styles["left-side-content"]}>
                  <div className="text-start position-relative justify-content-start">
                    <h6 className={styles["highlighted-text"]}>
                      <span className={styles["highlight-italic"]}>Creator</span>
                      <span className={styles["highlight"]}>
                        <strong>Appreciation</strong>
                        <br />
                      </span>
                      <strong className={styles["rest-highlight"]}>
                        Made Safe and Easy
                      </strong>
                    </h6>
                    <p className={styles["description"]}>
                      Fans support their favorite creators by sending them gifts, subscribing to their exclusive content, or tipping them for their hard work. All the while keeping both fans and creators safe by ensuring their personal information is kept private. We provide creators with all the important tools to create, share, and then monetize their content.
                    </p>
                    <InputGroup className={`mb-3 mt-5 ${styles["hero-text-field"]}`}>
                      <InputGroup.Text
                        id="basic-addon1"
                        className={styles["rounded-left"]}
                        style={{ textTransform: "lowercase" }}
                      >
                        creatorshub.online/
                      </InputGroup.Text>
                      <FormControl
                        className={styles["rounded-0"]}
                        aria-label="creatorshub.online"
                      />
                      <Button variant="dark" className={styles["rounded-right"]} style={{ background: "#4b5563" }}>
                        Join Us
                      </Button>
                    </InputGroup>
                    <Button variant="dark" className={`mb-5 ${styles["rounded-right-responsive"]}`} style={{ background: "#4b5563" }}>
                      Join Us
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} xxl={6} className={styles["right-content-column"]}>
              <div className={styles["containers"]}>
                <div className={styles["cards"]}>
                  <div className={styles["boxs"]}>
                    <div className={styles["icons"]}>
                      <div className={styles["circle-for-bottom"]}>
                        <div className={styles["gif-overlay"]}></div>
                      </div>
                    </div>
                    <div className={styles["contents"]}>
                      <video ref={videoRef} id="myVideo" autoPlay loop muted playsInline>
                        <source src='/assets/videos/herosection.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
      <Container fluid className={styles["second-section"]}>
        <Row className={`${styles["about-heading"]} text-center`}>
          <Col md={7} className={`d-flex align-items-center ${styles["first-about-heading-col"]}`} style={{ flexDirection: "column" }}>
            <h6 className='mb-3'>
              <span className={styles["highlight-italic"]}>Built for </span>
              <span className={styles["highlight"]}>
                <strong>Creators</strong>
              </span>
              <strong className={styles["rest-highlight"]}> of all platforms.</strong>
            </h6>
            <p>
              Now your fans can seamlessly and effortlessly show their support
              and appreciation of the content you work tirelessly to create on
              any of the platforms you create on.
            </p>
          </Col>
        </Row>
        <Row className={`${styles["poloroid-grid-section"]} my-5`}>
          <Col sm={12} md={12} lg={6} xl={6} xxl={6} className={`d-flex align-items-center ${styles["left-poloroid-grid-section"]} justify-content-center`}>
            <div className={styles["socialPlate-wrapper"]}>
              {dummyData.map((item, index) => (
                <div
                  key={index}
                  className={`position-relative ${styles["socialPlate-item"]} ${styles[`social-items-${index}`]} ${item.hoverTitle ? "" : styles["no-hover"]}`}
                  style={item?.color ? { boxShadow: item?.color, background: "rgb(255, 255, 248)" } : null}
                >
                  {item?.icon && <img src={item.icon} className={`${styles["socialPlate-icon"]} ${item.title ? "" : styles["different"]}`} />}
                  {item.title && <p>{item.title}</p>}
                  {item.hoverTitle && (
                    <div className={styles["hover-content"]}>
                      {item.hoverIcon && <img src={item.hoverIcon} alt="" />}
                      <p>
                        <strong>{item.hoverTitle}</strong>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6} xxl={6} className={`d-flex align-items-center ${styles["right-poloroid-grid-section"]}`}>
            <Row className="mt-3">
              <Col>
                <div className={`d-flex ${styles["polaroid-second"]}`}>
                  <Card className={styles["polaroid-second-item"]} style={{ backgroundColor: "green" }}>
                    <div className="card border-0">
                      <div className={styles["image"]}>
                        <video autoPlay loop muted playsInline>
                          <source src='/assets/videos/stream.mp4' type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div className={`${styles["polaroidcard-footer"]} d-flex my-2`}>
                      <img src='/assets/svg/twitch.svg' />
                      <p className="mx-2">@matt0411</p>
                    </div>
                  </Card>
                  <Card className={styles["second"]}>
                    <div className="card border-0">
                      <div className={styles["image"]}>
                        <img src='/assets/images/clampImage.png' alt="" />
                      </div>
                    </div>
                    <h4 className={styles["signature"]}>“My wishlist is live on Creators Hub”</h4>
                    <div className={`${styles["polaroidcard-footer"]} d-flex my-2`}>
                      <img src='/assets/svg/instagram.svg' />
                      <p className="mx-2">@clair02</p>
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className='mt-5'>
        <Tab />
      </Container>
      <ConnectionPeople />
      <JoinHub />
      <Footer />
    </main>
  );
}
