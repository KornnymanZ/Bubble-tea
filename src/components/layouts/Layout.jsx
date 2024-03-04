import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export const UserContext = createContext()

const Layout = () => {
    const [user, setUser] = useState("Me Mee") 
    return (
        <UserContext.Provider value={user}>
            <Navbar />
            <Outlet />
            <Footer />
        </UserContext.Provider>
    )
}

export default Layout;