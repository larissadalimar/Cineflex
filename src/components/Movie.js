import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Movie({ idFilme, title, posterURL}){
    
    return (
        <>
            <Link to={`/sessoes/${idFilme}`}>
                <MovieStyle>
                    <img src={posterURL} alt={title}/>
                </MovieStyle>
            </Link>
        </>
    )
}

const MovieStyle = styled.div`

    height: 209px;
    width: 145px;
    border-radius: 3px;
    margin: 30px 0 0 0;

    display:flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    
    img{
        width: 90%;
        height: 90%;
    }
`