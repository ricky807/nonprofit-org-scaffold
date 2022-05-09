import axios from 'axios'

const axiosWithAuth = axios.create({
    baseURL: 'http://localhost:1337'
})

export default axiosWithAuth