import './Navbar.css'
import { useContext } from 'react'
import { UserContext } from '../layouts/Layout'

export default function Navbar() {
    const user = useContext(UserContext)
    return (
        <div className="topnav">
           <a className="active" href="/">Home</a>
            <a href="/news">News</a>
            <a href="/contact">Contacts</a>
            <a href="/about">About</a>
            <a href="/Todo">ToDos</a>
            <div className='topnav-right'>
                {user !== '' ? (
                    <div>
                        <a href="/profile">{user}</a>
                        <a href="/logout">Logout</a>
                        </div>
                ) : (
                    <div>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                        </div>
                )}
            </div>
        
            
        </div>
    )
}