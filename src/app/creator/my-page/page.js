"use Client";
import { Col, Container, Row } from "react-bootstrap";
// import styles from "./../../../styles/creatormypage.module.scss"
import PrivateRoute from "@/components/PrivateRoute";
import CreatorProfileSection from "@/components/CreatorProfileSection";
import UsersTab from "@/components/UsersTab";
import ExploreCreators from "@/components/ExploreCreators";
import ExploreStreamers from "@/components/ExploreStreamers";
import TopUsersTab from "@/components/TopUsersTab";

export default function CreatorMyPage() {
  
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
