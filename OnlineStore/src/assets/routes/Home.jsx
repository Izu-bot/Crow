import Banner from "../components/Banner"
import Capa from "../images/CrowGimp.png"
import Carrosel from "../components/Carrosel";
import imagens from '../components/dadosImagens'

export default function Home() {

    const frase = [
        'Streetwear que representa sua vibe.',
        'Atitude nas peças, liberdade no estilo.',
        'Roupas que falam a língua das ruas.'
    ];

    return (
        <div>

            <Banner imagem={Capa} texto="Imagem promocional da marca da loja." frase={frase} />
            <Carrosel titulo="lookbook" imagens={imagens} />
            
        </div>
    )
}