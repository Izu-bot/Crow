import { Link } from 'react-router-dom';

import '../styles/Conta.css';

export default function Conta() {
    return (
        <div className="container">
            <h1 className='titulo'>Login</h1>
            <form className="form-container" action='' method='POST'>
                <div className="form-dados">
                    <input type="email" autoFocus placeholder='Email' />
                    <input type="password" placeholder='Senha' />
                </div>
                <div className="form-btn">
                    <button type="submit">Entrar</button>
                    <Link to="criarConta">Criar conta</Link>
                </div>
            </form>
        </div>
    )
}