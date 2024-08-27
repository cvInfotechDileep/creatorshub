import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import "./style.scss"
import UserOverview from '../UserOverview';
import UserMyactivity from '../UserMyactivity';
import UserNetwork from '../UserNetwork';

const UserProfileTabs = () => {
  const [key, setKey] = useState('1');

  const tabs = [
    {
      tabname: "Overview",
      tabId: '1',
      tabicon: "/assets/svg/home2.svg",
      tabcomponent: <UserOverview />
    },
    {
      tabname: "My Activity",
      tabId: '2',
      tabicon: "/assets/svg/anticlock.svg",
      tabcomponent: <UserMyactivity />
    },
    {
      tabname: "Network",
      tabId: '3',
      tabicon: "/assets/svg/networkicon.svg",
      tabcomponent: <UserNetwork />
    },
  ]

  const gettitle = (tab) => {
    return (
      <div className='tabHeading'>
        <img src={tab.tabicon} alt="" />
        <h1>{tab.tabname}</h1>
      </div>
    )
  }

  return (
    <Tabs
      defaultActiveKey={key}
      id="user_profile_section"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3, mt-4"
    >

      {tabs?.map((tab, index) => {
        return <Tab key={index} eventKey={tab?.tabId} title={gettitle(tab)}>
          {tab.tabcomponent}
        </Tab>
      })}

    </Tabs>
  );
}

export default UserProfileTabs