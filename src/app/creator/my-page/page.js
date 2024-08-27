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

export default function CreatorMyPage({ params }) {
  const { username } = params || {};
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUsername = window.window.localStorage.getItem('username');
    const name = window.localStorage.getItem('name');
    const email = window.localStorage.getItem('email');

    if (username !== storedUsername) {
      router.push('/signin'); // Redirect to Not Found page
      return;
    }

    setUserData({ username, name, email });
  }, [username, router]);

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
