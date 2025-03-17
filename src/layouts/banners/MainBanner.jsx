import { SecundaryButton } from "../buttons/SecundaryButton";
import './MainBanner.css'

export function MainBanner () {
    return(
        <section className="background" >
            <article className="content">
                <header><h1>TRANSFORMA TU ESPACIO CON ESTILO Y DISTINCIÓN</h1></header>
                <main>
                    <p>Dale un toque único a tu espacio con nuestros
                         <br/> productos de alta calidad. Soluciones elegantes y 
                         <br/> personalizadas para tu hogar o negocio.
                    </p>
                </main>
                <footer>
                    <SecundaryButton text="Ver Productos"/>
                </footer>
            </article>
        </section>
    )
}