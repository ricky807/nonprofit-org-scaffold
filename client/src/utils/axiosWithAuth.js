import axios from 'axios'

const axiosWithAuth = axios.create({
    baseURL: process.env.GATSBY_API_URI
})

export default axiosWithAuth