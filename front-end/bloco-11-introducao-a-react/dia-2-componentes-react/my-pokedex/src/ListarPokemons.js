import React, { Component } from 'react';
import Pokedex from './pokedex';

class ListPokemon extends Component {
  render() { 
    const { data }=this.props;
    return (
      <section className='pokecontainer'>
      {data.map((cur)=> <Pokedex key={cur.id} proper={cur}/>)}
      </section>
     );
  }
}
 
export default ListPokemon;