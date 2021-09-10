//Criar uma useState que será uma list..
//Fazendo uma requisição qualquer no useEffect

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';    // agora que importei posso usar

function App() {

    const [searchText, setSearchText] = useState('');

    const[list, setList] = useState([]);

    useEffect(()=> {
        setList([
            {id:123 , title:'Comprar o bolo', done:false},
            {id:124 , title:'Pegar o cachorro no petshop', done:true},
            {id:125 , title:'Estudar a aula', done:false}
        ])
    },[]);

    function handleSearchInput(novoTexto) {
        setSearchText(novoTexto);
    }

    return (
    <>
        <h1>Lista de tarefas </h1>

        <SearchBox 
        frasePadrao="Faça sua busca..."
        onChangeText={handleSearchInput}
        />

        <hr/>
        <ul>
            {list.map((item,index)=>(
                <li key={index}>
                    {item.done && 
                    <del>{item.title}</del>
                    }
                    {!item.done && 
                    item.title}
                </li>
            ))}
        </ul>


    </>
    );
}

export default App;


{/* <ul>
{list.map((item,index)=>(
    <li key={index}>{item.title}</li>
))}
</ul> */}
//Posso simplificar essa listagem, usando () que irá entender como retorno. Ex acima.
//Sempre que definir o map em React, preciso ter a key={}
//  <li key={item.id.toString()}>{item.title}</li>   // Se fosse numeração a id unica.
// index que equivale a n° da chave. Mais utilizado.
//  Se fosse componente teria que usar e passar a key={}


 {/* {list.map((item)=> {
                return (
                    <li>{item.title}</li>
                );
            })} */}