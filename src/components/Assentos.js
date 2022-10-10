import Navbar from "./Navbar";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";


export default function Assentos(){

    const { idSessao } = useParams()
    const [assentos, setAssentos] = useState({})
    const [statusAssentos, setStatusAssentos] = useState([])
    const [form, setForm] = useState({
        ids: [],
        name: '',
        cpf: '',
    });
    
    const navigate = useNavigate()

    function handleForm (e) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        }) 
    }

    function reserva(e){
        e.preventDefault()
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", form)

        promise.then((response) => {
            console.log(response)
            navigate("/sucesso")
        })

        promise.catch((err) => 
            console.log(err)
        )
    }

    function escolheAssento(seat){
        if(!seat.isAvailable){
            alert("Esse assento não está disponível")
        }else{

            if(!statusAssentos[seat.id-1]){

                let assentosSelecionados = form.ids
                assentosSelecionados.push(seat.id)
                setForm({
                    ...form,
                    ids:assentosSelecionados
                })

                let selectAssentos = statusAssentos
                selectAssentos[seat.id-1] = true
                setStatusAssentos(selectAssentos)

            }else{
                let assentosSelecionados = form.ids
                let index = assentosSelecionados.indexOf(seat.id)

                assentosSelecionados.splice(index, 1);
                
                setForm({
                    ...form,
                    ids:assentosSelecionados
                }) 

                let selectAssentos = statusAssentos
                selectAssentos[seat.id-1] = false
                setStatusAssentos(selectAssentos)
            }
            
        } 
    }

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((response) => {

            setAssentos(response.data)
            setStatusAssentos(response.data.seats)
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
                    {assentos.seats? assentos.seats.map((seat) => 
                        (seat.isAvailable? 
                            <Disponivel onClick={() => escolheAssento(seat)} isSelected={statusAssentos[seat.id-1]? true : false}>
                                <button>{parseInt(seat.name) < 10? "0" + seat.name : seat.name}</button> </Disponivel> :
                            <Indisponivel onClick={() => escolheAssento(seat)}> <button>{parseInt(seat.name) < 10? "0" + seat.name : seat.name}</button> </Indisponivel> )) 
                        : <></>}
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
                <Formulario>
                    <form onSubmit={reserva}>
                        <div>
                            <label htmlFor="name">Nome do comprador:</label>
                            <input type="text" name="Nome" onChange={handleForm} value={form.description} required placeholder="Digite seu nome..."/>
                        </div>
                        <div>
                            <label htmlFor="name">CPF do comprador:</label>
                            <input type="text" name="cpf" onChange={handleForm} value={form.cpf} required placeholder="Digite seu CPF..."/>
                        </div>
                        <div className="submit-button">
                            <button type="submit">Reservar assento(s)</button>
                        </div>
                    </form>
                </Formulario>
            </SelectSeats>
            {assentos.movie? 
            <Footer>
                <div>
                    <img src={assentos.movie.posterURL} alt={assentos.movie.title}/>
                </div>
                <div>
                    <p>{assentos.movie.title}</p>
                    <p>{assentos.day.weekday} - {assentos.name}</p>
                </div>
            </Footer> : 
            <></> }
        </>
    )
    
}

const Formulario = styled.div`

    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 25px;

    form {
        width: 90%;
    }

    label {
        margin: 0;
        font-size: 18px
    }

    div {

        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        margin-bottom: 10px;

        input {
            width: 100%;
            height: 51px;
            border: 1px solid #D5D5D5;
            border-radius: 3px;
            font-size: 18px;
            color: #AFAFAF;
            font-style: italic;
        }

        input:placeholder {
            margin-left: 18px;
        }
    }

    button{

        background: #E8833A;
        border-radius: 3px;
        width: 80%;
        height: 42px;
        color: white;
        font-size: 18px;
        border: 0;
    }

    .submit-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:20px;
    }
`

const SelectSeats = styled.div`
    width: 100%;
    position: absolute;
    top: 100px;
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

    div, button{
        background: #1AAE9E;
        border: 1px solid #0E7D71;
    }
`

const Disponivel = styled.div`

    div, button {
        background: ${props=>props.isSelected? '#1AAE9E':'#C3CFD9'};
        border: 1px solid #7B8B99;
    }
`

const Indisponivel = styled.div`

    div, button{
        background: #FBE192;
        border: 1px solid #F7C52B;
    }
`