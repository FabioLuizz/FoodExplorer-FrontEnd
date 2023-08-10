import { Container } from './styles'

import { ProductCard } from '../../components/ProductCard'
import { Header } from '../../components/HeaderTest'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { api } from '../../services/api'

export function Home() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const firstCards = useRef(null)
  const secondCards = useRef(null)
  const thirdCards = useRef(null)

  const navigate = useNavigate()

  const handleFirstCarouselLeft = (e) => {
    e.preventDefault()

    firstCards.current.scrollLeft -= firstCards.current.offsetWidth
  }

  const handleFirstCarouselRight = (e) => {
    e.preventDefault()

    firstCards.current.scrollLeft += firstCards.current.offsetWidth
  }

  const handleSecondCarouselLeft = (e) => {
    e.preventDefault()

    secondCards.current.scrollLeft -= secondCards.current.offsetWidth
  }

  const handleSecondCarouselRight = (e) => {
    e.preventDefault()

    secondCards.current.scrollLeft += secondCards.current.offsetWidth

  }

  const handleThirdCarouselLeft = (e) => {
    e.preventDefault()

    thirdCards.current.scrollLeft -= thirdCards.current.offsetWidth
  }

  const handleThirdCarouselRight = (e) => {
    e.preventDefault()

    thirdCards.current.scrollLeft += thirdCards.current.offsetWidth
  }

  function handleDetails(id) {
    navigate(`/product/${id}`)
  }

  function handleUpdateNavigation(id) {
    navigate(`/update/${id}`)
  }

  async function handleInclude(title) {
    const response = await api.get(`/product?title=${title}`)
    const newProductData = response.data[0]

    const existingData =
      JSON.parse(localStorage.getItem('@foodexplorer:produtos')) || []

    const updatedData = [...existingData, newProductData]

    localStorage.setItem('@foodexplorer:produtos', JSON.stringify(updatedData))

    location.reload()
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/product?title=${search}`)

      setProducts(response.data)
    }

    fetchProducts()
  }, [search])

  const meals = products.filter(product => product.group === 'Refeições')
  const beverages = products.filter(product => product.group === 'Bebidas')
  const desserts = products.filter(product => product.group === 'Sobremesas')

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)} />

      <main>
        <Banner />

        {meals.length > 0 ? (
          <section className="catalog">
            <h2>Refeições</h2>

            <div className="firstCards" ref={firstCards}>
              <button className='ButtonLeft' onClick={handleFirstCarouselLeft}><IoIosArrowBack size={40}/></button>
                {meals.map(product => {
                  return (
                    <ProductCard
                      key={String(product.id)}
                      src={`${api.defaults.baseURL}/files/${product.photo}`}
                      title={product.title}
                      description={product.description}
                      value={product.price}
                      onClick={() => handleInclude(product.title)}
                      handleNavigation={() => handleDetails(product.id)}
                      handleCardEdit={() => handleUpdateNavigation(product.id)}
                    />
                  )
                })}
              <button className='ButtonRight' onClick={handleFirstCarouselRight}><IoIosArrowForward size={40}/></button>
            </div>
          </section>
        ) : null}

        {desserts.length > 0 ? (
          <section className="catalog">
            <h2>Sobremesas</h2>

            <div className="secondCards" ref={secondCards}>
              <button className='ButtonLeft' onClick={handleSecondCarouselLeft}><IoIosArrowBack size={40}/></button>
                {desserts.map(product => {
                  return (
                    <ProductCard
                      key={String(product.id)}
                      src={`${api.defaults.baseURL}/files/${product.photo}`}
                      title={product.title}
                      description={product.description}
                      value={product.price}
                      onClick={() => handleInclude(product.title)}
                      handleNavigation={() => handleDetails(product.id)}
                      handleCardEdit={() => handleUpdateNavigation(product.id)}
                    />
                  )
                })}
              <button className='ButtonRight' onClick={handleSecondCarouselRight}><IoIosArrowForward size={40}/></button>
            </div>
          </section>
        ) : null}

        {beverages.length > 0 ? (
          <section className="catalog">
            <h2>Bebidas</h2>

            <div className="thirdCards" ref={thirdCards}>
              <button className='ButtonLeft' onClick={handleThirdCarouselLeft}><IoIosArrowBack size={40}/></button>
                {beverages.map(product => {
                  return (
                    <ProductCard
                      key={String(product.id)}
                      src={`${api.defaults.baseURL}/files/${product.photo}`}
                      title={product.title}
                      description={product.description}
                      value={product.price}
                      onClick={() => handleInclude(product.title)}
                      handleNavigation={() => handleDetails(product.id)}
                      handleCardEdit={() => handleUpdateNavigation(product.id)}
                    />
                  )
                })}
              <button className='ButtonRight' onClick={handleThirdCarouselRight}><IoIosArrowForward size={40}/></button>
            </div>
          </section>
        ) : null}

        <Footer />
      </main>
    </Container>
  )
}
