import React, { Component } from 'react';

import { cpfMask } from './Components/cpfMask'
import { phoneMask } from './Components/phoneMask'

import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      cpfValue: '', // Iniciando valor do estado do CPF.
      phoneValue: '', // Iniciando valor do estado do Telefone.
    }

    this.setCpfValue = this.setCpfValue.bind(this) // Dando bind no this para valor não variar.
    this.setPhoneValue = this.setPhoneValue.bind(this) // Dando bind no this para valor não variar.
  }

  setCpfValue(event){ 
    this.setState({
      cpfValue: cpfMask(event.target.value) // Estado do CPF recebe o valor modificado do CPF Mask.
    })
  }

  setPhoneValue(event){
    this.setState({
      phoneValue: phoneMask(event.target.value) //Estado do TELEFONE recebe o valor modificado do Phone Mask.
    })
  }


  render(){

    const { cpfValue, phoneValue } = this.state // Desestruturando os estados

    return (
      <div className='input-div'>
        <div className='intern-div'>
          <h1>CPF & Phone Masks</h1>
          <h3>CPF:</h3>
          <input type='text' maxLength='14' name='cpf' value={cpfValue} onChange={this.setCpfValue}/>
          <h3>Telefone:</h3>
          <input type='text' maxLength='15' name='telefone' value={phoneValue} onChange={this.setPhoneValue}/>
        </div>
      </div>
    );
  }
}

export default App;
