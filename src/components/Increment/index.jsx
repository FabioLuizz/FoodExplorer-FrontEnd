import { Container } from "./styles"

import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

export function Increment({ quantity, handleQuantity }) {
  const [number, setNumber] = useState(1)

  const changeNumber = () => {
    setNumber((prevNumber) => prevNumber + 1)
    handleQuantity(number + 1)
  }

  const decreaseNumber = () => {
    if(number > 0 ) {
      setNumber((prevNumber) => prevNumber - 1)
      handleQuantity(number - 1)

    }
  }

  return(
    <Container>
      <button type="button" onClick={decreaseNumber} disabled={quantity === 1}>
        <FiMinus weight="bold" size={25}/>
      </button>

      <span>{number}</span>

      <button type="button" onClick={changeNumber}>
        <FiPlus weight="bold" size={25}/>
      </button>
    </Container>
  )
}