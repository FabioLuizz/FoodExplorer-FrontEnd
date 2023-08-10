import { Container } from "./styles";

import polygono from '../../assets/images/Polygon.png'

export function Logo() {
  return (
    <Container>
      <img src={polygono} alt="Imagem da logo" />
      <h1>food explorer</h1>
    </Container>
  )
}