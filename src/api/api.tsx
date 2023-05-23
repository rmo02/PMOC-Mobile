import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'http://192.168.6.56:3000'
    }
)

export default api;