import { Container } from './styles'

import { Footer } from '../../components/Footer'

import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'

export function Menu() {
  return (
    <Container>
      <header>
        <AiOutlineClose size={28} />
        <p>Voltar</p>
      </header>

      <main>
        <div className="entrys">
          <label htmlFor="search">
            <AiOutlineSearch size={28} />
          </label>
          <input
            id="search"
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>

        <div className="navigation">
          <button>Sair</button>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
