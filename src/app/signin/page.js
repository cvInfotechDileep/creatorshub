"use client"

import { useState } from 'react';
import { signinApi } from '../../apis/api';
import { useDispatch } from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from '@/redux/slices/authSlice';
import { Button, Card, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import styles from './../../styles/signin.module.scss'
import Link from 'next/link';

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async (event) => {
    console.log("[[[[first]]]]")
    event.preventDefault();
    dispatch(signInStart());

    try {
      const response = await signinApi({ email, password });
      const { status, token, user_type, data } = response.data;

      if (status) {
        localStorage.setItem('token', token);
        localStorage.setItem('user_type', user_type);
        localStorage.setItem('username', data[0].username);
        dispatch(signInSuccess({ token, user_type, data }));

        //  Redirect based on user_type to the specific username path
        if (user_type === 'fan') {
          window.location.href = `/user/${data[0].username}`;
        } else if (user_type === 'creator') {
          window.location.href = `/creator/${data[0].username}`;
        } else if (user_type === 'admin') {
          window.location.href = `/admin/${data[0].username}`;
        }
      } else {
        dispatch(signInFailure('Sign-in failed'));
        setError("Sign-in failed")
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* <h1>Sign In</h1> */}
      {/* <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>} */}
      <Row>
        <Col sm={12} md={12} lg={7}>
          <Card className={`my-5 ${styles["auth-form"]}`} style={{ width: '95%', margin: "auto" }}>
            <Card.Body className="d-flex flex-column p-0" style={{ position: 'relative', height: '100%' }}>
              {/* Top Section */}
              <div className="d-flex align-items-center justify-content-between p-3 px-4 text-dark text-center" style={{ top: '0', width: '100%' }}>
                <Link href={"/"} className={`d-flex gap-2 ${styles["goHome"]}`}><span><img src='/assets/svg/back.svg' /></span>Go Home</Link>
                <p className='m-0 text-end'>Don’t have an account?<Link href={"/signup"} style={{ color: "#1f2937", fontWeight: "600", borderBottom: "2px solid #1f2937", paddingBottom: "2px" }}> Sign Up</Link></p>
              </div>

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

              {/* Bottom Section */}
              <div style={{ bottom: '35px', width: '100%', paddingBottom:"35px" }}>
                <hr className={`${styles['hr-without-text']}`} style={{ margin: 0 }} />
                <div className="d-flex align-items-center justify-content-between px-4 text-center">
                  <p className='m-0 text-start'>Forgot Password? Reset it by<Link href={"/forgotpassword"} style={{ color: "#1f2937", fontWeight: "600", borderBottom: "2px solid #1f2937", paddingBottom: "2px" }}> clicking here</Link></p>
                  <Button
                    type='submit'
                    onClick={(e) => handleSubmit(e)}
                    variant='dark'
                    className='d-flex flex-nowrap text-white fw-semibold gap-sm-2 common-button globalGrediantBtn nextbtnn'
                    size='lg'
                    style={{ fontSize: '18px' }}
                  >
                    <span className='d-inline-flex flex-nowrap justify-content-center align-items-center'>
                      Sign in
                    </span>
                    <span>
                      <img
                        src="/assets/svg/arrownext.svg"
                        alt='arrow'
                        className='d-none d-sm-inline'
                      />
                    </span>
                  </Button>
                </div>
              </div>

              {/* Divider */}


            </Card.Body>
          </Card>
        </Col>
        <Col lg={5} className='d-sm-none d-md-none'></Col>
      </Row>
    </div>
  );
}

