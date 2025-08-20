import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShopPage from './components/ShopPage/ShopPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopPage />} />
      </Routes>
    </Router>
  )
}

export default App