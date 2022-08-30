import axios from "axios"; 


const BASE_URL = "http://localhost:5000/api/" 
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGQzZDRlMTQ0ZGM5ZWI2ZmM5ZWRhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTg3MTI5NSwiZXhwIjoxNjYyMzAzMjk1fQ.i2bIdAi9arZ0KqUtYwwNGpdqXvVH3d1KYNLmo-OFOL0" 



export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });