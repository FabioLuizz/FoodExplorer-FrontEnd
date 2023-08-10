import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { InputText } from '../../components/InputText'
import { Logo } from '../../components/Logo'

import { Container } from './styles'

import { api } from '../../services/api'

export function SignUp() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post('/users', {name, email, password})
    .then(() => {
      alert('Usuário cadastrado com sucesso!')
      navigate('/')
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      }
    })
  }

  return (
    <Container>
      <header>
        <Logo />
      </header>

      <main>
        <h1 className='subTitle'>Crie sua conta</h1>

        <InputText
          className="name"
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          onChange={e => setName(e.target.value)}
        />

        <InputText
          className="email"
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
        />

        <InputText
          className="password"
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleSignUp}>Criar Conta</button>

        <Link to="/">Já tenho uma conta</Link>
      </main>
    </Container>
  )
}
