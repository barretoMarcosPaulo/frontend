/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'


import api from '../../services/api'
import '../Dashboard/styles.css'

export default function Dashboard() {
    
    const [youngererName, setYoungererName] = useState()
    const [youngererDpt, setYoungererDpt] = useState()
    const [youngererDate, setYoungererDate] = useState()

    const [olderName, setOlderName] = useState()
    const [olderDpt, setOlderDpt] = useState()
    const [olderDate, setOlderDate] = useState()

    const [lowestName, setLowestName] = useState()
    const [lowestDpt, setLowestDpt] = useState()
    const [lowestSalary, setLowestSalary] = useState()

    const [highestName, setHighestName] = useState()
    const [highestDpt, setHighestDpt] = useState()
    const [highestSalary, setHighestSalary] = useState()

    useEffect( ()=>{
        async function loadSpots(){
            const token = localStorage.getItem('token')

            const response_a = await api.get('/reports/employees/age/',{
                headers: {
                    'Authorization': 'Bearer ' + token
                },
            });

            const response_s = await api.get('/reports/employees/salary/', {
                headers: {
                    'Authorization': 'Bearer ' + token
                },
            });

            setYoungererName(response_a.data.youngerer.name)
            setOlderName(response_a.data.older.name)

            setYoungererDpt(response_a.data.youngerer.department)
            setOlderDpt(response_a.data.older.department)

            setYoungererDate(response_a.data.youngerer.birth_date)
            setOlderDate(response_a.data.older.birth_date)

            setLowestName(response_s.data.lowest.name)
            setHighestName(response_s.data.highest.name)

            setLowestDpt(response_s.data.lowest.department)
            setHighestDpt(response_s.data.highest.department)

            setLowestSalary(response_s.data.lowest.salary)
            setHighestSalary(response_s.data.highest.salary)
  
        }
        loadSpots()
    }, [])
    return (
        <>
            <h3>Mais Novo VS Mais Velho</h3>
            <ul className="spot-list">
                <li key={122}>
                    <header style={{backgroundImage: `url(https://www.pngitem.com/pimgs/m/208-2088584_employee-png-transparent-png.png)`}} />
                    <strong>{youngererName}</strong>
                    <span>{youngererDpt}</span>
                    <span>{youngererDate}</span>
                </li>

                <li key={1221}>
                    <header style={{backgroundImage: `url(https://www.pngitem.com/pimgs/m/208-2088584_employee-png-transparent-png.png)`}} />
                    <strong>{olderName}</strong>
                    <span>{olderDpt}</span>
                    <span>{olderDate}</span>
                </li>
            </ul>


            <h3>Maior salário VS Menor salário</h3>
            <ul className="spot-list">
                <li key={12111}>
                    <header style={{backgroundImage: `url(https://www.pngitem.com/pimgs/m/208-2088584_employee-png-transparent-png.png)`}} />
                    <strong>{highestName}</strong>
                    <span>{highestDpt}</span>
                    <span>R$ {highestSalary}</span>
                </li>

                <li key={1342}>
                    <header style={{backgroundImage: `url(https://www.pngitem.com/pimgs/m/208-2088584_employee-png-transparent-png.png)`}} />
                    <strong>{lowestName}</strong>
                    <span>{lowestDpt}</span>
                    <span>R$ {lowestSalary}</span>
                </li>
            </ul>


        </>
    )
}