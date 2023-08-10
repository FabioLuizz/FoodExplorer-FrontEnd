import { Container, Path } from './styles'

import { ProductDetails } from '../../components/ProductDetails'
import { Header } from '../../components/HeaderTest'
import { Footer } from '../../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Product() {
  const [data, setData] = useState(null)
  const [ingredient, setIngredients] = useState(null)

  const navigate = useNavigate()
  const params = useParams()

  function handleDetails() {
    navigate(`/update/${data.id}`)
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/product/${params.id}`)

      setData(response.data[0])
      setIngredients(response.data.ingredients)
      console.log(ingredient.data.ingredients)
    }

    fetchProduct()
  }, [])

  return (
    <Container>
      <Path to="/new">
        <Header />
      </Path>

      {data && (
        <main>
          <ProductDetails
            title={data.title}
            value={data.price}
            description={data.description}
            ingredients={ingredient}
            src={`${api.defaults.baseURL}/files/${data.photo}`}
            handleNavigation={() => handleDetails(data.id)}
          />
        </main>
      )}

      <Footer />
    </Container>
  )
}
