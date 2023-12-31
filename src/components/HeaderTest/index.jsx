import { Container } from './styles'

import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { RxExit } from 'react-icons/rx'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { useEffect } from 'react'

import polygono from '../../assets/images/Polygon.png'
import icon from '../../assets/images/icon.svg'

export function Header({ className, onClick, onChange, value }) {
  const { logout, isAdmin } = useAuth()
  const [ requests, setRequests ] = useState()

  const { signIn } = useAuth()

  useEffect(() => {
    const handleRequest = () => {
      const data = JSON.parse(localStorage.getItem("@foodexplorer:produtos"))

      if(data) {
        setRequests(data.length)
      } else {
        setRequests(0)
      }
    } 

    handleRequest()
  }, [])

  return (
    <Container className={className}>
      <main>
        <Link to='/menu' className="menu hide">
          <AiOutlineMenu size={24} />
        </Link>

        <div className="logo">
          <img src={polygono} alt="Logo" />
          <div className="text">
            <Link to='/' className='logo-name'>food explorer</Link>
            <p className={ isAdmin ? "" : "hide" }>admin</p>
          </div>
        </div>

        <div className="entrys">
          <label htmlFor="search">
            <AiOutlineSearch size={28} />
          </label>
          <input
            id="search"
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            value={value}
            onChange={onChange}
          />
        </div>

        <div className="buttons">
          <Link to='/new' className={ isAdmin ? "button" : "hide" }>Novo prato</Link>
          <Link to='' className={ isAdmin ? "hide" : "button" }>
            Pedidos (<span>{requests}</span>)
          </Link>
          <a href="/"  onClick={logout}><RxExit size={28}/></a>
        </div>

        <div id='icons' className={isAdmin ? 'hide' : 'icon'}>
          <img className={isAdmin ? 'hide' : ''} src={icon} alt="Icone de nota" />
          <div className="ballon">
            <p>{requests}</p>
          </div>
        </div>
      </main>
    </Container>
  )
}
