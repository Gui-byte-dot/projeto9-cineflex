import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Link } from "react-router-dom";






export default function ListaFilmes(){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const requisicao = axios.get(
            "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        );

        requisicao.then((response) =>{
            setMovies(response.data);
        });
    },[]);





    return (
        <Sessoes>
            {movies.map((r) => (
                <div key={r.id}>
                    <Link to={`/filme/${r.id}`}>
                        <Foto src={r.posterURL} alt="movies"/>
                    </Link>
                </div>
            ))}


        </Sessoes>


    )
}

const Sessoes = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap:wrap;
    margin-top: 30px;

`;
const Foto = styled.img`
    width:129px;
    height:193px;
    `

