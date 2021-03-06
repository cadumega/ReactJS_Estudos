
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBoxL from './components/SearchBoxL';    // agora que importei posso usar

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

    // Crio uma nova array, no qual irei aproveitar conteúdo de ...list spreadOp, com o novo objeto de item q quero add, e dps jogo em setList.

    function addAction(newItem) {
        let newList = [...list, {title:newItem, done:false}];
        setList(newList);
    }

    //pegar a propria tarefa da lista e inverter.
    function handleToggleDone(index) {
        let newList = [...list];
        newList[index].done = !newList[index].done

        setList(newList)
    }

    return (
    <>
        <h1>Lista de tarefas </h1>

        <SearchBoxL 
        frasePadrao="Adicione um item"
        onEnter={addAction}
        />

        <hr/>
        <ul>
            {list.map((item,index)=>(
                <li key={index} onClick={()=>handleToggleDone(index)}>
                    {item.done && 
                    <del>{item.title}</del>
                    }
                    {!item.done && 
                    item.title
                    }

{/* preciso tirar o onClick do li */}
                    {/* <button onClick={()=>handleToggleDone(index)}>
                        {item.done && 'Desfazer'}
                        {!item.done && 'Fazer'}
                    </button> */}

                </li>
            ))}
        </ul>


    </>
    );
}

export default App;

