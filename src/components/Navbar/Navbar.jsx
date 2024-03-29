// import './Navbar.css'
// import { useContext } from 'react'
// import { UserContext } from '../layouts/Layout'

// export default function Navbar() {
//     const user = useContext(UserContext)
//     return (
//         <div className="topnav">
//            <a className="active" href="/">Home</a>
//             <a href="/news">News</a>
//             <a href="/contact">Contacts</a>
//             <a href="/about">About</a>
//             <a href="/Todo">ToDos</a>
//             <div className='topnav-right'>
//                 {user !== '' ? (
//                     <div>
//                         <a href="/profile">{user}</a>
//                         <a href="/logout">Logout</a>
//                         </div>
//                 ) : (
//                     <div>
//                         <a href="/login">Login</a>
//                         <a href="/register">Register</a>
//                         </div>
//                 )}
//             </div>
        
            
//         </div>
//     )
// }

import { useUserProfile } from '../layouts/Layout';
import './Navbar.css';

export default function Navbar() {
  const userProfile = useUserProfile();
  console.log('userProfile', userProfile);
  return (
    <>
      <div className='navbar'>
        <ul>
          <li>
            <a href='/'>Bubble Tea Cafe</a>
          </li>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/product'>Products</a>
          </li>
          <li>
            <a href='/cart'>Cart</a>
          </li>
          <li>
            <a href='/edit'>Edit Menu</a>
          </li>
          <div className='login'>
    
            {userProfile ? (
              <a onClick={() => localStorage.clear()}href = "/">Logout</a>
            ) : (
              <p></p>
 
            )}
            </div>
         
          <div className='login'>
    
            {userProfile ? (
              <a href='/profile'>{userProfile.username}</a>
              
            ) : (
              <a href='/login'>Login</a>
              
            )}
            
          </div>
        </ul>
      </div>
    </>
  );
}