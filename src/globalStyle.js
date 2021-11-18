import styled, {createGlobalStyle} from "styled-components";


const GlobalSyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'source Sans Pro', sans-serif ;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding-left: 6.2rem;
padding-right: 6.2rem;

@media screen and (max-width: 991px){
padding-left: 3.8rem;
padding-right: 3.8rem; 
}
`;

export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb' )};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
cursor: pointer;
border:none;


&:hover{
transition: all 0.3s ease-out;
background: #fff;
background: ${({primary}) => (primary ? '#0467fb' : '#4b59f7' )};
}
@media screen and (max-width: 960px){
    width: 100%;
}
`

export default GlobalSyle