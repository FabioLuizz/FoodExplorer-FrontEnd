import { Container, Increment } from './styles'

import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'

import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function ProductCard(props, quantity) {
  const { isAdmin } = useAuth()
  const [icon, setIcon] = useState('hide')

  const [number, setNumber] = useState(1)

  async function handleIconClick() {
    setIcon(icon === 'hide' ? 'show' : 'hide')
  }

  const changeNumber = () => {
    setNumber(prevNumber => prevNumber + 1)
  }

  const decreaseNumber = () => {
    if (number > 0) {
      setNumber(prevNumber => prevNumber - 1)
    }
  }

  return (
    <Container>
      <div className="icon">
        <div className={isAdmin ? 'hide' : ''}>
          {icon === 'hide' ? (
            <AiOutlineHeart size={28} onClick={handleIconClick} />
          ) : (
            <AiTwotoneHeart size={28} onClick={handleIconClick} />
          )}
        </div>
        <div onClick={props.handleCardEdit} className={isAdmin ? '' : 'hide'}>
          <BsPencil size={25} />
        </div>
      </div>

      <img src={props.src} alt="Imagem da comida" />

      <div
        className="title"
        onClick={props.handleNavigation} /* onClick={onClick} */
      >
        {props.title + ' >'}
      </div>

      <div className="description">{props.description}</div>

      <div className="value">{'R$' + ' ' + props.value}</div>

      <Increment className={isAdmin ? 'hide' : ''}>
        <button
          type="button"
          onClick={decreaseNumber}
          disabled={quantity === 1}
        >
          <FiMinus weight="bold" size={25} />
        </button>

        <span>{number}</span>

        <button type="button" onClick={changeNumber}>
          <FiPlus weight="bold" size={25} />
        </button>
      </Increment>

      <button className={isAdmin ? 'hide' : 'mainButton'} onClick={props.onClick}>
        Incluir
      </button>
    </Container>
  )
}
