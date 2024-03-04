import './Product.css'

export default function Products() {
    return (
        <div className="products">
            <article>
                <h1 className='location'>New Location! Coming Soon!</h1>
                
                <img className='location' src="https://i.ytimg.com/vi/ZIEzl5-xVok/maxresdefault.jpg"/>
                <p className='location'>Our location expansion is in progress. All thanks to our customers.
                </p>
                <br></br>
                <br></br>
            </article>

            <article>
                <h1 className='discount'>Discount Celebration!</h1>
                
                <img className='discount'  src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/23/posts/28611/image/how-to-set-discount-pricing-right.jpg" />
                <p className='discount'>To celebrate our upcoming expansion. We are having a 10% discount.</p>
                
           </article>
        </div>
    )
}