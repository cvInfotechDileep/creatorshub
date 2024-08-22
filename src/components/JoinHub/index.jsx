import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import styles from "./style.module.scss";

function JoinHub() {
  return (
    <Container fluid className={`text-center ${styles["join-creator-hub"]}`}>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="my-5">
          <h1>
            <span className={`${styles["highlight"]}`}>
              {" "}
              <strong>Join now</strong>
            </span>{" "}
            <strong className={`${styles["rest-highlight"]}`}>
              {" "}
              and start receiving <br /> the fan
            </strong>
            <span className={`${styles["highlight-italic"]}`}>
              {" "}
              support you deserve!{" "}
            </span>{" "}
          </h1>
          <p className="mt-3">Create your wishlist and start receiving gifts from your fans right away!</p>
          <Row className="d-flex justify-content-center m-0">
            <Col xs={10} sm={10} md={6}  lg={5} xl={5} xxl={4}>
              <InputGroup className={`mb-5 mt-4 ${styles["join-now-input"]}`} style={{height:"50px", borderRadius:"0px 12px 12px 0px"}}>
                <InputGroup.Text
                  id="basic-addon1"
                  className={styles["rounded-left"]}
                  style={{ textTransform: "lowercase", borderTopLeftRadius:"12px",borderBottomLeftRadius:"12px" }}
                >
                  {`creatorshub.online/`}
                </InputGroup.Text>
                <FormControl
                  className="rounded-0"
                  // placeholder="creatorshub.com/"
                  aria-label="creatorshub.online"
                />
                <Button variant="dark" className={`${styles["rounded-right"]}`}>
                  Join Us
                </Button>
              </InputGroup>
               <Button variant="dark" className={`${styles["rounded-right-responsive"]}`}>Join Us</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default JoinHub;
