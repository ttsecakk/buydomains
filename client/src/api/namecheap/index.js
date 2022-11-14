import axios from 'axios';

export const namecheapApi = axios.create({
    baseURL: process.env.API_HOST,
    timeout: 1000,
})