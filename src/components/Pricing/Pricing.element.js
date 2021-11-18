import styled from "styled-components";

export const Row = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
margin: 2rem 0.5rem;
/* @media screen and (max-width:820px){
    flex-direction: column;
    flex-basis: 100%;
} */
`;
export const Column = styled.div`
/* background-color: red; */
display: flex;
/* border: 2px solid black; */
margin: 2rem 0.5rem;
padding: 1rem 0.5rem;
min-width: 300px;
@media screen and (max-width:820px){
    width: 100%;
    flex-direction: column;
    flex-basis: 100%;
    margin: auto;
    padding: 0;

}

`;
export const PricingTitle = styled.h1`
justify-content: center;
font-size: 2rem;

@media screen and (max-width:850px){
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 3rem;
}
`;
export const Content = styled.div`
/* background-color: green; */
display: inline-block;
justify-content: space-between;
flex-basis: 30%;
margin: 0.1rem 2rem;
padding: 1rem 1rem;
border-radius: 5px;
box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
transition: 0.5s;
opacity: background-color 0.3;
z-index: 1;
&:hover{
    transform: translateY(-10px);
}

@media screen and (max-width:820px){
    flex-direction: column;
    flex-basis: 100%;
    margin-top: 2rem;
}
`;
export const ProductImg = styled.img`
width: 100%;
`;
export const ProductHeading = styled.h4`
font-size: 1rem;
margin: 1rem 0.5rem 0.5rem;
`;
export const ProductDescription = styled.p`
font-size: 1rem;
padding: 0.5rem 0.5rem;
text-align: justify;

@media screen and (max-width:850px){
    text-align: left;
}
`;
export const Price = styled.p`
font-size: 1rem;
margin: 0.3rem 0.5rem;
`;