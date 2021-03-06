// Router biblioteca a parte, 
//  npm install react-router-dom   *NO ARQ .js do SRC!!!* e depois npm start para voltar inicialização do sistema.     
//  versão do router para web, serve como a base do site
// Não precisar Atualizar a página toda, recarregar somente o link /sobre .
// Por isso importei o componente lá em cima o Link, o site nem pisca para atualizar, é aplicado um js que linka com react e recarrega apenas o que interessa do componente.

// Componente Switch , dentro dele que criamos as rotas.
// Ideal cada tela ter o seu proprio componente para ficar mais organizado , na pasta pages.
// Fazer a rota sem o exact, irá procurar na url se tem algo relacionado ao path. Ao colocar exact se aparecer a rota exata da '/'. Geralmente só coloca na /.

//:cat qualquer coisa q vier depois dos : será armazenado na variavel cat. PARAMETRO DINAMICO
// { Para conseguir usar o hook e os parametros} , acessar foto 1,2,3.
// Página é a mesma o que muda é o conteúdo, produto, foto...

// Router:Query . A rota é o link. A query é o restante como a especificação da página, ex: episodio de uma seria XYZ-10x01.

//Redirect , faz a condição usando redirect no hook

import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria';


function App() {

    return (
        <BrowserRouter>
          <header>
            <h1>Meu Site de Treinamento React - Rotas</h1>
               <nav>
                  <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to ="/sobre">Sobre</Link>
                     </li>
                     <li>
                        <Link to ="/quem-somos">Quem Somos</Link>
                     </li>
                     <li>
                        <Link to ="/categoria?tipo=esportes">Esportes</Link>
                     </li>
                     <li>
                        <Link to ="/categoria?tipo=noticias">Notícias</Link>
                     </li>
                     <li>
                        <Link to ="/categoria?tipo=viagem">Viagem</Link>
                     </li>
                  </ul>
                </nav>
            </header>
            <hr/>

{/* Ordem de verificação da rota */}
        <Switch>
            <Route exact path='/'> 
                <Home/>
            </Route>

            <Route path='/sobre'> 
                <Sobre/>
            </Route>

            <Route exact path='/quem-somos'> 
            <Redirect to='/sobre'/>
            </Route>

            <Route path='/categoria/:cat'>  
                <Categoria/>
            </Route>

{/* Ultima rota, aceita qualquer coisa, pois as outras não bateram. */}
            <Route path='*'>  
                <h4>Página não encontrada</h4>
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


