// Estado Global, os valores podem ser modificados em qt a aplicação esta rodando, adiciona coisas ou tira da lista, vai mudando os valores em qt roda a aplicação. Estado global é um estado similar ao useState. São valores específicos que teremos acesso, mesmo alterando as telas. Um useState global a toda aplicação. Compartilhar informação entre as telas, utilizar em vários componentes.

// npm install redux react-redux       bibliotecas para instalar na pasta geral da aplicação.

// - Store : local especifico onde que ficara todos os dados do Redux, usamos no começo da app. 
// - Reducers : Responsável por armazenar várias informações sobre determinado assunto, ex. gerenciamento de usuario que usamos em várias telas, quero manipular conforme as informações do usuário , crio um Reducers especíco aos usuarios, qualquer tipo de informação ou + de uma para os usuarios, no qual jogarei em uma caixinha ou compartimento de Store.
// - Actions : A action fica dentro do Reducer. São ações que podem ser feitas . ex. Reducer Usuarios ->  Action "Trocar Nome" -> Carlos , mando o comando que eu quero q dentro do Reducer ele troca a informação com essas actions que enviei, ou leio/ executo as informações do Reducers sem precisar da action. No nosso componente leio coisas no reducer e executo ações no reducer.

// No index.js que irei criar o Store. import { Provider } from 'react-redux':
// import { createStore } from 'redux';
// Onde irei criar meu reducer.. const store = createStore();
