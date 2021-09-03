//npm install styled-components --save
// Itens estruturais usamos stled components
// Depois de estruturar, crio os componentes em variaveis para estarem declaradas.

import React from "react";
import styled from 'styled-components';

const Site = styled.div `
width:400px;
height:400px;
background-color:#00FF;
`;

const Botao = styled.button `
font-size:19px;
padding:10px 15px;
`;

const Title = styled.h1 `
    color:#FF0;
    font-size:18px;
`;

function App() {
    return (
        <Site>
            <Title>Título do site</Title>
            <Botao>Clique aqui</Botao>
        </Site>
    );
}

export default App;