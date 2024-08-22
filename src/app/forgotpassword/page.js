// "use client"
// import { Button, Card, Col, Row } from 'react-bootstrap';
// import styles from './../../styles/forgotpassword.module.scss'
// import Link from 'next/link';

// export default function forgotpassword() {

//   return (
//     <>
//       <Row>
//         <Col sm={12} md={12} lg={7}>
//           <Card className={`my-5 ${styles["auth-form"]}`} style={{ width: '95%', height: '100vh', margin: "auto" }}>
//             <Card.Body className="d-flex flex-column p-0">
//               <div className="d-flex align-items-center justify-content-between p-3 px-4 text-dark text-center">
//                 <Link href={"/"} className={`d-flex gap-2 ${styles["goHome"]}`}><span><img src='/assets/svg/back.svg' /></span>Go Home</Link>
//                 <p className='m-0'>Don’t have an account?<Link href={"/signup"} style={{ color: "#1f2937", fontWeight: "600", borderBottom: "2px solid #1f2937", paddingBottom: "2px" }}> Sign Up</Link></p>
//               </div>
//               <div className="d-flex align-items-center justify-content-center p-3" style={{ height: '75vh' }}>
//                 <h5>Middle Section</h5>
//               </div>
//               <hr className={`${styles['hr-without-text']}`} />
//               <div className="d-flex align-items-center justify-content-between px-4 text-center position-absolute, w-100" style={{bottom:"35px"}}>
//                 <p className='m-0'>Forgot Password? Reset it by<Link href={"/"} style={{ color: "#1f2937", fontWeight: "600", borderBottom: "2px solid #1f2937", paddingBottom: "2px" }}> clicking here</Link></p>
//                 <Button
//                   type='submit'
//                   onClick={() => { }}
//                   variant='dark'
//                   className='d-flex flexnowrap  text-white fw-semibold gap-sm-2 common-button globalGrediantBtn nextbtnn'
//                   size='lg'
//                   style={{ fontSize: '18px' }}
//                 >
//                   <span className='d-inline-flex flexnowrap justify-content-center align-items-center'>
//                     Submit
//                   </span>
//                   <span>
//                     <img
//                       src="/assets/svg/arrownext.svg"
//                       alt='arrow'
//                       className='d-none d-sm-inline'
//                     />
//                   </span>
//                 </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={5} className='d-sm-none d-md-none'></Col>
//       </Row>
//     </>
//   );
// }

"use client"
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from './../../styles/forgotpassword.module.scss';
import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <>
      <Row>
        <Col sm={12} md={12} lg={7}>
          <Card className={`my-5 ${styles["auth-form"]}`} style={{ width: '95%', height: '100vh', margin: "auto" }}>
            <Card.Body className="d-flex flex-column p-0" style={{ position: 'relative', height: '100%' }}>
              {/* Top Section */}
              <div className="d-flex align-items-center justify-content-between p-3 px-4 text-dark text-center" style={{ top: '0', width: '100%' }}>
                <Link href={"/"} className={`d-flex gap-2 ${styles["goHome"]}`}><span><img src='/assets/svg/back.svg' /></span>Go Home</Link>
                <p className='m-0 text-end'>Don’t have an account?<Link href={"/signup"} style={{ color: "#1f2937", fontWeight: "600", borderBottom: "2px solid #1f2937", paddingBottom: "2px" }}> Sign Up</Link></p>
              </div>

              {/* Middle Section */}
              <div className="d-flex align-items-center justify-content-center p-3">
                <h5>Middle Section</h5>
              </div>

              {/* Bottom Section */}
              <div style={{ position: 'absolute', bottom: '35px', width: '100%' }}>
                <hr className={`${styles['hr-without-text']}`} style={{ margin: 0 }} />
                <div className="d-flex align-items-center justify-content-between px-4 text-center">
                  <p className='m-0 text-start'>Forgot Password? Reset it by<Link href={"/"} style={{ color: "#1f2937", fontWeight: "600", borderBottom: "2px solid #1f2937", paddingBottom: "2px" }}> clicking here</Link></p>
                  <Button
                    type='submit'
                    onClick={() => { }}
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
                </div>
              </div>

              {/* Divider */}


            </Card.Body>
          </Card>
        </Col>
        <Col lg={5} className='d-sm-none d-md-none'></Col>
      </Row>
    </>
  );
}
