import axios from "axios";

export const nameCheapApi = axios.create({
    baseURL: 'https://api.namecheap.com/xml.response',
})