import { Container, Path } from './styles'

import { Footer } from '../../components/Footer'

import { AiOutlineClose } from 'react-icons/ai'
import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom'

export function Menu() {
  const { logout, isAdmin } = useAuth()

  return (
    <Container>
      <header>
        <Path to={-1}>
          <AiOutlineClose size={28} />
          <p>Voltar</p>
        </Path>
      </header>

      <main>
        {isAdmin ? (
          <React.Fragment>
            <Link to="/new" className="navigation">
              <button>Novo prato</button>
            </Link>
            <Link to="/" className="navigation">
              <button onClick={logout}>Sair</button>
            </Link>
          </React.Fragment>
        ) : (
          <Link to="/" className="navigation">
            <button onClick={logout}>Sair</button>
          </Link>
        )}
      </main>

      <Footer />
    </Container>
  )
}
