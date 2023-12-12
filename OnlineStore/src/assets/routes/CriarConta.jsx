import { Link } from "react-router-dom"

import '../styles/CriarConta.css';

export default function CriarConta() {
    return (
        <div className="container">
            <h1 className="titulo">Crie sua conta</h1>
            <form action="" className="form-container">
                <fieldset className="dados-pessoais">
                    <legend>Dados Pessoais</legend>
                    <label htmlFor="">Nome</label>
                    <input type="text" autoFocus/>

                    <label htmlFor="">Sobrenome</label>
                    <input type="text" />

                    <label htmlFor="">Endereço</label>
                    <input type="text" />

                    <label htmlFor="">CPF</label>
                    <input type="text" />

                    <label htmlFor="">Data de Nascimento</label>
                    <input type="date" />
                </fieldset>
                <fieldset className="dados-pessoais">
                    <legend>Dados para login</legend>
                    <label htmlFor="">Email</label>
                    <input type="email" />

                    <label htmlFor="">Senha</label>
                    <input type="password" />
                </fieldset>

                <fieldset className="form-btn">
                    <button type="submit">Criar</button>
                    <Link to="/conta">Voltar</Link>
                </fieldset>
            </form>
        </div>
    )
}