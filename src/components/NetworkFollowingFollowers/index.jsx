import React, { useState } from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import "./style.scss"

const users = [
    {
        bg: "/assets/svg/network1.svg",
        profileImg: "/assets/svg/network11.svg",
        name: 'Jack Harlow',
        username: '@jack12',
        description: 'Running on coffee, sarcasm, and bad puns. Welcome to my circus!',
    },
    {
        bg: "/assets/svg/network2.svg",
        profileImg: "/assets/svg/network22.svg",
        name: 'Jack Harlow',
        username: '@jack12',
        description: 'Running on coffee, sarcasm, and bad puns. Welcome to my circus!',
    },
    {
        bg: "/assets/svg/network3.svg",
        profileImg: "/assets/svg/network33.svg",
        name: 'Jack Harlow',
        username: '@jack12',
        description: 'Running on coffee, sarcasm, and bad puns. Welcome to my circus!',
    },
    {
        bg: "/assets/svg/network4.svg",
        profileImg: "/assets/svg/network44.svg",
        name: 'Steve Miller',
        username: '@steve32',
        description: 'Striving to inspire through words and images.',
    },
    {
        bg: "/assets/svg/network5.svg",
        profileImg: "/assets/svg/network55.svg",
        name: 'Max Powers',
        username: '@mar.p',
        description: 'Fashion lover. Trendsetter. Style innovator.',
    },
    {
        bg: "/assets/svg/network6.svg",
        profileImg: "/assets/svg/network66.svg",
        name: 'Amanda Brown',
        username: '@amanda_12',
        description: 'Fashion lover. Trendsetter. Style innovator.',
    },
    // Add more user data here...
];

const NetworkFollowingFollowers = () => {
    const [key, setKey] = useState('home');
    const following_count = 61;
    const followers_count = 812;
    return (
        <Tabs
            id="Network_follower_following_tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="Subscribers" title={`Subscribers ${following_count}+`}>
                <Container>
                    <Row>
                        {users.map((user, index) => (
                            <Col key={index} sm={12} md={6} lg={4}>
                                <div className="Outernetworkbox">
                                    <img src={user.bg} alt="" className="networkboxbgimg" />
                                    <div className="outernetworkboxinner">
                                        <img src={user.profileImg} alt="" className="networkprofileimg" />
                                        <h1 className="h3heading">{user.name}</h1>
                                        <p className="parab2">{user.username}</p>
                                        <p className="parab2">{user.description}</p>
                                        <div className="networkfollowingdiv">
                                            <img src="/assets/svg/anchortag.svg" alt="" />
                                            <button className="btn btnfollowing">
                                                <img src="/assets/svg/tickmark.svg" alt="" /> Subscribers
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="home" title={`Following ${following_count}+`}>
                <Container>
                    <Row>
                        {users.map((user, index) => (
                            <Col key={index} sm={12} md={6} lg={4}>
                                <div className="Outernetworkbox">
                                    <img src={user.bg} alt="" className="networkboxbgimg" />
                                    <div className="outernetworkboxinner">
                                        <img src={user.profileImg} alt="" className="networkprofileimg" />
                                        <h1 className="h3heading">{user.name}</h1>
                                        <p className="parab2">{user.username}</p>
                                        <p className="parab2">{user.description}</p>
                                        <div className="networkfollowingdiv">
                                            <img src="/assets/svg/anchortag.svg" alt="" />
                                            <button className="btn btnfollowing">
                                                <img src="/assets/svg/tickmark.svg" alt="" /> Following
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="profile" title={`Followers ${followers_count}+`}>
                <Container>
                    <Row>
                        {users.map((user, index) => (
                            <Col key={index} sm={12} md={6} lg={4}>
                                <div className="Outernetworkbox">
                                    <img src={user.bg} alt="" className="networkboxbgimg" />
                                    <div className="outernetworkboxinner">
                                        <img src={user.profileImg} alt="" className="networkprofileimg" />
                                        <h1 className="h3heading">{user.name}</h1>
                                        <p className="parab2">{user.username}</p>
                                        <p className="parab2">{user.description}</p>
                                        <div className="networkfollowingdiv">
                                            <img src="/assets/svg/anchortag.svg" alt="" />
                                            <button className="btn btnfollowing">
                                                <img src="/assets/svg/tickmark.svg" alt="" /> Following
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Tab>
        </Tabs>
    );
}

export default NetworkFollowingFollowers