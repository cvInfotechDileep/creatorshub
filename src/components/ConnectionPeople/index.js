'use client';
import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from './style.module.scss';
import Link from 'next/link';

const ConnectionPeople = () => {
  return (
    <div className={`${styles["coneecting-people-wrapper"]}`}>
      <Container fluid>
        <Row className={`text-center align-items-end ${styles["coneecting-people-content"]}`}>

          <div className={`${styles["connecting-people-video"]}`}>
            <video autoPlay loop muted playsInline>
              <source
                // src={"https://dev.creatorshub.online/homePage_videos/connectingPeople.mp4"}
                src='assets/videos/connectingPeople.mp4'
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={`${styles["content-overlay"]}`}>
            <h1>
              <strong className={`${styles["rest-highlight"]}`}>What about </strong>
              <span className={`${styles["highlight"]}`}>
                {" "}
                <strong>My Data</strong>
              </span>
              <strong className={`${styles["rest-highlight"]}`}>?</strong>
            </h1>
            <p>At CreatorsHub your safety and privacy is our number one goal. It will always be protected and fully secured.</p>

            <div className={`${styles["btn-with-text"]}`}>
              <Link href="/signup">
                <Button variant="dark" className={`${styles["join-now-btn"]}`}>
                  {" "}
                  <img src='/assets/svg/user-plus.svg' alt="user-icon" /> Join Now
                </Button></Link>

              <p>It’s Free! 🎉</p>
            </div>
          </div>

        </Row>
      </Container>
    </div>
  )
}

export default ConnectionPeople