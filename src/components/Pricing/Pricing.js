import React from 'react'
import { Row, Column, Content, PricingTitle, ProductImg, ProductHeading,ProductDescription,Price } from './Pricing.element';
import library from '../images/library.jpg';
import tech from '../images/tech.jpg';
import running from '../images/running.jpg';
function Pricing() {
    return (
        <>
        <Row>
            <PricingTitle> Top Products</PricingTitle>
            <Column>
            <Content>
                <ProductImg src={library}/>
                <ProductHeading>Product 1 Name</ProductHeading>
                <ProductDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </ProductDescription>
                <Price>50.00$</Price>
            </Content>
            <Content>
            <ProductImg src={tech}/>
                <ProductHeading>Product 2 Name</ProductHeading>
                <ProductDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ProductDescription>
                <Price>50.00$</Price>
            </Content>
            <Content>
            <ProductImg src={running}/>
                <ProductHeading>Product 3 Name</ProductHeading>
                <ProductDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ProductDescription>
                <Price>50.00$</Price>
            </Content>
            </Column>
            <Column>
            <Content>
            <ProductImg src={tech}/>
                <ProductHeading>Product 4 Name</ProductHeading>
                <ProductDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ProductDescription>
                <Price>50.00$</Price>
            </Content>
            <Content>
            <ProductImg src={running}/>
                <ProductHeading>Product 5 Name</ProductHeading>
                <ProductDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ProductDescription>
                <Price>50.00$</Price>
            </Content>
               <Content>
                <ProductImg src={library}/>
                <ProductHeading>Product 6 Name</ProductHeading>
                <ProductDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ProductDescription>
                <Price>50.00$</Price>
            </Content>
           
            </Column>
        </Row>
            
        </>
    )
}

export default Pricing
