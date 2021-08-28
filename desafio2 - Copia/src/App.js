import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

// Desafio Blog
function App() {

  const [autor, setAutor] = useState('')
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [listaNoticias, setListaNoticias] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get").then((response) =>{
      setListaNoticias(response.data);
    });
  }, []);

  const enviarNoticia = () => {

    Axios.post("http://localhost:3002/api/insert", {
      Autor: autor, 
      Titulo: titulo,
      Descricao: descricao
    });
      
      
    setListaNoticias([...listaNoticias, {
      Autor: autor, 
      Titulo: titulo, 
      Descricao: descricao
    }]);
    
  };
  
  const deleteNoticia = (id) => {
    Axios.delete(`http://localhost:3002/api/delete/${id}`);
  };

  return (
    <div className="App">
      <header>
        <h1>Notícias.blog</h1>
      </header>

      <section>

        <div className="form">

          <fieldset className='pesquisa'>
            <h2>Pesquisar em Notícias</h2>
            <input type="text" placeholder="Faça a sua busca..." 
            
            />
            <button >Buscar</button>
            <input  type="text" id="atualizarNoticia" placeholder="Atualizar Notícia"/>
            <button>Atualizar</button>
            

          </fieldset>

          <div>
            <h2>Cadastrar Notícias</h2>
            <label>Titulo:</label>
            <input type="text" name="Titulo" placeholder="Titulo" onChange={(e) => {setTitulo(e.target.value)}} />
            <label>Autor:</label>
            <input type="text" name="Autor" placeholder="Autor" onChange={(e) => {setAutor(e.target.value) }} />
            <label>Descrição Notícia:</label>
            <textarea type="text" name="Descricao" placeholder="Descrição..." onChange={(e) => {setDescricao(e.target.value)}} />
            <button onClick={enviarNoticia}>Enviar</button>
          </div>

        </div>
        

        <div className='conteudo'>
          {listaNoticias.map((val)=> {
            return (
              <>
                <fieldset className='noticias'>

                  <span className="id">{val.id}</span>
                  <h3>{val.titulo}</h3>
                  <div className='autor'>Autor: {val.autor}</div>
                  <p>{val.descricao}</p>

                  {/* Botão deletar */}
                  <button onClick={()=> {deleteNoticia(val.id)}}>Deletar</button>
                </fieldset>
              </>
            );
          })}
        </div>
        
      </section>
    </div>

  );
}

export default App;

