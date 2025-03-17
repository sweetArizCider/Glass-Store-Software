import './Categories.css'
import {ProductCard} from '../../layouts/cards/ProductCard'
import persianaImg from '../../../public/images/products/PersianaCafeClaro.webp'

export function Categories(){
    return(
        <section id="main-section">
            <header id="main-header">
                <h1>Principales Categorias</h1>
            </header>
            <main id='categories-main'>
                <ProductCard 
                    title="Persianas" 
                    text="Mejora tu hogar con nuestras elegantes persianas,
                    disponibles en varios estilos y colores para un control
                    óptimo de la luz y privacidad."
                    img={persianaImg}
                />
                <ProductCard 
                    title="Persianas" 
                    text="Mejora tu hogar con nuestras elegantes persianas,
                    disponibles en varios estilos y colores para un control
                    óptimo de la luz y privacidad."
                    img={persianaImg}
                />
                <ProductCard 
                    title="Persianas" 
                    text="Mejora tu hogar con nuestras elegantes persianas,
                    disponibles en varios estilos y colores para un control
                    óptimo de la luz y privacidad."
                    img={persianaImg}
                />
                <ProductCard 
                    title="Persianas" 
                    text="Mejora tu hogar con nuestras elegantes persianas,
                    disponibles en varios estilos y colores para un control
                    óptimo de la luz y privacidad."
                    img={persianaImg}
                />
            </main>
            <footer id="categories-footer">
                <h1>Pedidos personalizados</h1>
            </footer>
        </section>
    )
}