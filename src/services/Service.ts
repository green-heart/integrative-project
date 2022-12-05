import axios from 'axios';

export const api = axios.create({
    baseURL:'https://green-heart.onrender.com'
})

export const registerUser = async(url: any, dados: any, setDado: any) => {
    const response = await api.post(url, dados,)
    setDado(response.data.token)
}

export const login = async(url: any, dados: any, setDado: any) => {
    const response = await api.post(url, dados)
    setDado(response.data)
}