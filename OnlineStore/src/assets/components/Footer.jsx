import { Link } from 'react-router-dom';

import iconFacebook from '../images/facebook.svg';
import iconInstagram from '../images/instagram.svg';
import iconX from '../images/x-twitter.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="contatos">
                <li> <Link to="#" >Sobre nós </Link></li>
                <li> <Link to="#"> Trabalhe conosco </Link> </li>
                <h2>Nossas redes sociais</h2>
                <li> <Link to="https://www.facebook.com/?locale=pt_BR" target="_blank"> <img src={iconFacebook} alt='Icone Facebook' /> Facebook </Link></li>
                <li> <Link to="https://twitter.com/" target='_blank'> <img src={iconInstagram} alt='Icone Instagram' /> Instagram </Link></li>
                <li> <Link to="https://www.instagram.com/" target='_blank'> <img src={iconX} alt='Icone Twitter' /> Twitter </Link></li>
            </ul>

            <section className="referencias">
                <Link to="https://github.com/Izu-bot" target='_blank'> <img src={github} />  </Link>
                <Link to="https://www.linkedin.com/in/kauan-cardoso-a990a1242/" target='_blank'> <img src={linkedin} />  </Link>
                <p>As imagens utilizadas neste site foram obtidas de fontes gratuitas. Nomes dos fotografos estão no texto alternativo da imagem e no arquivo README.md .</p>
            </section>
        </footer>
    )
}