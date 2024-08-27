
"use client";
import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import "./style.scss";

const TopUsersTab = () => {
    const [key, setKey] = useState('Top Creators');
    const [showMoreFollowing, setShowMoreFollowing] = useState(false);
    const [showMoreFollowers, setShowMoreFollowers] = useState(false);

    const followingUsers = [
        { name: 'Talon Everett', username: '@talon_e', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Jane Doe', username: '@jane_d', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'John Smith', username: '@john_s', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Alice Johnson', username: '@alice_j', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Michael Brown', username: '@michael_b', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Sarah Wilson', username: '@sarah_w', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'David Lee', username: '@david_l', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Emily Davis', username: '@emily_d', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Christopher Martinez', username: '@chris_m', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Jessica Garcia', username: '@jessica_g', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Daniel Hernandez', username: '@daniel_h', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Sophia Rodriguez', username: '@sophia_r', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Matthew Martinez', username: '@matthew_m', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Olivia Gonzalez', username: '@olivia_g', image: "/assets/svg/following_image.svg", status: 'Following' },
        { name: 'Andrew Wilson', username: '@andrew_w', image: "/assets/svg/following_image.svg", status: 'Following' }
    ];

    const followersUsers = [
        { name: 'Kevin Anderson', username: '@kevin_a', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Rachel Thompson', username: '@rachel_t', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Brian Harris', username: '@brian_h', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Lisa Clark', username: '@lisa_c', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Eric Martinez', username: '@eric_m', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Laura Hall', username: '@laura_h', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Anthony Young', username: '@anthony_y', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Patricia King', username: '@patricia_k', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Mark Wright', username: '@mark_w', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Jennifer Lopez', username: '@jennifer_l', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Justin Hill', username: '@justin_h', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Megan Scott', username: '@megan_s', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Brandon Green', username: '@brandon_g', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Jessica Adams', username: '@jessica_a', image: "/assets/svg/following_image2.svg", status: 'Followers' },
        { name: 'Ryan Baker', username: '@ryan_b', image: "/assets/svg/following_image2.svg", status: 'Followers' }
    ];

    // Tabs data
    const tabsData = [
        {
            key: 'Top Creators',
            title: `Top Creators`,
            users: followingUsers,
            showMore: showMoreFollowing,
            setShowMore: setShowMoreFollowing
        },
        {
            key: 'Top Gifters',
            title: `Top Gifters`,
            users: followersUsers,
            showMore: showMoreFollowers,
            setShowMore: setShowMoreFollowers
        }
    ];

    return (
        <>
            <Tabs
                id="follower_following_tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                {tabsData.map((tab) => (
                    <Tab eventKey={tab.key} title={tab.title} key={tab.key}>
                        {tab.users.slice(0, tab.showMore ? tab.users.length : 5).map((user, index) => (
                            <div key={index} className="d-flex mb-3 align-items-center">
                                <div className="p-2">
                                    <img src={user.image} alt="User" />
                                </div>
                                <div className="p-2 follow_name">
                                    <h6>{user.name}</h6>
                                    <p>{user.username}</p>
                                </div>
                                <div className="ms-auto p-2">
                                    <div className='followbuttoncv'>{user.status}</div>
                                </div>
                            </div>
                        ))}
                        {tab.users.length > 10 && !tab.showMore && (
                            <div className="text-center">
                                <button onClick={() => tab.setShowMore(true)} className="showallfollowers w-100">Show More</button>
                            </div>
                        )}
                    </Tab>
                ))}
            </Tabs>
        </>
    );
};

export default TopUsersTab;
