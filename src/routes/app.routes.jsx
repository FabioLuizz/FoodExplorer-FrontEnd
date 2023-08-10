import { Routes, Route } from 'react-router-dom'

import { Product } from '../pages/Product'
import { Menu } from '../pages/Menu'
import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { Updated } from '../pages/Update'

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/update/:id' element={<Updated/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}