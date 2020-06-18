import React from 'react';

export default props => {
  return (
    <div>
      <p> <strong>{props.children}</strong>  {props.sobrenome}</p>
    </div>
  )
}