import { Container, Path, Ingredients } from './styles'

import { AiOutlineArrowLeft, AiOutlineMenu } from 'react-icons/ai'
import { Increment } from '../Increment'
import { Ingredient } from '../Ingredient'
import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom'

export function ProductDetails(props) {
  const { isAdmin } = useAuth()

  return (
    <Container>
      <Path to={-1}>
        <header>
          <AiOutlineArrowLeft size={20} />
          <h3> Voltar</h3>
        </header>
      </Path>

      <main>
        <div className="image">
          <img src={props.src} alt="Imagem da comida" width={300} />
        </div>

        <div className="details">
          <h1>{props.title}</h1>

          <p>{props.description}</p>

          {props.ingredients && (
            <Ingredients className='ingredients'>
              {props.ingredients.map(ingredient => (
                <Ingredient key={ingredient.id} title={ingredient.name} />
              ))}
            </Ingredients>
          )}

          <footer>
            <Increment />
            {isAdmin ? (
              <button onClick={props.handleNavigation}>
                <p>Editar prato</p>
              </button>
            ) : (
              <button>
                <img src="/src/assets/images/icon.svg" />
                {'incluir - R$ ' + props.value}
              </button>
            )}
          </footer>
        </div>
      </main>
    </Container>
  )
}
