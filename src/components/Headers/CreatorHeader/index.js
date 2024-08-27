import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import { Button, Container, Dropdown, DropdownButton, Form, Nav, Navbar, Modal, } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import "./style.scss"
import { useRouter } from 'next/navigation';
import { signOut } from '@/redux/slices/authSlice';

export default function CreatorHeader() {

  const dispatch = useDispatch();
  const router = useRouter(); 

  // State to keep track of active link
  const [activeLink, setActiveLink] = useState(router.pathname);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  let userData = localStorage.getItem('google_data');
  userData = JSON.parse(userData);
  const handleLogout = (e) => {
    dispatch(signOut());
    e.preventDefault();
    console.log('logout');
    // const auth2 = window.gapi.auth2.getAuthInstance();
    // console.log(auth2);
    // if (auth2) {
    //   auth2.signOut().then(() => {
    //     console.log('User signed out.');
    //     // Clear local storage or handle any other necessary state updates
    //     localStorage.removeItem('google_data');
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('user_type');
    //     // window.location.href = '/signin';
    //   });
    // }
    window.location.href = '/signin';
  };
 

  const handleShowNotification = () => setShowNotificationModal(true);
  const handleCloseNotification = () => setShowNotificationModal(false);

  const handleShowCart = () => setShowCartModal(true);
  const handleCloseCart = () => setShowCartModal(false);

  // Handler to update active link
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };


  // Inline style for active link
  const activeLinkStyle = {
    color: '#007bff', // Customize the active color as needed
  };
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container fluid className='mx-4'>
          <Navbar.Brand href='#home'>
            <img
              src='/assets/svg/logo.svg'
              className='d-inline-block align-top creator-hub-logo m-0'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
            <Link href='/creator/timeline' className='nav-link' onClick={() => setActiveLink('/creator/timeline')} style={activeLink === '/creator/timeline' ? activeLinkStyle : {}}>Timelines</Link>
              <Link href='/creator/my-page' className='nav-link' onClick={() => setActiveLink('/creator/my-page')} style={activeLink === '/creator/my-page' ? activeLinkStyle : {}}>My Pages</Link>
              <Link href='/creator/received-gifts' className='nav-link' onClick={() => setActiveLink('/creator/received-gifts')} style={activeLink === '/creator/received-gifts' ? activeLinkStyle : {}}>Received Gift</Link>
              <Link href='/creator/explore' className='nav-link' onClick={() => setActiveLink('/creator/explore')} style={activeLink === '/creator/explore' ? activeLinkStyle : {}}>Explore</Link>
            </Nav>
            <Form className='d-flex align-items-center'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='rounded-start-pill searchStyle border border-end-0 bg-white'
                aria-label='Search'
              />
              <Button className='bg-white rounded-end-circle searchbtn border border-start-0 rounded-0'>
                <img src="/assets/svg/search.svg" alt='' />
              </Button>
              {/* <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="custom-switch mx-3"
                            /> */}
              <div className='mx-2' style={{ color: '#E5E7EB' }}>
                |
              </div>
              <Button className='mx-2 w-50 giftBtn' variant="primary"><span className='me-2'>+</span>Add Gift</Button>
              <DropdownButton
                className='custom-dropdown-button'
                id='dropdown-basic-button'
                title={
                  <div className='d-flex align-items-center gap-2'>
                    <img
                      src={
                        userData && userData.imageUrl
                          ? userData.imageUrl.toString()
                          : "/assets/images/Avatar.png"
                      }
                      alt='Avatar'
                      className='avatar rounded'
                    />
                    {userData ? userData.name : 'Jenna Kelly'}
                    <img src="/assets/svg/dropdownIcon.svg" alt='' />
                  </div>
                }
              >
                <Dropdown.Item>
                  <div
                    className='d-flex profileDetail gap-3'
                    style={{ background: '#F3F4F6' }}
                  >
                    <img src="/assets/svg/dummyprofile.svg" alt='' />
                    <div>
                      <p className='m-0'>Signed in as</p>
                      <h3 style={{ fontSize: '14px' }}>
                        {userData ? userData.name : 'Mason Cooper'}
                        <span className='ms-3'>
                          <img src="/assets/svg/fantick.svg" alt='' />
                        </span>
                      </h3>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <span className='me-3'>
                    <img src="/assets/svg/profileIcon.svg" alt='' />
                  </span>
                  My Profile
                </Dropdown.Item>
                <Dropdown.Item href='/'>
                  <span className='me-3'>
                    <img src="/assets/svg/wallet.svg" alt='' />
                  </span>
                  Wallet
                </Dropdown.Item>
                <Dropdown.Item href='/'>
                  <span className='me-3'>
                    <img src="/assets/svg/settingicon.svg" alt='' />
                  </span>
                  Settings
                </Dropdown.Item>
                <Dropdown.Item href='/'>
                  <span className='me-3'>
                    <img src="/assets/svg/referral.svg" alt='' />
                  </span>
                  Referral Program
                </Dropdown.Item>
                <Dropdown.Item href='/'>
                  <span className='me-3'>
                    <img src="/assets/svg/shareIcon.svg" alt='' />
                  </span>
                  Share Profile
                </Dropdown.Item>
                <Dropdown.Item href='/'>
                  <span className='me-3'>
                    <img src="/assets/svg/link.svg" alt='' />
                  </span>
                  Integrations
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleLogout(e)}>
                  <span className='me-3'>
                    <img src="/assets/svg/logout.svg" alt='' />
                  </span>
                  Logout
                </Dropdown.Item>
              </DropdownButton>
              <Button
                className='giftBtn bg-white iconBtn mx-2'
                onClick={handleShowNotification}
              >
                <img src="/assets/svg/bell.svg" alt='' />
              </Button>
              {/* <Button
                className='giftBtn bg-white iconBtn mx-2'
                onClick={handleShowCart}
              >
                <img src="/assets/svg/cart.svg" alt='' />
              </Button> */}
            </Form>
            {/* <DarkLightSwitchButton /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showNotificationModal} onHide={handleCloseNotification}>
        <Modal.Header closeButton className='headerpart'>
          <Modal.Title className='headerpart_1'>
            <h2 className='notihead'>
              Notifications <span>6</span>
            </h2>
            <p className='notihead_underline'>
              Stay informed about your favorite creators.
            </p>
            {/* <div className='headerpart_2'>
                            <button type="button" class="btn-close" aria-label="Close"></button>
                        </div> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='new_notifications_popup'>
            <h1>New</h1>
            <div className='author_with_time_notifications'>
              <div className='author_details_withimage'>
                <img src="/assets/svg/notification_avtar.svg" alt='Avatar' />{' '}
                {/* Fallback to imported image */}
                <div className='authordetails'>
                  <p className='author_spanname1'>
                    Talon Everett has purchased your gift.
                  </p>
                  <p className='author_emailspan1'>
                    Your wishlist was visited by 53 fans last week.
                  </p>
                </div>
              </div>
              <div className='notification_time'>3 days ago </div>
            </div>
            <div className='author_with_time_notifications'>
              <div className='author_details_withimage'>
                <img src="/assets/svg/notification_avtar1.svg" alt='Avatar' />{' '}
                {/* Fallback to imported image */}
                <div className='authordetails'>
                  <p className='author_spanname1'>
                    Jessica Davis new gift added.
                  </p>
                  <p className='author_emailspan1'>
                    Your wishlist was visited by 48 fans last week.
                  </p>
                </div>
              </div>
              <div className='notification_time'>4 days ago </div>
            </div>

            {/* Older Notifications */}
            <div className='custom_vertical_space'></div>
            <h1>Older</h1>
            <div className='author_with_time_notifications'>
              <div className='author_details_withimage'>
                <img src="/assets/svg/mark.svg" alt='Avatar' />{' '}
                {/* Fallback to imported image */}
                <div className='authordetails'>
                  <p className='author_spanname1'>Jim Beam new gift added.</p>
                  <p className='author_emailspan1'>
                    Your wishlist was visited by 32 fans last week.
                  </p>
                </div>
              </div>
              <div className='notification_time'>7 days ago </div>
            </div>
            <div className='author_with_time_notifications'>
              <div className='author_details_withimage'>
                <img src="/assets/svg/notification_avtar.svg" alt='Avatar' />{' '}
                {/* Fallback to imported image */}
                <div className='authordetails'>
                  <p className='author_spanname1'>Dave Clark new gift added.</p>
                  <p className='author_emailspan1'>
                    Your wishlist was visited by 66 fans last week.
                  </p>
                </div>
              </div>
              <div className='notification_time'>10 days ago </div>
            </div>
            <div className='author_with_time_notifications'>
              <div className='author_details_withimage'>
                <img src="/assets/svg/notification_avtar.svg" alt='Avatar' />{' '}
                {/* Fallback to imported image */}
                <div className='authordetails'>
                  <p className='author_spanname1'>
                    Talon Everett has purchased your gift.
                  </p>
                  <p className='author_emailspan1'>
                    Your wishlist was visited by 53 fans last week.
                  </p>
                </div>
              </div>
              <div className='notification_time'>11 days ago </div>
            </div>
            <div className='custom_vertical_space'></div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseNotification}>
                        Close
                    </Button>
                </Modal.Footer> */}
      </Modal>

      <Modal show={showCartModal} onHide={handleCloseCart}>
        <Modal.Header closeButton className='headerpart'>
          <Modal.Title className='headerpart_1'>
            <h2 className='notihead'> Gift Cart</h2>
            <div className='Giftcartwithimage'>
              <p className='notihead_underline'>Send gifts to</p>
              <img src="/assets/svg/Giftcartavatar.svg" alt='' />
              <p style={{ fontSize: '16px' }}>Sarah Smith</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='outerGiftcartlistbox'>
            <div className='leftsideGiftcartlist'>
              <div>
                <img src="/assets/svg/giftcart1.svg" alt='' />
              </div>
              <div className='giftcartDescriptionbox'>
                <div className='giftcartDescriptionboxinner'>
                  <h1 className='h3heading'>
                    Lakme Absolute Blur Perfect Matte Face...
                  </h1>
                  <div className='giftspan'>Gift</div>
                  <div className='productGiftprice'>
                    $ <span>49</span>
                  </div>
                </div>
                <p className='parab2'>
                  Discover Lakme Absolute Blur Perfect Matte Face Pack for a
                  flawless, matte finish. Ideal for all skin types, it refines
                  pores and enhances radiance.
                </p>
              </div>
            </div>
            <div className='rightsideGiftcartdelete'>
              <img src="/assets/svg/deleteicon.svg" alt='' />
            </div>
          </div>
          <div className='outerGiftcartlistbox'>
            <div className='leftsideGiftcartlist'>
              <div>
                <img src="/assets/svg/giftcart2.svg" alt='' />
              </div>
              <div className='giftcartDescriptionbox'>
                <div className='giftcartDescriptionboxinner'>
                  <h1 className='h3heading'>
                    RENEE Glass Glow Pre Make-up Oil Primer...
                  </h1>
                  <div className='giftspan'>Gift</div>
                  <div className='productGiftprice'>
                    $ <span>19</span>
                  </div>
                </div>
                <p className='parab2'>
                  Discover Renee Glass Glow Pre-Makeup Oil Primer for radiant,
                  smooth skin. Enhance your makeup routine with nourishing oils
                  for a luminous finish.
                </p>
              </div>
            </div>
            <div className='rightsideGiftcartdelete'>
              <img src="/assets/svg/deleteicon.svg" alt='' />
            </div>
          </div>

          <div className='Giftcarttotalouter'>
            <p className='pgray_b1'>
              Subtotal: <b style={{ color: '#000000' }}>$68</b>
            </p>
            <p className='parab2'>
              *Processing fees & extras will be calculated at checkout
            </p>
          </div>
          <div className='spcial_margin_top'></div>
          <div className='fotterpartpopup'>
            <h3 className='h3heading_15'>Clear Cart</h3>
            <button className='btn filterapplybtn'>Checkout</button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCart}>
                        Close
                    </Button>
                </Modal.Footer> */}
      </Modal>
    </>
    // <header className="bg-green-600 text-white p-4">
    //   <nav>
    //     <ul className="flex space-x-4">
          
    //       <li>
    //         <Link href="/creator/my-page">My Page</Link>
    //       </li>
    //       <li>
    //         <Link href="/creator/timeline">Timeline</Link>
    //       </li>
    //       <li>
    //         <Link href="/creator/received-gifts">Received Gift</Link>
    //       </li>
    //       <li>
    //         <Link href="/signout">Sign Out</Link>
    //       </li>
    //       <li><li><ThemeToggle /></li></li>
    //     </ul>
    //   </nav>
    // </header>
  );
}
