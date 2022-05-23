import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Filmes from "./Filmes";
import ListaDias from './ListaDias';
import ListaAssentos from './ListaAssentos';
import Successo from './Sucesso';



export default function App(){
    
    return (
        <BrowserRouter>

            <Navbar />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/filme/:imageId" element={<ListaDias />} />
                <Route path="/sessao/:id" element={<ListaAssentos />} />
                <Route path="/sucesso" element={<Successo />} />
            </Routes>
        
        
        </BrowserRouter>

    );
}
