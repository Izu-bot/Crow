import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import '../styles/Roupas.css'
import image from '../components/imgRoupa'

export default function Roupas() {

    const [roupas, setRoupas] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/roupas/', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setRoupas(data)
            })
            .catch(Error => console.log(Error))
    }, [])

    return (
        <div>
            <h1 className="roupa-titulo">Roupas</h1>
            <section className="cabide">
                {roupas.map((roupa, index) => (
                    <div key={roupa.id_produto} className="card-roupa">
                        <img className="img-card" src={image[index]}
                        alt="Todas as imagens foram disponibilizadas por bancos de imagens gratuitas,
                        não tem a intenção de vender são apenas ilustrações para compozição do site." />
                        <Link to={`/roupas/${roupa.id_produto}`} state={{img: image[index]}}>
                            <p>{roupa.nm_produto}</p>
                            <p>R$: {roupa.vlr_produto}</p>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}