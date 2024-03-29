import Frases from './Frases'

import '../styles/Banner.css'

// eslint-disable-next-line react/prop-types
export default function Banner({imagem, texto, frase}) {


    return(
        <div className='banner'>

            <Frases frases={frase}/>

            <img className='imagem' src={imagem} alt={texto} />
        </div>
    )
}