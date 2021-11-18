import React from 'react';
import { Button } from '../../globalStyle';
import { Link } from 'react-router-dom';
import{
    FooterContainer, 
    FooterSubHeading, 
    FooterSubscription, 
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterlinksItems,
    FooterTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink

} from './Footer.elements';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive latest news and trends.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Email" />
                    <Button fontBig>Subscribe Now</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterlinksItems>
                        <FooterTitle>About Us</FooterTitle>
                        <FooterLink to='/sign-up'>SIGN UP</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms and Conditions</FooterLink>
                    </FooterlinksItems>

                    <FooterlinksItems>
                        <FooterTitle>Contact Us</FooterTitle>
                        <FooterLink to='/sign-up'>SIGN UP</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms and Conditions</FooterLink>
                    </FooterlinksItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterlinksItems>
                        <FooterTitle>Videos</FooterTitle>
                        <FooterLink to='/sign-up'>SIGN UP</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms and Conditions</FooterLink>
                    </FooterlinksItems>

                    <FooterlinksItems>
                        <FooterTitle>Social Media</FooterTitle>
                        <FooterLink to='/sign-up'>SIGN UP</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms and Conditions</FooterLink>
                    </FooterlinksItems>

                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        MY WORK
                    </SocialLogo>
                    <WebsiteRights>MY WORK @ 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" area-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" area-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" area-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" area-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" area-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            
        </FooterContainer>
    )
}

export default Footer
