import axios from 'axios'
import { toast } from 'react-toastify';
import { User } from './User';

const API = 'http://localhost:3030';
export const getUser = async () => {
    return await axios.get<User[]>(`${API}//UserApp`);
}
export const getUserName = async (username: string, password: string) => {

    let userValidate = false;
    const res = await axios.get<User[]>(`${API}/UserApp?Username=${username}`).then(res => {
        const users = res.data;
        users != [] ?
            users.map(user => {
                userValidate = user.Username == username && user.Password == password ? true : false;
            }) : userValidate = false;
    })


    return userValidate;
}

export const createBrands = async (user: User) => {
    return await axios.post(`${API}//UserApp`, user);
}
export const loginToken = async (usernameLogin: string, passwordLogin: string) => {



    var axios = require('axios');
    var data = JSON.stringify({
      "username": usernameLogin,
      "password": passwordLogin
    });
    
    var config = {
      method: 'post',
      url:`${API}/auth/login`,
      headers: {  'Content-Type': 'application/json' },
      data : data
    };
    
   return await  axios(config).then( (response:any)=> {
        window.localStorage.setItem("isLogged", 'true');
        window.localStorage.setItem("username", usernameLogin);
        window.localStorage.setItem("token",response.data.access_token);
        window.location.href='/' 
    }).catch( (error:any)=> {
        toast.warning("Usuario o Password incorrecto");
      console.log(error);
    
    });
}