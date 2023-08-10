import { Container } from './styles'

import banner from '../../assets/images/banner.png'

export function Banner() {
  return (
    <Container>
      <main>
        <div className="general">
            <img src={banner}/>
          <section>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </section>
        </div>
      </main>
    </Container>
  )
}
