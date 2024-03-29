import React from 'react';
import './App.css';


// Desafio ordenar lista.


function App() {

  const ordenarPorSelecao = (listaOriginal) => {

    
    const lista = [...listaOriginal]
    const len = lista.length
    for (let i = 0; i < len; i++) {
      let min = i
      for (let j = i + 1; j < len; j++) {
        if (lista[min] > lista[j]) {
          min = j
        }
      }
      if (min !== i) {
        
        [lista[i], lista[min]] = [lista[min], lista[i]]
      }
    }
    
    return lista;

  }

  const listaVetores = [5,3,2,4,12,25,7,1,0,6];// add 12,25.
  console.log(ordenarPorSelecao(listaVetores));

  return (
      <>
        <h2>Escrever um código utilizando português estruturado ou Pseudocódigo, no qual o resultado final do Vetor deve conter os mesmos números ordenados crescentemente.
  
        Considerando o seguinte vetor = (5,3,2,4,7,1,0,6).
        </h2>
  
        <p>Lista Ordenada: {ordenarPorSelecao(listaVetores).join(', ')}.</p>
      </>
    );
  
  
}

export default App;



