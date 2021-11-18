import React from 'react'
import {homeObjOne,
        homeObjTwo } from './Data'
import { InfoSection } from '../../components'
import Pricing from '../../components/Pricing/Pricing'

const Home = () => {
    return (
        <>
            <InfoSection {... homeObjOne} />
            <Pricing />
            <InfoSection {... homeObjTwo} />
            <Pricing />

        </>
    )
}

export default Home
