import axios from 'axios'

const api= axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key:'f87ff48eccf7b835a95827ae776c0b37',
        language: 'pt-BR',
        page: 1

    }
})

export default api