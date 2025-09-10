import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShopPage from '../pages/ShopPage/ui/Shop/ShopPage'
import ProductDetails from '../pages/ProductDetails/ProductDetail'
import Catalog from '../pages/catalog/Catalog'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  )
}

export default App