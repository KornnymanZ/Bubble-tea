import axios from 'axios';
import { useEffect ,useState } from 'react'
import './Editpage.css'

export default function Editpage() {

    const [Newname, setName] = useState('');
    const [Newdescription, setDescription] = useState('');
    const [Newprice, setPrice] = useState('');
    const [Newcategory, setCategory] = useState('');
    const [Newimage, setImage] = useState('');

const getToken = () => {
    return window.localStorage.getItem('token');
  };

const createMenu = async () => {
    e.preventDefault();
    const token = getToken();

    if (!token) {
        console.error('No token found in local storage.');
        return;
      }
  
    try {
    const response = await axios.post(
        'https://bubble-tea-cafe-api-production.up.railway.app/api/menu',
    {
        name: Newname,
        description: Newdescription,
        price: parseFloat(Newprice),
        category: Newcategory,
        image: Newimage,
    },
    {
        headers: {
            Authorization: '${token}',

        },
    }
    );
    console.log('New Menu Created:', response.data.data);
    
} catch (error) {
    console.log(e);
    console.error('Error occurred',error.response.data.message);
    }
};

// axios.post('https://bubble-tea-cafe-api-production.up.railway.app/api/menu',
// {   
//     name: name,
//     description: description,
//     price: parseFloat(price),
//     category: category,
//     image: image,
// },
// {
//     headers: {
//         Authorization: '${token}',
//     },
// }

// );

// console.log('New Menu Created', response.data.data);

// }

return (

<div className='editform'>
    
    <article>
        Create New Menu
        <form onSubmit={createMenu}>
        <input
        type='text'
        placeholder='Enter product name'
        value = {Newname}
        onChange={(e) => setName(e.target.value)}
        
        /> <br></br>

        <input
        type='text'
        placeholder='Enter Description'
        value = {Newdescription}
        onChange={(e) => setDescription(e.target.value)}
        
        /> <br></br>

        <input
        type='number'
        placeholder='Enter Price'
        step="0.01"
        min="0"
        value = {Newprice}
        onChange={(e) => setPrice(e.target.value)}
        /> <br></br>

        <input
        type='text'
        placeholder='Enter Category'
        value = {Newcategory}
        onChange={(e) => setCategory(e.target.value)}
        /> <br></br>
    

        <input
        type='url'
        placeholder='Enter image URL'
        value = {Newimage}
        onChange={(e) => setImage(e.target.value)}
        />

        <br></br>
    
        <button> Create </button>
    </form>
   </article>

</div>

)
}
