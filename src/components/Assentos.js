import Navbar from "./Navbar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Assentos(){

    const { idSessao } = useParams()
    const [assentos, setAssentos] = useState({})

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((response) => {

            setAssentos(response.data)
            console.log(response.data)
        }
        )

        promise.catch((err) => 
            console.log(err)
        )
    },[])

    return(
        <>
            <Navbar/>
            <SelectSeats>
                <p>Selecione o(s) assento(s)</p>
                <Seats>
                    {assentos.seats? assentos.seats.map((seat) => <button>{parseInt(seat.name) < 10? "0" + seat.name : seat.name}</button>) : <></>}
                </Seats>
                <Opcoes>
                    <Selecionado>
                        <div></div>
                        <p>Selecionado</p>
                    </Selecionado>
                    <Disponivel>
                        <div></div>
                        <p>Disponivel</p>
                    </Disponivel>
                    <Indisponivel>
                        <div></div>
                        <p>Indisponivel</p>
                    </Indisponivel>
                </Opcoes>
            </SelectSeats>
        </>
    )
    
}

const SelectSeats = styled.div`
    width: 100%;
    position: absolute;
    top: 120px;
    left:0px;
    z-index: 0;

    color: #293845;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    p {
        font-size: 24px;
        margin-bottom: 30px;
    }
   
`

const Seats = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 90%;

    button {
        box-sizing: border-box;
        width: 26px;
        height: 26px;
        font-size: 11px;
        margin-right: 7px;
        margin-bottom: 18px;

        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;
    }
`

const Opcoes = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 27px;
        p {
            font-size:13px;
        }
        div {
            width: 24px;
            height: 24px;
            border-radius: 17px;
            box-sizing: border-box;
            color: red;
        }
    }
`
const Selecionado = styled.div`

    div{
        background: #1AAE9E;
        border: 1px solid #0E7D71;
    }
`

const Disponivel = styled.div`

    div{
        background: #C3CFD9;
        border: 1px solid #7B8B99;
    }
`

const Indisponivel = styled.div`

    div{
        background: #FBE192;
        border: 1px solid #F7C52B;
    }
`