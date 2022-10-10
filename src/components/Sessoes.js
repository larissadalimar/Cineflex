import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import DiaSessao from "./DiaSessao";
import Footer from "./Footer";

export default function Sessoes(){
    const { idFilme } = useParams()
    const [filme, setFilme] = useState({})

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then((response) => 
            setFilme(response.data)
        )

        promise.catch((err) => 
            console.log(err)
        )
    },[])

    return(
        <>
            <Navbar/>
            <SelectSession>
                <p>Selecione o horário</p>
                <Dias>
                    {filme.days? (filme.days.map((day) => 
                        <DiaSessao key={day.id} day={day}/>
                    )): <></>}
                </Dias>
            </SelectSession>
            <Footer>
                <div>
                    <img src={filme.posterURL} alt={filme.title}/>
                </div>
                <p>{filme.title}</p>
            </Footer>
        </>
    )
}

const SelectSession = styled.div`
    width: 100%;
    position: absolute;
    top: 120px;
    left:0px;
    z-index: 0;

    color: #293845;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    flex-direction: column;

    p {
        font-size: 24px;
    }
    > p {
        margin-bottom: 30px;
    }
   
    
`

const Dias = styled.div`
    width: 100%;
    z-index: 0;
`