import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom'





export default function ListaDias() {
    const { imageId } = useParams();
    const [horario, setHorario] = useState([]);
    const [foto, setFoto] = useState([]);
 

    useEffect(() => {
        console.log("oi");
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${imageId}/showtimes` 
        );
        requisicao.then((res) => {
            setHorario(res.data.days);
            setFoto(res.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    

    return (
        <>
        <Personal key={horario.id}>

            <h2>Selecione o horario</h2>
            {horario.map(dia => (

                <>
                    <Semana>{dia.weekday} - {dia.date}
                    </Semana>
                    <Showtimes>
                        <Link to={`/sessao/${dia.showtimes[0].id}`}>
                            <Showtimes1>{dia.showtimes[0].name}</Showtimes1>
                        </Link>
                        <Link to={`/sessao/${dia.showtimes[1].id}`}>
                            <Showtimes2>{dia.showtimes[1].name}</Showtimes2>
                        </Link>

                    </Showtimes>



                </>

            ))}


        </Personal>
        <Header>
            <img src={foto.posterURL} alt="foto"/>
            <p>{foto.title}</p>
        </Header>
        
        </>
           



    )
}

const Personal = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 18px;
    p {
        margin-top: 50px;
        font-size: 25px;
    }

  
    h2{
    font-size: 24px;
    text-align: center;
    margin-top: 40px;
    }

`
const Semana = styled.div`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
    margin-top: 23px;
`
const Showtimes = styled.div`
    font-size: 20px;
    display:flex;
    flex-direction: row;
    margin-top: 22px;

  
`
const Showtimes1 = styled.div`
    color: #FFFFFF;
    background: #E8833A;
    font-size: 18px;
    width: 82px;
    height: 43px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content:center


`
const Showtimes2 = styled.div`
    margin-left: 9px;
    color: #FFFFFF;
    background: #E8833A;
    font-size: 18px;
    width: 82px;
    height: 43px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content:center


`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    width: 100%;
    height: 117px;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;

    img{
        width:48px;
        height: 72px;
        margin-left: 8px;
    }
    p{
        margin-left: 14px;
        font-size: 26px;
        color: #293845;
    }
`


