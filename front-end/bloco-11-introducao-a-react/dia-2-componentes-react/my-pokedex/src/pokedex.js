import React, { Component } from 'react';

class Pokedex extends Component {
  render() { 
    const { proper } = this.props;

    return ( 
      
      <section className='pokebox'>
        <article>
      <p>{proper.name}</p>
      <p>{proper.type}</p>
      <p>Average Weight: {proper.averageWeight.value} {proper.averageWeight.measurementUnit}</p>
        </article>
        <article className='pokeimg'>
      <img src={proper.image} alt={proper.name}/>
        </article>
      </section>

      
     );
  }
}
 
export default Pokedex;