import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // baseURL: 'http://localhost:3000/',
},console.log(process.env.VUE_APP_API_URL))

function registerUser(user){
    
   return instance.post('signup',user);
}

function loginUser(user){
    
    return instance.post('login',user);
 }

export { registerUser , loginUser };