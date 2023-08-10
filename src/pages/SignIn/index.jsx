import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { InputText } from '../../components/InputText'
import { Logo } from '../../components/Logo'

import { Container } from './styles'

export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <header>
        <Logo />
      </header>

      <main>
        <h1 className='hide'>Faça login</h1>

        <InputText
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com"
          onChange={e => setEmail(e.target.value)}
        />

        <InputText
          label="Senha"
          type="password"
          placeholder="Exemplo: No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleSignIn}>Entrar</button>

        <Link to="/register">Criar uma conta</Link>
      </main>
    </Container>
  )
}
