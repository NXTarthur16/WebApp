import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './componentes/app/App';
import Navbar from './componentes/navbar/Navbar';
import reportWebVitals from './reportWebVitals';
import Rodape from './componentes/rodape/Rodape';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App 
      nome = {12}
    />

    <App 
      nome = {"Arthur"}
    /> */}

    <Navbar
    item0 = {"Nome"}
    item1 = {"Projetos"}
    item2 = {"Experiência"}
    item3 = {"Contato"}
    item4 = {"Sobre mim"}
    />

    <Navbar
    item0 = {"Esse"}
    item1 = {"é"}
    item2 = {"um"}
    item3 = {"teste"}
    item4 = {"(:"}
    />

    <Rodape 
    item0 = {"Apoiadores"}
    item1 = {"Senac"}
    item2 = {"Sesc"}
    item3 = {"116128412023.1"}
    item4 = {"Patrocinadores"}
    item5 = {"Prefeitura RJ"}
    item6 = {"Prefeitura Teresópolis"}
    />

    <Rodape 
    item0 = {"Telefone"}
    item1 = {"21972464469"}
    item2 = {"21 96825-0612"}
    item4 = {"Email"}
    item5 = {"arthur.p.ferreira07@gmail.com"}
    />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
