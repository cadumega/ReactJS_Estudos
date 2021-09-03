//npm install styled-components --save
// Itens estruturais usamos stled components
// Depois de estruturar, crio os componentes em variaveis para estarem declaradas.

//podemos usar props nos componentes 
//o botão para ações encorajadas no sistema possui a class btn-success e é verde, o btn-danger é vermelho e representa ações perigosas do sistema, nesses casos utilizar a prop da maneira 1 seria melhor (e melhor ainda se vc estiver utilizando um tema). Agora se a sua prop vai representar um estado binário (ligado/desligado, selecionado/não-selecionado, ativo/inativo) então é melhor a segunda opção com o ternário.

// extender o uso do styled para outro componente .

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
background-color:${props => props.color || 'yellow'};    //permite executar js aqui dentro, recebo props e uso props como eu quiser. retorno props.color. Se não tiver props color irá usar amarelo.

`;

const Botao2 = styled.button `
font-size:19px;
padding:10px 15px;
background-color:${props => props.ativo == true ? 'brown' :'#CCC'};
color: ${props => props.ativo == true ? 'white' :'red'};
`;

const BotaoPadrao =styled.button `
font-size:19px;
padding:10px 15px;
border:3px dashed #FF0000;
color:#FF0000;
background-color:#FFF;
margin:5px;
border-radius:5px;
`;

//herda as propriedades do componente pai
const BotaoPequeno = styled(BotaoPadrao) `
padding: 5px 10px;
font-size: 16px;
`;

const Title = styled.h1 `
    color:#FF0;
    font-size: 18px;
`;

function App() {
    return (
        <Site>
            <Title>Título do site</Title>
            <Botao color='#FF0000'>Cancelar</Botao>
            <Botao color='green'>Aprovar</Botao>
            <Botao color=''>Anular</Botao>
            
            <Botao2 ativo={true}>Teste</Botao2>
            <Botao2 ativo={false}>Teste2</Botao2>

            <BotaoPadrao>Teste 3</BotaoPadrao>
            <BotaoPequeno>Teste 3</BotaoPequeno>
        </Site>
    );
}

export default App;