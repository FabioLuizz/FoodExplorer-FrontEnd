import { Container } from '../Footer/styles'

import { Logo } from '../../components/Logo'

export function Footer({ title }) {
  return (
    <Container>
      <div className='logo'>
        <img src="./src/assets/images/Polygon.svg" alt="Logo" />
        <p>foode explorer</p>
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
