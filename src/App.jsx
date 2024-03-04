import { BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './components/layouts/Layout'
import Homepage from './components/Pages/Homepage'
import Aboutpage from './components/Pages/Aboutpage'
import Newspage from "./components/Pages/Newspage"
import Contactpage from "./components/Pages/Contactpage"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<Newspage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<Aboutpage />} />
        
        </Route>
        
      </Routes>
    
  </BrowserRouter>
  )
}