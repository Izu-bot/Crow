import '../styles/Conta.css';

export default function Conta() {
    return (
        <div className="container">
            <h1 className='titulo'>Login</h1>
                <form className="form-container">
                    <div className="form-dados">
                        <input type="email" autoFocus placeholder='Email' />
                        <input type="password" placeholder='Senha' />
                    </div>
                    <div className="form-btn">
                        <button type='button'>Voltar</button>
                        <button type="submit">Entrar</button>
                    </div>
                </form>
        </div>
    )
}