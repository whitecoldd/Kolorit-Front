import axios from 'axios'

const BASE_URL = 'http://localhost:1000/api/'


export const publicReq = axios.create({
  baseURL: BASE_URL,
})