import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from 'axios'
import Movie from "./Movie"
import Navbar from "./Navbar"

export default function Home(){

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then(response => {
            setMovies(response.data)
        })

        promise.catch( err => {
            console.log(err.message)
        })
    },[])

    return(
        <>
        <Navbar/>
        <SelectMovie className="select-filmes"> 
            <p>Selecione o filme</p> 
            <Movies className="filmes">
                {movies.map((movie) => 
                    <Movie className="filme" key={movie.id} idFilme={movie.id} title={movie.title} posterURL={movie.posterURL}/>)
                }
            </Movies>
        </SelectMovie>
        </>
    )
}

const SelectMovie = styled.div`
    width: 100%;
    position: absolute;
    top: 120px;
    left:0px;
    z-index: 0;

    color: #293845;
    display:flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    p{
        font-size: 24px;
    }

`

const Movies = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    position: absolute;
    top: 70px;

`
