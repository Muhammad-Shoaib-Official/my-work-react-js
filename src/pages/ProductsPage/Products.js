import React from 'react'
import {  homeObjOne} from './Data'
import { InfoSection } from '../../components'
import Pricing from '../../components/Pricing/Pricing'

const Products = () => {
    return (
        <>
        <Pricing />
            
            <Pricing />
<InfoSection {... homeObjOne} />
        </>
            
    )
}

export default Products
