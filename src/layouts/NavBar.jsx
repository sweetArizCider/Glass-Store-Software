// Svgs
import whatsappSvg from "../../public/images/svg/whatsapp.svg";
import facebookSvg from "../../public/images/svg/facebook.svg";
import instagramSvg from "../../public/images/svg/instagram.svg";
import glassStoreLogo from "../../public/images/png/GLASS.png";
import searchSvg from "../../public/images/svg/search.svg";
import favoritesSvg from "../../public/images/svg/favorites.svg";
import cotizacionesSvg from "../../public/images/svg/clip.svg";
import userSvg from "../../public/images/svg/user.svg";

// Config
import { SocialMedia } from "../assets/config.json";
// Styles
import './NavBar.css'

function NavBar() {
  return (
    <section id="navBar">
      <article className="navIcons">
        <a href={SocialMedia.whatsapp} target="_blank" className="anchorIcon">
          <img src={whatsappSvg} alt="WhatsApp" className="svg" />
        </a>
        <a href={SocialMedia.facebook} target="_blank" className="anchorIcon">
          <img src={facebookSvg} alt="Facebook" className="svg" />
        </a>
        <a href={SocialMedia.instagram} target="_blank" className="anchorIcon">
          <img src={instagramSvg} alt="Instagram" className="svg" />
        </a>
      </article>
      <figure className="logo">
        <img src={glassStoreLogo} alt="GlassStoreLogo" />
      </figure>
      <article className="navIcons">
        <a className="anchorIcon" href="/Productos">
          <img src={searchSvg} alt="Buscar Productos" className="svgOptions" />
        </a>
        <img src={favoritesSvg} alt="Favoritos" className="svgOptions" />
        <img src={cotizacionesSvg} alt="Cotizaciones" className="svgOptions" />
        <img src={userSvg} alt="Usuarios" className="svgOptions" />
      </article>
    </section>
  );
}

export default NavBar;