import Banner from "./Banner"
import Capa from "../images/CrowGimp.png"

export default function Home(){

    const frase = [
        'Streetwear que representa sua vibe.',
        'Atitude nas peças, liberdade no estilo.',
        'Roupas que falam a língua das ruas.'
    ];

    return(
        <div>
            <Banner imagem={Capa} texto="Imagem promocional da marca da loja." frase={frase} />
        </div>
    )
}