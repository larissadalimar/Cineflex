import styled from "styled-components"

const Footer = styled.div`

    position: fixed;
    z-index: 2;
    width: 100%;
    height: 117px;
    left: 0px;
    bottom: 0px;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    color: #293845;

    p {
        font-size: 23px;
    }


    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    

    div:nth-child(1) {
        width: 64px;
        height: 89px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 14px;
        margin-left: 10px;
    }

    img {
        width: 90%;
        height: 90%;
    }

`

export default Footer