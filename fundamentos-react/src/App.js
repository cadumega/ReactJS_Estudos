// Router biblioteca a parte, 
//  npm install react-router-dom   *NO ARQ .js do SRC!!!* e depois npm start para voltar inicialização do sistema.     
//  versão do router para web, serve como a base do site
// Não precisar Atualizar a página toda, recarregar somente o link /sobre .
// Por isso importei o componente lá em cima o Link, o site nem pisca para atualizar, é aplicado um js que linka com react e recarrega apenas o que interessa do componente.


// Componente Switch , dentro dele que criamos as rotas.
// Ideal cada tela ter o seu proprio componente para ficar mais organizado , na pasta pages.
// Fazer a rota sem o exact, irá procurar na url se tem algo relacionado ao path. Ao colocar exact se aparecer a rota exata da '/'. Geralmente só coloca na /.

import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {

    return (
        <BrowserRouter>
          <header>
            <h1>Meu Site Legal </h1>
               <nav>
                  <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to ="/sobre">Sobre</Link>
                     </li>
                  </ul>
                </nav>
            </header>
            <hr/>

        <Switch>
            <Route exact path='/'> 
                <Home/>
            </Route>

            <Route path='/sobre'> 
                <Sobre/>
            </Route>
        </Switch>

            <hr/>
            <footer>
                Todos os direitos reservados..
            </footer>
        </BrowserRouter>
   );
}

export default App;


