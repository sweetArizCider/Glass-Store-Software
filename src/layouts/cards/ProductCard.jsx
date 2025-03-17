import './ProductCard.css'
export function ProductCard({title, text, img, }){
    return(
        <article id="card">
            <main className='card-content'>
                <figure className='img-card'>
                    <img src={img} alt={title} />
                </figure>
            </main>
            <footer className='card-footer'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-text'>{text}</p>
            </footer>
        </article>
    )
}

