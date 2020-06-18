import React from 'react';

export default props => {

  function action() {
     props.onClicar(Math.random(), 'Gerado')
  }

  return (
    <div>
      <button 
        onClick={action} >
          Alterar
      </button>
    </div>
  )
}