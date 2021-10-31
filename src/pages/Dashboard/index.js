/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'


import api from '../../services/api'
import './styles.css'

export default function Dashboard() {
    const [employees, setEmployees] = useState([])
    const [search, setSearch] = useState([])

    useEffect( ()=>{
        async function loadSpots(){
            const token = localStorage.getItem('token')

            const response = await api.get('/employees/', {
                headers: {
                    'Authorization': 'Bearer ' + token
                },
            });
            setEmployees(response.data)
        }
        loadSpots()
    }, [])

    async function searchEmployees(params){
        if(params.length > 0){
            const token = localStorage.getItem('token')

            const response = await api.post('/employees/search/',{search:params}, {
                headers: {
                    'Authorization': 'Bearer ' + token
                },
            });
            setEmployees(response.data)
        }else{
            const token = localStorage.getItem('token')
            const response = await api.get('/employees/',{
                headers: {
                    'Authorization': 'Bearer ' + token
                },
            });
            setEmployees(response.data)  
        }
        setSearch(params);
    }
    return (
        <>
            <input
                className="form-search"
                type="email"
                id="email"
                placeholder="Buscar por nome, departamento ou email"
                value={search}
                onChange={event => searchEmployees(event.target.value)}
            />

            <ul className="spot-list">
                {employees.map(employee =>(
                    <li key={employee.id}>
                        <header style={{backgroundImage: `url(https://www.pngitem.com/pimgs/m/208-2088584_employee-png-transparent-png.png)`}} />
                        <strong>{employee.name}</strong>
                        <span>{employee.department}</span>
                        <Link to={{pathname:"/details", state:{ employee: employee }}}>
                            <span className="details">Ver Detalhes</span>
                        </Link>
                    </li>
                ) )}
            </ul>

            <Link to='/new'>
                <button className="btn">Novo colaborador</button>
            </Link>
            <br />
            <br />
            <Link to='/reports'>
                <button className="btn-secondary">Ver Relatórios</button>
            </Link>
        </>
    )
}