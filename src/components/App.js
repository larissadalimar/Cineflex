import GlobalStyle from "../GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Sessoes from "./Sessoes"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"
import { useState } from "react"

export default function App(){
    const [form, setForm ] = useState({
        ids: [],
        name: '',
        cpf: '',
    })

    const [filme, setFilme] = useState({
        name: '', 
        hour: '', 
        day: ''
    })

    return(
        <GlobalStyle>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
                    <Route path="/assentos/:idSessao/" element={<Assentos form={form} setForm={setForm} filme={filme} setFilme={setFilme}/>}/>
                    <Route path="/sucesso" element={<Sucesso form={form} filme={filme}/>}/>
                </Routes>
            </BrowserRouter>
        </GlobalStyle>
    )
}

