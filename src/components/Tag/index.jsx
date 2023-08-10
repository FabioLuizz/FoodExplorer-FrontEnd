import { Container } from './styles'
import { FiPlus, FiX } from 'react-icons/fi'

export function Tag({isNew = false, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input type='text' maxLength={19} value={value} readOnly={!isNew} {...rest}/>

      <button type='button' onClick={onClick}>
        { isNew ? <FiPlus/> : <FiX/> }
      </button>
    </Container>
  )
}