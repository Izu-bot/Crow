import { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

import iconArrow from '../images/arrow-left-solid.svg'
import '../styles/Roupas.css'
import '../styles/RoupasID.css'

export default function RoupasID() {
    const location = useLocation()
    const { img } = location.state || {}

    const { id } = useParams()
    const [roupas, setRoupas] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {

            const response = await fetch(`http://localhost:3333/roupas/${id}`)
            const data = await response.json()
            setRoupas(data)
        }
        fetchApi()
    }, [id])

    return (
        <div>
            <Link to={'/roupas'} className='link'><img src={iconArrow} alt="Icone para voltar" /> Voltar </Link>
            {roupas.map((roupa) => (
                <section className='card-produto' key={id}>
                    <h1>{roupa.nm_produto}</h1>
                    <img className='img-produto' src={img}
                        alt="Imagens meramente ilustrativas." />

                    <div className='comprar'>
                        <form action="">
                            <button disabled type='submite'> Comprar </button>
                        </form>
                        
                        <p>R$: {roupa.vlr_produto}</p>

                        <h3>Descrição do produto:</h3>
                        <p>Composição: 100% algodão <br />
                            Cuidados de conservação: <br />
                            Lavagem à máquina no ciclo delicado  <br />
                            Não usar alvejante  <br />
                            Passar em temperatura baixa  <br />
                            Quantidade disponível: {roupa.qtd_estoque}
                        </p>
                    </div>
                </section>
            ))}
        </div>
    );
}