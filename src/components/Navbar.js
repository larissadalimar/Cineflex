import styled from "styled-components"

export default function Navbar(){
    return(
        <NavbarStyle>
            <p>CINEFLEX</p>
        </NavbarStyle>
    )
}

const NavbarStyle = styled.div`

    position: fixed;
    width: 100%;
    height: 67px;
    left: 0px;
    top: 0px;

    background-color: #C3CFD9;
    color:#E8833A;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    p{
        font-size: 34px;
        font-weight: 400;
    }
`