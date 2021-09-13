// Passo 1 envio para onEnter e limpa o campo
// Passo 2 add action em App.js

import React, {useState} from 'react';
import styled from 'styled-components';

const InputText = styled.input `
    border: 2px solid #000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width:300px;
`;

function SearchBoxL(props) {

    const [texto,setTexto] = useState('');

        function handleKeyUp(e) {
           if(e.keyCode === 13) {
               if(props.onEnter) {
                   props.onEnter (texto);
               }
                setTexto('');
           }
        }

    return (
        <InputText 
            type= 'text'
            value = {texto} 
            onChange={(e)=>setTexto(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder={props.frasePadrao ?? 'Digite alguma coisa'}/>
    );
}

export default SearchBoxL;