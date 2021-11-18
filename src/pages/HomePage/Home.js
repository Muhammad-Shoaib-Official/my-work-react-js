import React from 'react'
import { homeObjFour, 
        homeObjOne,
        homeObjThree,
        homeObjTwo } from './Data'
import { InfoSection } from '../../components'
import Pricing from '../../components/Pricing/Pricing'

const Home = () => {
    return (
        <>
            <InfoSection {... homeObjOne} />
            <InfoSection {... homeObjTwo} />
            <InfoSection {... homeObjThree} />
            <InfoSection {... homeObjFour} />
            <Pricing />

        </>
    )
}

export default Home
