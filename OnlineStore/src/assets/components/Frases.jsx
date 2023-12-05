import { useState, useEffect } from 'react';
import '../styles/Frases.css';

// eslint-disable-next-line react/prop-types
export default function Frases({frases}) {

    const arrayFrases = frases

   
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndice((prevIndice) => (prevIndice + 1) % arrayFrases.length);
        }, 3000);

        return () => clearInterval(interval)
    }, [arrayFrases.length]);

    return(
        <h1 className='frase-formatada'>{arrayFrases[indice]}</h1>
    )
}
