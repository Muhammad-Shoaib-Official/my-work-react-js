import React from 'react'
import {
        homeObjTwo } from './Data'
import { InfoSection } from '../../components'
import Pricing from '../../components/Pricing/Pricing'

const Home = () => {
    return (
        <>
            <InfoSection {... homeObjTwo} />

        </>
    )
}

export default Home
