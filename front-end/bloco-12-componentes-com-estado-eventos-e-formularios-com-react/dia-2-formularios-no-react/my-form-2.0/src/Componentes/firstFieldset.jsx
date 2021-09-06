import React from 'react';
import datas from '../Datas/datas'

class Fielder extends React.Component {

  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
    }
  }
  handleChange = (event) =>{
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return <form>
      <fieldset>
        <legend>Formulário Simples</legend>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id='nome' maxLength='40' value={this.state.nome} onChange={this.handleChange} required/> {/* transformar em uppercase */}
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' maxLength='11' required />
        <label htmlFor="cpf">CPF:</label>
        <input type="cpf" id='cpf' maxLength='11' required />
        <label htmlFor="endereco">Endereço:</label>
        <input type="endereco" id='endereco' maxLength='11' required />
        <label htmlFor="cidade">Cidade:</label>
        <input type="cidade" id='cidade' maxLength='11' required />
        <label htmlFor='estados'>Estados:</label>
        <select name='estados' id='estados'>
          {datas.map((estado) => <option value={estado}>{estado}</option>)}
        </select>
        <label htmlFor='tipo'>Tipo:</label>
        <input type='radio' id='casa' name='tipo' value='casa'>
        </input>
        <label htmlFor="casa">Casa</label>
        <input type='radio' id='apartamento' name='tipo' value='apartamento'>
        </input>
        <label htmlFor="apartamento">Apartamento</label>
      </fieldset>
      <button>CheckStates</button>

    </form>;
  }
}

export default Fielder;