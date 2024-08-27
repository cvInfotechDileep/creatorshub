import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import "./style.scss"
import CreaterMedia from '../CreaterMedia';
import CreatorOverview from '../CreatorOverview';
import CreatorNetwork from '../CreatorNetwork';
import CreatorWishlistTab from '../CreatorWishlistTab';
import CreatorMyactivity from '../CreatorMyactivity';
import CollectionsTab from '../CollectionsTab';
import GiftersTab from '../GiftersTab';

const CreatorProfileTabs = () => {
  const [key, setKey] = useState('1');

  const tabs = [{
    tabname: "Media",
    tabId: '1',
    tabicon: "/assets/svg/media.svg",
    tabcomponent: <CreaterMedia />
  },
  {
    tabname: "Overview",
    tabId: '2',
    tabicon: "/assets/svg/home2.svg",
    tabcomponent: <CreatorOverview />
  },
  {
    tabname: "Network",
    tabId: '3',
    tabicon: "/assets/svg/networkicon.svg",
    tabcomponent: <CreatorNetwork />
  }, {
    tabname: "WishList",
    tabId: '4',
    tabicon: "/assets/svg/giftIcon2.svg",
    tabcomponent: <CreatorWishlistTab />
  },
  {
    tabname: "My Activity",
    tabId: '5',
    tabicon: "/assets/svg/anticlock.svg",
    tabcomponent: <CreatorMyactivity />
  },
  {
    tabname: "Collections",
    tabId: '6',
    tabicon: "/assets/svg/collections.svg",
    tabcomponent: <CollectionsTab />
  }, {
    tabname: "Gifters",
    tabId: '7',
    tabicon: "/assets/svg/giftIcon2.svg",
    tabcomponent: <GiftersTab />
  },]

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

export default CreatorProfileTabs