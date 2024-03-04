import '/Users/apple/Desktop/vite-project/src/App.css'
import { useState } from 'react'
import HomeBackground from '../BGHomepage/BGHomepage'
import BannerHome from '../BannerHome/BannerHome'
import Productcard from '../ProductCard/ProductCard'

function Homepage() {
    const [count, setCount] = useState(0)
const banner_name = 'egg'
return (
    <div className ="bgimg">
        
        <BannerHome />
        <Productcard />


    </div>
        )
}
export default Homepage