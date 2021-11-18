import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyle';
import library from '../images/library.jpg';
import { 
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    lightTopLine,
    topLine,
    Heading,
    lightText,
    headLine,
    Subtitle,
    ImgWrapper,
    Img
    } from './InfoSection.elements';
const InfoSection = ({
    primary,
    lightBig, 
    imgStart,
    lightTopLine,
    lightTextDesc,
    buttonLabel,
    description,
    headLine,
    lightText,
    topLine,
    img,
    alt,
    start

}) => {
    return (
        <>

        <InfoSec lightBig = {lightBig}>
        <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                           <TopLine lightTopLine = {lightTopLine} >{topLine}</TopLine>
                           <Heading lightText={lightText}>{headLine}</Heading>
                           <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                           <Link to='/sign-up'>
                           <Button big fontBig primary ={primary}>
                               {buttonLabel}
                           </Button>
                           </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={library} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
       
        </>
    );
};

export default InfoSection;
