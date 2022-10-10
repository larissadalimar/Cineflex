import GlobalStyle from "../GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Sessoes from "./Sessoes"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"

export default function App(){
    return(
        <GlobalStyle>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
                    <Route path="/assentos/:idSessao/" element={<Assentos/>}/>
                    <Route path="/sucesso" element={<Sucesso/>}/>
                </Routes>
            </BrowserRouter>
        </GlobalStyle>
    )
}

