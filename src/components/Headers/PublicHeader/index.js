import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import styles from './PublicHeader.module.scss'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

export default function PublicHeader() {
  return (
    // <header>
    <>
      <Container fluid className="p-0">
        <div className={styles["App"]}></div>
        <div className={styles["transparent-nav"]}>
          <Navbar expand="lg" bg="transparent" className={styles["sticky-header"]}>
            <Navbar.Brand href="#home" className={`${styles["navbar-brand"]}`}>
              <img
                src='/assets/svg/logo.svg'
                className={`d-inline-block align-top ${styles["creator-hub-logo"]}`}
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              type="white"
              style={{ backgroundColor: "white" }}
            />
            <Navbar.Collapse id="basic-navbar-nav" className={styles['navbar-collapse']}>
              <Nav className={`me-auto ${styles['navbar-nav']}`}>
                <Link href="/" className={styles['nav-link']}>Home</Link>
                <Link href="/about" className={styles['nav-link']}>About Us</Link>
                <Link href="#" className={styles['nav-link']}>How It Works</Link>
                <Link href="#" className={styles['nav-link']}>Contact Us</Link>
                <Link href="#" className={styles['nav-link']}>FAQ</Link>
                {/* <div className="animation start-home"></div> */}
              </Nav>
              <div className='d-flex justify-content-end responsiveCollaps' style={{gap: "1.5rem"}}>
                <Form className={`col-6 ${styles["custom-search"]}`} style={{ gap: "0.75rem" }}>
                <div className={`d-flex ${styles["search-bar-wrapper"]}`}>
                    {/* <InputGroup className="mb-3"> */}
                    {/* <FormControl
                      type="search"
                      placeholder="Search Creator"
                      aria-label="Search"
                      // className="custom-search-input"
                      className={`d-flex ${styles["custom-search-input"]}`}
                    /> */}
                    {/* </InputGroup> */}
                    {/* <Button className='bg-white rounded-end-circle searchbtn border border-start-0 rounded-0'>
                      <img src='/assets/svg/search.svg' alt='' />
                    </Button> */}
                    {/* <FontAwesomeIcon
                                        icon={faSearch}
                                        color="#6B7280"
                                        className="custom-search-icon"
                                    /> */}
                  </div>
                  


                </Form>
                
              </div>
              <div className='d-flex align-items-center' style={{ minWidth: "fit-content", gap: "0.75rem" }}>
              <div onClick={() => {
                    // setIsDay(!isDay);
                  }}
                  >
                    <img src="/assets/svg/themetoggleicon.svg" className="toggle-icon-daynight" />
                  </div>
                  <Link href='/signin'>
                    <Button variant="dark" className={`${styles['mybutton']}`}>
                      Log In
                    </Button>
                  </Link>
                  <Link href='/signup'>
                    <Button variant="dark" className={`${styles['mybutton']}`}>
                      <img src='assets/svg/user-plus.svg' style={{ marginRight: "3px" }} /> Sign Up
                    </Button>
                  </Link>
                </div>

            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
      {/* <Container fluid className="p-0">
      <div className={styles["App"]}></div>
        <div className={styles["transparent-nav"]}>
          <Navbar expand="lg" bg="transparent" className={styles["sticky-header"]}>
            <Navbar.Brand href="#home">
              <img
                src='/assets/svg/logo.svg'
                className={`d-inline-block align-top ${styles["creator-hub-logo"]}`}
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              type="white"
              style={{ backgroundColor: "white" }}
            />
            <Navbar.Collapse id="basic-navbar-nav" className={styles["navbar-col"]}>
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About Us</Nav.Link>
                <Nav.Link href="#">How It Works</Nav.Link>
                <Nav.Link href="#">Contact Us</Nav.Link>
                <Nav.Link href="#">FAQ</Nav.Link>
                <div className="animation start-home"></div>
              </Nav>
              <Form className={`${styles["custom-search"]} col-6`}>
                <div className="search-bar-wrapper d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search Creator"
                    aria-label="Search"
                    className={styles["custom-search-input"]}
                  />
                  <Button className={`bg-white rounded-end-circle ${styles.searchbtn} border border-start-0 rounded-0`}>
                    <img src='/assets/svg/search.svg' alt='' />
                  </Button>
                </div>
                <span>
                  <img src="/assets/svg/themetoggleicon.svg" className={styles["toggle-icon-daynight"]} />
                </span>

                <Link href='/signin'>
                  <Button variant="dark" className={styles["headers-btn-login"]}>
                    Log In
                  </Button>
                </Link>
                <Link href='/signup'>
                  <Button variant="dark" className={styles["headers-btn-signup"]}>
                    <img src='assets/svg/user-plus.svg' style={{ marginRight: "5px" }} /> Sign Up
                  </Button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container> */}
      {/* <nav>
        <ul>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/signin">Sign In</Link></li>
          <li><Link href="/signup">Sign Up</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav> */}
    </>

    // </header>
  );
}
