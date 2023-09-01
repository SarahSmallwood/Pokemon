import React from 'react'

function Show(props) {
    const pokemon = props.pokemon;
    return (
      <div>
          <h1>Gotta Catch Em' All!</h1>
                <h2>{pokemon.name}</h2>
                <div><img src={pokemon.image} alt=''/></div>
  
      </div>
    )
  }
  
  export default Show;