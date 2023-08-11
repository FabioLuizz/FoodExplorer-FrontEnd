import { Container, Form, Path } from './styles'

import { IoIosArrowBack } from 'react-icons/io'
import { MdFileUpload } from 'react-icons/md'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { useState } from 'react'

import { api } from '../../services/api'

import { TextArea } from '../../components/TextArea'
import { Header } from '../../components/HeaderTest'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { useEffect } from 'react'

export function Updated() {
  const [title, setTitle] = useState('')
  const [group, setGroup] = useState('Refeições')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [photo, setPhoto] = useState(null)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/product/${params.id}`)

      const { title, group, price, description, photo } = response.data[0]
      setTitle(title)
      setGroup(group)
      setPrice(price)
      setDescription(description)
      setPhoto(photo)

      const { ingredients } = response.data
      setIngredients(ingredients.map(ingredient => ingredient.name))
    }

    fetchProduct()
  }, [])

  async function handleNewProduct() {
    if (!photo) {
      return alert('Seu prato precisa de uma imagem!')
    }

    if (!title) {
      return alert('Atribua um nome ao seu patro')
    }

    if (ingredients.length <= 1) {
      return alert('Adicione no mínimo, dois ingredients')
    }

    if (!price) {
      return alert('Atribua um valor ao seu patro')
    }

    if (!description) {
      return alert('Atribua uma descrição ao seu patro')
    }

    const formData = new FormData()
    formData.append('title', title)
    formData.append('group', group)
    formData.append('price', price)
    formData.append('description', description)
    ingredients.filter(ingredient =>
      formData.append('ingredients', JSON.stringify(ingredient))
    )

    await api.put(`/product/${params.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    alert('Produto atualizado com sucesso!')
    navigate('/')
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }

  async function handleDelete(id) {
    const confirm = window.confirm('Deseje realmente remover este prato ?')

    if(confirm) {
      await api.delete(`/product/${params.id}`)
      navigate('/')
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <Path to={-1}>
            <header>
              <IoIosArrowBack size={28} />
              <p>Voltar</p>
            </header>
          </Path>

          <h1>Editar prato</h1>

          <div className="first-column">
            <div className="upload">
              <label>Imagem do prato</label>
              <label htmlFor="file" className="icon">
                <MdFileUpload size={30} />
                <>Selecione um arquivo</>
              </label>
              <input
                id="file"
                type="file"
                onChange={e => setPhoto(e.target.files[0])}
              />
            </div>

            <div className="name">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Salada Ceasar"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="category">
              <label htmlFor="category">Categoria</label>
              <div>
                <select
                  id="category"
                  value={group}
                  onChange={e => setGroup(e.target.value)}
                >
                  <option>Refeições</option>
                  <option>Sobremesas</option>
                  <option>Bebidas</option>
                </select>
              </div>
            </div>
          </div>

          <div className="second-column">
            <div className="ingredients">
              <label>Ingredientes (mínimo dois)</label>
              <div className="tags">
                {ingredients.map((ingredient, index) => (
                  <Tag
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <Tag
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </div>
            </div>

            <div className="price">
              <label htmlFor="price">Preço</label>
              <input
                id="price"
                value={price}
                type="text"
                placeholder="R$ 00,00"
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="third-column">
            <div className="description">
              <label htmlFor="description">Descrição</label>
              <TextArea
                value={description}
                id="description"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <Link className="details">
              <button onClick={handleDelete} className="hide">Excluir</button>
              <button onClick={handleNewProduct}>Salvar Alterações</button>
            </Link>
          </div>
        </Form>

        <Footer />
      </main>
    </Container>
  )
}
