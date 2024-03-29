import React, {useState, useEffect} from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from'react-icons/lib';
import { Button } from '../../globalStyle';
import { 
    Nav,
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks ,
    NavItemBtn,
    NavBtnLink
    } from './Navbar.elements';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() =>{
        showButton()
    }, [])
    window.addEventListener('resize', showButton);


    return (
        <>
        <IconContext.Provider value = {{color:'#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to ="/" onClick={closeMobileMenu}>
                    <NavIcon />
                      MY WORK                   
                </NavLogo>
                <MobileIcon onClick={handleClick} >
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/products'>Products</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/servicrs'>Servicrs</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/about'>About</NavLinks>
                    </NavItem>
                
                    <NavItem>
                        <NavLinks to='/contact'>Contact</NavLinks>
                    </NavItem>

                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/sign-up">
                                <Button primar>SIGN UP</Button>
                            </NavBtnLink>
                        ) :(
                            <NavBtnLink to="/sign-up">
                                <Button  fontBig priary>
                                    SIGN UP
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer> 
        </Nav>
        </IconContext.Provider>
            
        </>
    )
}

export default Navbar
