import React from 'react'

function Index(props) {
    const pokemon = props.pokemon;
  return (
    <div>
        <h1>See All of the Pokemon!</h1>
        {pokemon.map((pokemon, i ) => {
            return (
                <div key={i}>
                    <a href={`/pokemon/${i}`}>
                    <li>{pokemon.name}</li>
                    </a>
                    </div>
            );
        })}

    </div>
  )
}

export default Index;