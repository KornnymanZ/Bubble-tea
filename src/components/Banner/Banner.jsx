import PropTypes from "prop-types"
import './Banner.css'
import { useContext } from 'react'
import { UserContext } from '../layouts/Layout'


// export default function Banner(){
//     return(
//         <div class="hero-image">
//             <div class="hero-text">
//                 <h2>Visit Us</h2>
//                 <p>{description}</p>
                
//             </div>
//         </div> 
//     )
// }    

// Banner.propTypes = {
//     name: Proptypes.string.name,
//     description: Proptypes.string.description
// }

// {name, description}

// export default function Banner() {
//     return (
//         <div>
//             <a href='https://maps.app.goo.gl/F2tHTbYb9MT4pX4XA'>
//            <img className="logo" src="https://cdn.vox-cdn.com/thumbor/KqYnd6YgxZ6yJvyBCk-heGXYEMM=/0x0:1280x800/1400x1400/filters:focal(640x400:641x401)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png"></img>
//            </a>
//            <a href='https://www.instagram.com/'>
//             <img className="logo2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"></img>
//            </a>
//             <div className="coffeeshop">
//                 <h1><br></br>Location</h1>
//             </div>
//             <div className="igtext">
//                 <h1><br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 Instagram</h1>
//             </div>
           
//         </div>
//     )
// }

function Banner({ name }) {
    const user = useContext(UserContext)
    return (
        <aside className="responsive-banner third">
            <div className="containter-envelope">
                <svg className="circle-a" height="160" width="160">
                    <circle cx="80" cy="80" r="80 />" />
                </svg>
                <svg className="circle-b" height="160" width="160">
                    <circle cx="30" cy="30" r="30 />" />
                </svg>
                <svg className="circle-a" height="160" width="160">
                    <circle cx="80" cy="80" r="80 />" />
                </svg>
                <svg className="circle-a" height="160" width="160">
                    <circle cx="80" cy="80" r="80 />" />
                </svg>
                <div className="col-xs-12">
                    <p>{name}</p>
                </div>
            </div>
        </aside>
    )
}

Banner.propTypes = {
    name: PropTypes.string.name
};

export default Banner