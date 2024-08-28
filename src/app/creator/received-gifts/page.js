"use client"
import React, { useEffect, useState } from 'react';
import styles from "./../../../styles/recivedgifts.module.scss";
import { Col, Container, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import PrivateRoute from '@/components/PrivateRoute';
import { useRouter } from 'next/navigation';

export default function CreatorReceivedGifts() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true); // Now we know we are in the client environment
  // }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUsername = window.localStorage.getItem('username');
      const name = window.localStorage.getItem('name');
      const email = window.localStorage.getItem('email');

      if (!storedUsername) {
        router.push('/signin'); // Redirect to sign-in page
        return;
      }

      setUserData({ name, email });
    }
    // if (isClient) {
    //   const storedUsername = window.localStorage.getItem('username');
    //   const name = window.localStorage.getItem('name');
    //   const email = window.localStorage.getItem('email');

    //   if (!storedUsername) {
    //     router.push('/signin'); // Redirect to sign-in page
    //     return;
    //   }

    //   setUserData({ name, email });
    // }
  }, [router]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  
  const tableData = [
    {
      product: "Product 1",
      productImage: "https://via.placeholder.com/38",
      sendTo: "John Doe",
      sendToImage: "https://via.placeholder.com/38",
      price: "$10",
      giftType: "Birthday",
      status: "Delivered",
      date: "01/01/2024",
    },
    {
      product: "Product 2",
      productImage: "https://via.placeholder.com/38",
      sendTo: "Jane Smith",
      sendToImage: "https://via.placeholder.com/38",
      price: "$20",
      giftType: "Anniversary",
      status: "Ordered",
      date: "01/02/2024",
    },
    {
      product: "Product 3",
      productImage: "https://via.placeholder.com/38",
      sendTo: "Emily Johnson",
      sendToImage: "https://via.placeholder.com/38",
      price: "$30",
      giftType: "Christmas",
      status: "Transferred",
      date: "01/03/2024",
    }
    // Add more data as needed
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'status-delivered';
      case 'Transferred':
        return 'status-transferred';
      case 'Ordered':
        return 'status-ordered';
      default:
        return '';
    }
  };
  const filterBtnStyle = {
    backgroundColor: "#fff",
    border: "1px solid #E5E7EB",
    color: "#000",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
  };
  return (
    <PrivateRoute allowedRoles={['creator']}>
      <div style={{ background: "#EDF0F2", minHeight: "100vh" }}>
        <Container className='mt-5'>
          <Row>
            <Col xl='12'>
              {/* <div className={styles['custom_vertical_space']}></div> */}
              <div className={`d-flex justify-content-between align-items-center ${styles["livestreambox1"]}`}>
                <div>
                  <h3>Gift History</h3>
                  <p className={styles['pgray']} style={{ margin: "0px" }}>See the gifts you’ve given.</p>
                </div>
                <DropdownButton className={styles.filterBtn}  style={filterBtnStyle} variant="" id="dropdown-basic-button" title={
                  <div className="d-flex align-items-center gap-2 mx-2">
                    All
                    <img src="/assets/svg/dropdownIcon.svg" alt="Dropdown Icon" />
                  </div>
                }>
                  <Dropdown.Item href="/">one</Dropdown.Item>
                  <Dropdown.Item href="/">two</Dropdown.Item>
                  <Dropdown.Item href="/">three</Dropdown.Item>
                  <Dropdown.Item href="/">four</Dropdown.Item>
                  <Dropdown.Item href="/">five</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>
          <Row className='my-4'>
            <Col xl='12'>
              {/* <div className={styles['custom_vertical_space']}></div> */}
              <img src="/assets/Images/tableline.png" alt="/" className={styles['tableLine']} />
              <table className={`w-100 ${styles["custom-table"]}`}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Send To</th>
                    <th>Price</th>
                    <th>Gift Type</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <img src={row.productImage} alt={row.product} width="38" height="38" className='rounded-circle' style={{ marginRight: '8px' }} />
                        {row.product}
                      </td>
                      <td>
                        <img src={row.sendToImage} alt={row.sendTo} width="38" height="38" className='rounded-circle' style={{ marginRight: '8px' }} />
                        {row.sendTo}
                      </td>
                      <td>{row.price}</td>
                      <td>{row.giftType}</td>
                      <td className='text-center'><div className={getStatusClass(row.status)}>{row.status}</div></td>
                      <td>{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </div>
    </PrivateRoute>
  );
}
