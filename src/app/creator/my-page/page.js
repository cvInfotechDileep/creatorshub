"use client"
import { Col, Container, Row } from "react-bootstrap";
// import styles from "./../../../styles/creatormypage.module.scss"
import PrivateRoute from "@/components/PrivateRoute";
import CreatorProfileSection from "@/components/CreatorProfileSection";
import UsersTab from "@/components/UsersTab";
import ExploreCreators from "@/components/ExploreCreators";
import ExploreStreamers from "@/components/ExploreStreamers";
import TopUsersTab from "@/components/TopUsersTab";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatorMyPage() {
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
  
  return (
    <PrivateRoute allowedRoles={['creator']}>
      <Container>
        <Row>
          <Col md={9} sm={12}>
            {/* <Row className={`bg-white ${styles['livestreambox1']}`}> */}
            <CreatorProfileSection />
            {/* </Row> */}
          </Col>
          <Col md={3} sm={12}>
            <UsersTab />
            <ExploreCreators />
            <ExploreStreamers />
            <TopUsersTab />
          </Col>
        </Row>
      </Container>
    </PrivateRoute>
  );
}
