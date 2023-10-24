import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/Index'
import Cart from './pages/cart'
import Orders from './pages/Orders'
import Favorities from './pages/Favorities'
import Layout from './layout/Layout'

function App() {


  return (
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Layout/>}>
          <Route path='home' element={<Index/>} />
          <Route path='cart' element={<Cart/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='favorities' element={<Favorities/>}/>
      </Route>

    </Routes>
        
    </BrowserRouter>
  )
}

export default App
