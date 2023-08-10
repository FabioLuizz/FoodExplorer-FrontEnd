import { Container } from '../Footer/styles'

import { Logo } from '../../components/Logo'

import polygono from '../../assets/images/Polygon.png'

export function Footer({ title }) {
  return (
    <Container>
      <div className='logo'>
        <img src={polygono} alt="Logo" />
        <p>foode explorer</p>
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
