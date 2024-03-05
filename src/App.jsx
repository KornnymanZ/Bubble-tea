import { BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css"
import { Layout } from './components/layouts/Layout'
import Homepage from './components/Pages/Homepage'
import Aboutpage from './components/Pages/Aboutpage'
import Newspage from "./components/Pages/Newspage"
import Contactpage from "./components/Pages/Contactpage"
import LoginPage from "./components/Pages/Loginpage"
import ProfilePage from "./components/Pages/Profilepage"
import RoleBasedComponent from "./RoleBasedComponent"



export default function App() {
  return (
    <RoleBasedComponent role={"staff"}
    supportedRoles={["staff", "support_staff", "customer"]}>
      
    <BrowserRouter>
      <Routes>
        
        
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<Newspage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        
      </Routes>
    
  </BrowserRouter>
  </RoleBasedComponent>
  )
}