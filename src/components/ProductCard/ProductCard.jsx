import './ProductCard.css'

export default function Productcard() {
    return (
        <div className="productcard">
            <article>
                <h2>Sip and Choke</h2>
                <img className='joe' src="https://img.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_1284-66002.jpg?w=740&t=st=1705943994~exp=1705944594~hmac=45459c77d7eb3e3db58fe2cf40761a07394ef32dc68b305b569ea898c10a7671" />
                <p className='joe'>A Cup of Joe with a side of whoop.</p>
                <b>Best seller!</b>   
            </article>

            <article>
                <h2>Sneeze and Wheeze</h2>
                <img src="https://www.tastingtable.com/img/gallery/the-ratio-to-follow-when-adding-spices-to-your-coffee/intro-1688157536.jpg"/>
                <p className='sw'>Coffee laced with all kind of spices</p>
            </article>

            <article>
                <h2>Cold Cough</h2>
                <img src="https://insanelygoodrecipes.com/wp-content/uploads/2021/02/Homemade-Iced-Coffee-Latte-with-Milk-and-Cream.png"/>
                <p>It does get colder. Now drink</p>
            </article>

        
        </div>
    )
}