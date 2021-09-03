// Todo elemento que criar na tela é um componente. 
// 2 formas para se criar um componente
//Dps q crio preciso exportar o componente. Posso criar por classes ou por funcoes.



import React from "react";

/*
#1 //Método antigo
class App extends React.Component {

    render() {
        return <h1>Testando 1,2,3</h1>
    }
}*/

// + UTILIZADO
function App() {
    return <h1>Testando 3,4,5</h1>
}

//+ UTILIZADO
// let App = () => {
//     return<h1> estando 6,7,8</h1>
// };

// let App = () => <h1>Testando 10,11,12</h1>

export default App;


