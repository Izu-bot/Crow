import { Link } from "react-router-dom"
import { useState } from "react";

import '../styles/CriarConta.css';

export default function CriarConta() {

    const [dadosFormulario, setDadosFormulario] = useState({
        name: '',
        surname: '',
        address: '',
        cpf: '',
        date: '',
        email: '',
        senha: '',
    })

    const handleChange = (campo, valor) => {
        setDadosFormulario({ ...dadosFormulario, [campo]: valor })
    }

    const handleLimpar = () => {
        setDadosFormulario(Object.fromEntries(Object.keys(dadosFormulario).map(campo => [campo, ''])));
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const resposta = await fetch('http://localhost:3333/clientes', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosFormulario)
            })

            if (!resposta.ok) {
                alert(`Erro ao cadastrar cliente, verifique se todos os dados estão sendo preenchidos de forma correta.`)
                return
            }

            const dadosResposta = await resposta.json()
            alert(`Cliente cadastrado com sucesso`)
            handleLimpar()
            dadosResposta

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="container-novo">
            <h1 className="titulo">Crie sua conta</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <fieldset className="dados-pessoais">
                    <legend>Dados Pessoais</legend>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" value={dadosFormulario.name}
                        onChange={(e) => handleChange("name", e.target.value)} autoFocus />

                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input type="text" id="sobrenome" value={dadosFormulario.surname}
                        onChange={(e) => handleChange('surname', e.target.value)} />

                    <label htmlFor="endereco">Endereço</label>
                    <input type="text" id="endereco" value={dadosFormulario.address}
                        onChange={(e) => handleChange('address', e.target.value)} />

                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id="cpf" value={dadosFormulario.cpf}
                        onChange={(e) => handleChange('cpf', e.target.value)} />

                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input type="date" id="dataNascimento" value={dadosFormulario.date}
                        onChange={(e) => handleChange('date', e.target.value)} />
                </fieldset>
                <fieldset className="dados-pessoais">
                    <legend>Dados para login</legend>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={dadosFormulario.email}
                        onChange={(e) => handleChange('email', e.target.value)} />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" value={dadosFormulario.senha}
                        onChange={(e) => handleChange('senha', e.target.value)} />
                </fieldset>

                <fieldset className="form-btn">
                    <button type="submit">Criar</button>
                    <Link to="/conta">Voltar</Link>
                </fieldset>
            </form>
        </div>
    )
}