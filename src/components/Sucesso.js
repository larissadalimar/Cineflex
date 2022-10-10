import styled from "styled-components"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"


export default function Sucesso({form, filme}){

    const navigate = useNavigate()

    function voltarHome(){
        navigate("/")
    }


    return(
        <>
            <Navbar/>
            <PedidoSucesso>
                <h1> Pedido feito com sucesso! </h1>
                <Info>
                    <h2>Filme e sessão</h2>
                    <p>{filme.name}</p>
                    <p>{filme.day} - {filme.hour}</p>
                </Info>
                <Info>
                    <h2>Ingressos</h2>
                    {form.ids.map((assento) => <p> Assento {assento}</p>)}
                </Info>
                <Info>
                    <h2>Comprador</h2>
                    <p>Nome: {form.name}</p>
                    <p>CPF: {form.cpf}</p>
                </Info>
                <div className="voltar-home">
                    <button onClick={voltarHome}>Voltar para Home</button>
                </div>
            </PedidoSucesso>
        </>
    )
}

const PedidoSucesso = styled.div`

    h1 {
        color: #247A6B;
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 50px;
        text-align: center;
    }
    

    width: 100%;
    position: absolute;
    top: 100px;
    left:0px;
    z-index: 0;


    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    button{

        background: #E8833A;
        border-radius: 3px;
        width: 60%;
        height: 42px;
        color: white;
        font-size: 18px;
        border: 0;
        margin-top: 70px;
    }

    .voltar-home {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Info = styled.div`

    margin-left: 30px;
    width: 100%;

    font-size: 24px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    font-size: 22px;
    margin-bottom: 30px;

    h2{
        font-weight: 700;
    }
`
