import React, { useState } from 'react';

function Button() {
  const [testes, setTestes] = useState([]);

  const addButton = (e) =>{
    e.preventDefault();
    setTestes([... testes, ""]);      
  }

  return (
    <div>
    <button onClick={addButton}>Mais um nome</button>
    <br/>
    
    {
        testes.map(teste =>(
            <><label>
            Nome:
            <input type="text" name="name" placeholder="Informe o nome 1" />
            <br/>
        </label></>          

        ))
    }
    </div>
    
)}

export default Button;