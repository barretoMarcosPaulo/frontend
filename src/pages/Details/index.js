/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import api from '../../services/api'
import '../Dashboard/styles.css'

export default function Details({ history }) {
    
    const [editMode, setEditMode] = useState(false)
    const location = useLocation()

    const[name, setName] = useState(location.state.employee.name)
    const[email, setEmail] = useState(location.state.employee.email)
    const[department, setDepartment] = useState(location.state.employee.department)
    const[salary, setSalary] = useState(location.state.employee.salary)
    const[birthDate, setBirthDate] = useState(location.state.employee.birth_date)


    async function deleteEmployee(){
        await api.delete(
            `/employees/${location.state.employee.id}/`
        )
        history.push('/dashboard')
    }
    
    async function handleSubmit(event){
        event.preventDefault()
        try{
            await api.put(`/employees/${location.state.employee.id}/`,{
                "name":name,
                "email":email,
                "department":department,
                "salary":salary,
                "birth_date":birthDate,
            })
            history.push('/dashboard')
        }catch(error){
            console.log(error.response)
        }

    }

    return (
        <>
            <div style={editMode? {display:'none'} : {}}>
                <li class="details-emp">
                    <strong>Nome: </strong> {location.state.employee.name}
                </li>
                <li class="details-emp">
                    <strong>Departamento: </strong> {location.state.employee.department}
                </li>
                <li class="details-emp">
                    <strong>E-mail: </strong> {location.state.employee.email}
                </li>
                <li class="details-emp">
                    <strong>Nascimento: </strong> {location.state.employee.birth_date}
                </li>
                <li class="details-emp">
                    <strong>Salário: </strong> {location.state.employee.salary}
                </li>

            </div>
            
            
            <br />
            <br />
            
            <div style={editMode ? {display:'none'}:{}}>
                <button className="btn" onClick={deleteEmployee} >Excluir</button>
                <br />
                <br />
                <button className="btn-secondary" onClick={()=>{setEditMode(true)}}>Editar</button>
            </div>




            <form onSubmit={handleSubmit} style={editMode?{}:{display:'none'}}>

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

                <div style={editMode ? {}:{display:'none'}}>
                    <button className="btn" onClick={handleSubmit} >Atualizar</button>
                    <br />
                    <br />
                    <button className="btn-secondary" onClick={()=>{setEditMode(false)}}>Cancelar</button>
                </div>


            </form>


        </>
    )
}