"use client"
import React from 'react'
import { Nav, InputGroup, Form } from 'react-bootstrap';

function Allcreatorssidebar() {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search creator"
          aria-label="Search creator"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">
          <img src='/assets/svg/search.svg' alt=''/>
        </InputGroup.Text>
      </InputGroup>
      <div className='hrline'></div>
      <h3 className='h4heading'>Creator Categories</h3>
      <Nav defaultActiveKey="/home" className="flex-column allciconslist">
        <Nav.Link href="/home"><img src="/assets/images/image38.png"></img> All</Nav.Link>
        <Nav.Link href="/art"><img src="/assets/images/image39.png"></img> Art</Nav.Link>
        <Nav.Link href="/beauty"><img src="/assets/images/image40.png"></img> Beauty</Nav.Link>
        <Nav.Link href="/cosplay"><img src="/assets/images/image41.png"></img> Cosplay</Nav.Link>
        <Nav.Link href="/fashion"><img src="/assets/images/image42.png"></img> Fashion</Nav.Link>
        <Nav.Link href="/gaming"><img src="/assets/images/image43.png"></img> Gaming</Nav.Link>
        <Nav.Link href="/gym"><img src="/assets/images/image44.png"></img> Gym & Fitness</Nav.Link>
        <Nav.Link href="/music"><img src="/assets/images/image45.png"></img> Music</Nav.Link>
        <Nav.Link href="/streaming"><img src="/assets/images/image46.png"></img> Streaming</Nav.Link>
      </Nav>
    </>
  )
}

export default Allcreatorssidebar