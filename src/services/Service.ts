import axios from 'axios';
import Login from '../models/SignIn';
import { Dispatch, SetStateAction } from 'react';

export const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const register = async (url: string, data: {
    name: string,
    username: string,
    email: string,
    password: string
},
    setData: any) => {
    const response = await api.post(url, data)
    setData(response.data.token)
}

export const login = async (url: string, data: {
    username: string,
    password: string
},
    setData: React.Dispatch<React.SetStateAction<string>>) => {
    const response = await api.post(url, data)
    setData(response.data.token)
}

export const search = async (url: string, setData: any, header: any) => {
    const response = await api.get(url, header)
    setData(response.data)
}

export const searchById = async (url: string, setData: any, header: any) => {
    const response = await api.get(url, header)
    setData(response.data)
}

export const post = async (url: string, data: any, setData: any, header: any) => {
    const response = await api.post(url, data, header)
    setData(response.data)
}

export const put = async (url: string, data: any, setData: any, header: any) => {
    const response = await api.put(url, data, header)
    setData(response.data)
}

export const deleteById = async (url: string, header: any) => {
    await api.delete(url, header)
}