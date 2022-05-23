import styled from 'styled-components';
import ListaFilmes from './ListaFilmes';
export default function Filmes(){
    return (
        <FullFilmes>
            <Titulo>Selecione o filme</Titulo>
            <ListaFilmes></ListaFilmes>
        </FullFilmes>



    )

}

const FullFilmes = styled.div`
    display:flex;
    flex-direction: column;

`;

const Titulo = styled.div`

    color: #293845;
    font-size: 24px;
    display: flex;
    justify-content: center;
    margin-top: 20px;


`