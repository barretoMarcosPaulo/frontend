import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import api from "../../services/api"

export default function Login({history}){


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault()
        
        const response = await api.post('/auth/login/', { username, password })
        const { access } = response.data
        
        localStorage.setItem('token', access)

        history.push('/dashboard')
    }

    return (
        <>
            <p>
                Gerencie <strong>colaboradores </strong> da sua empresa, e gere <strong>relatórios</strong>.
            </p>

            <form onSubmit={handleSubmit}>

                <label htmlFor="email">USERNAME*</label>

                <input
                    type="text"
                    id="username"
                    placeholder="Seu nome de usuário"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />

                <label htmlFor="email">SENHA*</label>

                <input
                    type="password"
                    id="password"
                    placeholder="Sua senha segura"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button className="btn" type="submit">Entrar</button>
                
                <hr />

                <Link to='/register'>
                    <button className="btn-secondary">Cadastre-se</button>
                </Link>
            </form>

        </>
    )
}