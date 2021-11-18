import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";



export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4rem 0 2rem 0;
background-color: #101522;
`;

export const FooterSubscription = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin: 24px;
padding: 24px;
color: #fff;
`;

export const FooterSubHeading = styled.p`
font-family: sans-serif;
margin-bottom: 24px;
font-size: 24px;
`;

export const FooterSubText = styled.p`
font-size: 20px;
margin-bottom: 24px;
`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width:820px){
    flex-direction: column;
    width: 80%;
}
`;
export const FormInput = styled.input`
padding: 10px 20px;
border-radius: 2px;
margin-right: 10px;
outline: none;
font-size: 16px;

&::placeholder{
    color:#242424;
}

@media screen and (max-width:820px){
    margin: 0 0 16px 0;
}
`;

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;
width:100%;
max-width:1000px;

@media screen and (max-width:820px){
    padding-top: 32px;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width:820px){
    flex-direction: column;
}
`;

export const FooterlinksItems = styled.div`
display: flex;
flex-direction: column;
width: 160px;
box-sizing:border-box;
align-items: flex-start;
text-align: left;
margin:16px;
color: #fff;
`;

export const FooterTitle = styled.h2`
margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.8rem;

&:hover{
    color: #0467fb;
    transition: 0ms.3s ease-out;
}
`;

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
max-width: 1000px;
margin: 40px auto 0 auto;

@media screen and (max-width:820px){
    flex-direction: column;
}
`;

export const SocialLogo = styled(Link)`
cursor: pointer;

display: flex;
align-items: center;
justify-content: start;
text-decoration: none;
font-size: 2rem;
margin-bottom: 16px;
color: #fff;
`;

export const SocialIcon = styled(FaMagento)`
margin-right: 10px;
`;

export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`;

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`;