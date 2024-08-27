"use client"
import React from 'react'
import './style.scss'
import { Col, Row } from 'react-bootstrap'

const ExploreStreamers = () => {
    return (
        <>
            <Row className='my-4 px-3'>
                <p className='commanheadming'>Explore live Stream</p>
                <img src="/assets/svg/explore_live_stream.svg" alt='' className='img-fluid w-100 p-0' />
                <Col className='mt-3'>
                    <Row>
                        <Col xl='8'>
                            <img src="/assets/svg/Avatar.svg" alt="" /> <span>Mark Villiams</span>
                        </Col>
                        <Col xl='4' className='underlive_box'>
                            <img src="/assets/svg/eye.svg" alt="" style={{ float: "red" }} /> <span>1K</span> <img src="/assets/svg/livebox.svg" alt='' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default ExploreStreamers