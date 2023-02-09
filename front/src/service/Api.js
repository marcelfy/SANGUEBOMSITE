import axios from "axios"

var token = sessionStorage.getItem('token')

const Api = axios.create({
    baseURL : "http://localhost:8000",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "access-token" : token
    }
  })
  

export default Api;