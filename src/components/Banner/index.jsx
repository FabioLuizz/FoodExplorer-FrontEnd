import { Container } from './styles'

export function Banner() {
  return (
    <Container>
      <main>
        <div className="general">
            <img src="./src/assets/images/banner.png"/>
          <section>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </section>
        </div>
      </main>
    </Container>
  )
}
