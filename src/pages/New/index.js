import React,{useState} from 'react'
import './styles.css'

import api from '../../services/api'

export default function New({ history }) {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[department, setDepartment] = useState('')
    const[salary, setSalary] = useState(0.0)
    const[birthDate, setBirthDate] = useState('')



    async function handleSubmit(event){
        event.preventDefault()
        try{
            const token = localStorage.getItem('token')
            const response = await api.post('/employees/',{
                "name":name,
                "email":email,
                "department":department,
                "salary":salary,
                "birth_date":birthDate,
            },{
                headers: {
                    'Authorization': 'Bearer ' + token
                },
            })
            console.log(response.data)
            history.push('/dashboard')
        }catch(error){
            console.log(error.response)
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>NOME*</label>
                <input
                    placeholder="Nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <label>EMAIL*</label>
                <input
                    type="email"
                    placeholder="Endereço de E-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <label>DEPARTAMENTO*</label>
                <input
                    placeholder="Departamento principal"
                    value={department}
                    onChange={event => setDepartment(event.target.value)}
                />

                <label>SALÁRIO*</label>
                <input
                    placeholder="Valor do Salário"
                    value={salary}
                    onChange={event => setSalary(event.target.value)}
                />

                <label>DATA NASCIMENTO*</label>
                <input
                    type="date"
                    placeholder="Valor cobrado por dia"
                    value={birthDate}
                    onChange={event => setBirthDate(event.target.value)}
                />

                <button className="btn">CADASTRAR</button>


            </form>
        </>
    )
}