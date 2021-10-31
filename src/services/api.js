import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:8000/api'
    baseURL: 'https://ssys-employee-manager-test.herokuapp.com/api'
})

export default api