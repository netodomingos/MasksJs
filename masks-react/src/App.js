import React, { useState } from 'react';

import { cpfMask } from './Components/cpfMask'
import { phoneMask } from './Components/phoneMask'

import './App.css';

export default function App(){

  const [ cpf, setCpf ] = useState('')
  const [ phoneNumber, setPhoneNumer ] = useState('')

  const setCpfValue = event =>{ 
    setCpf(cpfMask(event))
  }

  const setPhoneValue = event => {
   setPhoneNumer(phoneMask(event))
  }

    return (
      <div className='input-div'>
        <div className='intern-div'>
          <h1>CPF & Phone Masks</h1>
          <h3>CPF:</h3>
          <input type='text' maxLength='14' name='cpf' value={cpf} onChange={e => setCpfValue(e.target.value)}/>
          <h3>Telefone:</h3>
          <input type='text' maxLength='15' name='telefone' value={phoneNumber} onChange={e => setPhoneValue(e.target.value)}/>
        </div>
      </div>
    );
  }
