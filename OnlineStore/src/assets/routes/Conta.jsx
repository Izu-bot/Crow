import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'

import '../styles/Conta.css';

export default function Conta() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const response = await fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, senha}),
        })

        if(response.ok) {
            // autenticação bem sucedida
            const data = await response.json()

            sessionStorage.setItem('token', data.token)

            console.log('Login bem-sucedido:')
            // redirecionar
            navigate("/")
            
        } else {
            // exibir msg de erro
            console.error(`Erro ao realizar login`, response.statusText)
        }
    }

    return (
        <div className="container">
            <h1 className='titulo'>Login</h1>
            <form className="form-container" method='POST' onSubmit={handleSubmit}>
                <fieldset className="form-dados">
                    <input type="email" autoFocus placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
                </fieldset>
                <fieldset className="form-btn">
                    <button type="submit">Entrar</button>
                    <Link to="criarConta">Criar conta</Link>
                </fieldset>
            </form>
        </div>
    )
}