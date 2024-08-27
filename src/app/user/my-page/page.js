"use client"
import ExploreCreators from "@/components/ExploreCreators";
import ExploreStreamers from "@/components/ExploreStreamers";
import PrivateRoute from "@/components/PrivateRoute";
import TopUsersTab from "@/components/TopUsersTab";
import UserProfileSection from "@/components/UserProfileSection";
import UsersTab from "@/components/UsersTab";
import { Col, Container, Row } from "react-bootstrap";

export default function UserMyPage() {
  
  return (
    <PrivateRoute allowedRoles={['fan']}>
      <Container>
        <Row>
          <Col md={9} sm={12}>
            <UserProfileSection />
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
