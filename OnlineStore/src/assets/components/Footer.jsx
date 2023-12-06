import '../styles/Footer.css';
import iconFacebook from '../images/facebook.svg';
import iconInstagram from '../images/instagram.svg';
import iconX from '../images/x-twitter.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="contatos">
                <li> <a href='#' >Sobre nós </a></li>
                <li><a href='#'> Trabalhe conosco </a></li>
                <h2>Nossas redes sociais</h2>
                <li> <a href='#'> <img src={iconFacebook} alt='Icone Facebook' /> Facebook </a></li>
                <li> <a href='#'> <img src={iconX} alt='Icone Twitter' /> Twitter </a></li>
                <li> <a href='#'> <img src={iconInstagram} alt='Icone Instagram' /> Instagram </a></li>
            </ul>

            <section className="referencias">
                <a href='#'> <img src={github} />  </a>
                <a href='#'> <img src={linkedin} />  </a>
                <p>As imagens utilizadas neste site foram obtidas de fontes gratuitas. Nomes dos fotografos estão no texto alternativo da imagem e no arquivo README.md .</p>
            </section>
        </footer>
    )
}