"use client"
import React from 'react'
import './style.scss'
import { Row } from 'react-bootstrap'

const ExploreCreators = () => {
    return (
        <>
            <Row className='my-4 px-3'>
                <p className='commanheadming'>Explore Creators</p>
                <div className='browsebox'><img src="/assets/svg/browse_creators.svg" alt='' /> Browse </div>
            </Row>
        </>
    )
}

export default ExploreCreators