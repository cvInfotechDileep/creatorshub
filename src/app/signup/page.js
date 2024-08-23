"use client"
import { useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import styles from './../../styles/signup.module.scss';
import Link from 'next/link';
import { message, Steps, theme } from 'antd';
import Lottie from 'lottie-web';
import creatorjson from './../../../public/assets/Creator.json';
import fanjson from './../../../public/assets/Fan.json';

export default function SignUp() {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [current, setCurrent] = useState(0);
  const [selectedCard, setSelectedCard] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const playAnimation = (sec) => {
    if (sec == 1) {
      animation.current.playSegments(
        [0, animation.current.timeCompleted],
        true
      );
      animation.current.setSpeed(1); // Reset speed to normal
    } else {
      animation1.current.playSegments(
        [0, animation1.current.timeCompleted],
        true
      );
      animation1.current.setSpeed(1); // Reset speed to normal
    }
  };

  // Function to play animation in reverse on mouse leave
  const reverseAnimation = (sec) => {
    if (sec == 1) {
      animation.current.playSegments(
        [animation.current.timeCompleted, 0],
        true
      );
      animation.current.setSpeed(1); // Reset speed to normal
    } else {
      animation1.current.playSegments(
        [animation1.current.timeCompleted, 0],
        true
      );
      animation1.current.setSpeed(1); // Reset speed to normal
    }
  };
  const handleSelect = (userType) => {
    setSelectedCard(userType);
    // localStorage.setItem('user_type', userType);
  };
  const containerCard = useRef(null);
  const animation = useRef(null);
  const containerCard1 = useRef(null);
  const animation1 = useRef(null);

  // Initialize animation on component mount
  useEffect(() => {
    animation.current = Lottie.loadAnimation({
      container: containerCard.current,
      animationData: creatorjson,
      renderer: 'svg',
      loop: false,
      autoplay: false,
    });

    // Cleanup function to destroy animation on component unmount
    return () => {
      animation.current.destroy();
    };
  }, []);

  useEffect(() => {
    animation1.current = Lottie.loadAnimation({
      container: containerCard1.current,
      animationData: fanjson,
      renderer: 'svg',
      loop: false,
      autoplay: false,
    });

    // Cleanup function to destroy animation on component unmount
    return () => {
      animation1.current.destroy();
    };
  }, []);
  const cards = [
    {
      id: 1,
      title: 'Creator',
      text: 'I’d like to create a wishlist',
      svg: "/assets/svg/Creator.svg",
      container: containerCard,
      playAnimation: playAnimation,
      reverseAnimation: reverseAnimation,
    },
    {
      id: 2,
      title: 'Fan',
      text: 'I’m here to follow & support creators',
      svg: "/assets/svg/Fan.svg",
      container: containerCard1,
      playAnimation: playAnimation,
      reverseAnimation: reverseAnimation,
    },
  ];

  const steps = [
    {
      title: '',
      content: (
        <>
          {/* Middle Section */}
          <div className="justify-content-center p-3 flex-grow-1" style={{ textAlign: "-webkit-center" }}>
            <Row className={`${styles["sec-type-row"]}`}>
              <div className='text-center'>
                <h6 className={`mt-3 mb-2`}>
                  <span className={`${styles["highlight-italic"]} ${styles["common-font-style"]}`}>Welcome to </span><strong className={`${styles["rest-highlight"]} ${styles["common-font-style"]}`}>CreatorsHub!</strong>
                </h6>
                <p className={`m-0 px-5 ${styles["textColor"]}`}>Please choose your account type.</p>
                <p className={`m-0 px-5 ${styles["textColor"]}`}>You can support other creators with either of the account types and can change your account type anytime.</p>
              </div>
            </Row>

            <Row className='text-center justify-content-center px-5 my-3'>
              {cards.map((card) => (
                <Col sm={6} md={6} className='px-1' key={card.id}>
                  <Card
                    className={`'align-items-center p-2 bg-white mb-4 ${styles["cardDimension"]} ${styles["border-lightBorder"]} ${selectedCard === card.title.toLowerCase() ? styles["primary"] : ''}`}
                    onClick={() => handleSelect(card.title.toLowerCase())}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className='align-self-center'
                      ref={card.container}
                      onMouseEnter={() => card.playAnimation(card.id)}
                      onMouseLeave={() => card.reverseAnimation(card.id)}
                    />
                    <Card.Body>
                      <Card.Title className={`${styles["radioBtn"]}`}>{card.title}</Card.Title>
                      <Card.Text className={`m-0 ${styles['radioParagraph']}`}>
                        {card.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )
    },
    {
      title: '',
      content: (
        <>
          {/* Middle Section */}
          <div className="justify-content-center p-3" style={{ textAlign: "-webkit-center", height:"70vh" }}>
            <Row className={`${styles["sec-type-row"]}`}>
              <div className='text-center'>
                <h6 className={`mt-3 mb-2`}>
                  <span className={`${styles["highlight-italic"]} ${styles["common-font-style"]}`}>Welcome to </span><strong className={`${styles["rest-highlight"]} ${styles["common-font-style"]}`}>CreatorsHub!</strong>
                </h6>
                <p className={`${styles["textColor"]}`}>Let’s sign in back into your account.</p>
              </div>
            </Row>
            <Row className='w-50'>
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
                <InputGroup.Text id="basic-addon2">✖️</InputGroup.Text>
              </InputGroup>
              {error && (
                <div className='text-danger mt-2'>{error.message}</div>
              )}
            </Row>

          </div>
        </>
      )
    },
    {
      title: '',
      content: (
        <>
          {/* Middle Section */}
          <div className="justify-content-center p-3" style={{ textAlign: "-webkit-center" }}>
            <Row className={`${styles["sec-type-row"]}`}>
              <div className='text-center'>
                <h6 className={`mt-3 mb-2`}>
                  <span className={`${styles["highlight-italic"]} ${styles["common-font-style"]}`}>Welcome to </span><strong className={`${styles["rest-highlight"]} ${styles["common-font-style"]}`}>CreatorsHub!</strong>
                </h6>
                <p className={`${styles["textColor"]}`}>Let’s sign in back into your account.</p>
              </div>
            </Row>
            <Row className='text-center'>
              <Col xs={12}>
                <button className={`bg-white w-50 ${styles["socialButtons"]}`}><span className='mx-1'><img src='/assets/svg/GoogleLogo.svg' /></span><span className='mx-1'>Sign in with Google</span><span className='mx-1'><img src='/assets/svg/socialarrow.svg' /></span></button>
              </Col>
              <Col xs={12}>
                <button className={`bg-white w-50 ${styles["socialButtons"]}`}><span className='mx-1'><img src='/assets/svg/twitch.svg' /></span><span className='mx-1'>Sign in with Twitch</span><span className='mx-1'><img src='/assets/svg/socialarrow.svg' /></span></button>
              </Col>
              <Col xs={12}>
                <button className={`bg-white w-50 ${styles["socialButtons"]}`}><span className='mx-1'><img src='/assets/svg/apple.svg' /></span><span className='mx-1'>Sign in with Apple</span><span className='mx-1'><img src='/assets/svg/socialarrow.svg' /></span></button>
              </Col>
            </Row>
            <Row className='text-center justify-content-center'>
              <Col sm={12} md={6} className='w-25 px-1'><button className={`bg-white w-100 ${styles["socialButtons"]}`}><img src='/assets/svg/youtube.svg' /></button></Col>
              <Col sm={12} md={6} className='w-25 px-1'><button className={`bg-white w-100 ${styles["socialButtons"]}`}><img src='/assets/svg/twitter.svg' /></button></Col>
            </Row>
            <Row className='w-50'>
              <div className={`my-2 ${styles["separator"]}`}>OR</div>
            </Row>
            <Row className='w-50'>
              <Form className='p-0'>
                <InputGroup className='mb-3'>
                  <InputGroup.Text className={`${styles['customInput']}`}>
                    <img className='mx-2' src='assets/svg/mail.svg' />
                  </InputGroup.Text>
                  <FormControl
                    className={`${styles['customInput']}`}
                    placeholder='you@email.com'
                    aria-label='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text className={`${styles['customInput']}`}>
                    <img className='mx-2' src='/assets/svg/key.svg' />
                  </InputGroup.Text>
                  <FormControl
                    className={`${styles['customInput']}`}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    aria-label='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <InputGroup.Text
                    className={`${styles['customInput']}`}
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={
                        showPassword ? "/assets/svg/hidePasswordIcon.svg" : "/assets/svg/passwordIcon.svg"
                      }
                      alt='toggle password visibility'
                    />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
              {error && (
                <div className='text-danger mt-2'>{error.message}</div>
              )}
            </Row>

          </div>
        </>
      )
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Row>
        <Col sm={12} md={12} lg={7}>
          <Card className={`my-5 ${styles["auth-form"]}`} style={{ width: '95%', margin: "auto" }}>
            <Card.Body className="d-flex flex-column p-0" style={{ position: 'relative', height: '100%' }}>
              {/* Top Section */}
              <div className="d-flex align-items-center justify-content-between p-3 px-4 text-dark text-center" style={{ top: '0', width: '100%' }}>
                <Link href={"/"} className={`d-flex gap-2 ${styles["goHome"]}`}><span><img src='/assets/svg/back.svg' /></span>Go Home</Link>
                <p className='m-0 text-end'>Already have an account?<Link href={"/signin"} style={{ color: "#1f2937", fontWeight: "600", borderBottom: "2px solid #1f2937", paddingBottom: "2px" }}> Sign In</Link></p>
              </div>
              {/* Middle Section */}
              <div>{steps[current].content}</div>
              {/* Bottom Section */}
              <div className='pb-4' style={{ width: '100%' }}>
                <hr className={`${styles['hr-without-text']}`} style={{ margin: 0 }} />
                <div className="d-flex align-items-center justify-content-between px-4 text-center">
                  <p className='m-0 text-start'>By continuing, you agree to the terms of service and<Link href={"/"} style={{ color: "#1f2937", fontWeight: "600", borderBottom: "2px solid #1f2937", paddingBottom: "2px" }}> privacy policy.</Link></p>

                  {current < steps.length - 1 && (
                    <Button
                      type='submit'
                      onClick={() => next()}
                      variant='dark'
                      className='d-flex flex-nowrap text-white fw-semibold gap-sm-2 common-button globalGrediantBtn nextbtnn'
                      size='lg'
                      style={{ fontSize: '18px' }}
                    >
                      <span className='d-inline-flex flex-nowrap justify-content-center align-items-center'>
                        Next
                      </span>
                      <span>
                        <img
                          src="/assets/svg/arrownext.svg"
                          alt='arrow'
                          className='d-none d-sm-inline'
                        />
                      </span>
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    // <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    //   Done
                    // </Button>
                    <Button
                      type='submit'
                      onClick={() => message.success('Processing complete!')}
                      variant='dark'
                      className='d-flex flex-nowrap text-white fw-semibold gap-sm-2 common-button globalGrediantBtn nextbtnn'
                      size='lg'
                      style={{ fontSize: '18px' }}
                    >
                      <span className='d-inline-flex flex-nowrap justify-content-center align-items-center'>
                        Submit
                      </span>
                      <span>
                        <img
                          src="/assets/svg/arrownext.svg"
                          alt='arrow'
                          className='d-none d-sm-inline'
                        />
                      </span>
                    </Button>
                  )}

                </div>
              </div>
              {/* Divider */}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5} className='d-sm-none d-md-none'></Col>
      </Row>
      <Steps current={current} items={items} />

      {/* {current < steps.length - 1 && (
        <Button type="primary" onClick={() => next()}>
          Next
        </Button>
      )} */}
      {/* {current === steps.length - 1 && (
        <Button type="primary" onClick={() => message.success('Processing complete!')}>
          Done
        </Button>
      )} */}
      {/* {current > 0 && (
        <Button
          style={{
            margin: '0 8px',
          }}
          onClick={() => prev()}
        >
          Previous
        </Button>
      )} */}


    </>
  );
}
