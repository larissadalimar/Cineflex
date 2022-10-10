import styled from "styled-components"
import { Link } from "react-router-dom"

export default function DiaSessao({day}){
    return(
        <Dia>
            <p>{day.weekday} - {day.date}</p>
            <div>
                {day.showtimes.map((hora)  => <Link to={`/assentos/${hora.id}/`}> <button key={hora.id}>{hora.name}</button> </Link>)}
            </div>
        </Dia>
    )
}

const Dia = styled.div`

    margin-left: 24px;

    p {
        font-size: 20px;
        margin-bottom: 22px;
    }

    button {
        background-color: #E8833A;
        width: 83px;
        height: 43px;
        border: 0;
        border-radius: 3px;
        color: white;
        font-size: 18px;
        margin: 0 8px 23px 0;
    }
`