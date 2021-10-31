import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import api from "../../services/api"

export default function Register({history}){


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault()
        
        await api.post('/auth/register/', { 
            'username': username,
            'email':email,
            'password': password,
            'password2': password,
            'first_name': username,
            'last_name': username,
        })
        history.push('/')
    }

    return (
        <>
            <p>
                Cadastro de <strong>administrador</strong> do sistema.
            </p>

            <form onSubmit={handleSubmit}>

                <label>USERNAME*</label>

                <input
                    type="text"
                    id=""
                    placeholder="Seu nome de usuário"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />



                <label>E-MAIL*</label>

                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />



                <label htmlFor="email">SENHA*</label>

                <input
                    type="password"
                    id="password"
                    placeholder="Sua senha segura"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button className="btn" type="submit">Cadastrar</button>
                
                <hr />

                <Link to='/'>
                    <button className="btn-secondary">Entrar</button>
                </Link>
            </form>

        </>
    )
}