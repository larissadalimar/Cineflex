import GlobalStyle from "../GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Sessoes from "./Sessoes"
import Assentos from "./Assentos"

export default function App(){
    return(
        <GlobalStyle>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
                    <Route path="/assentos/:idSessao/" element={<Assentos/>}/>
                </Routes>
            </BrowserRouter>
        </GlobalStyle>
    )
}

