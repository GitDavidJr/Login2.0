import { v4 as uuid } from "uuid";
import { api } from "./api";

type SignInRequestData = {
    email: string;
    password: string;
}

type User = {
    name: string;
    email: string;
    avatar_url: string;
}



export async function signInRequest(data: SignInRequestData){
    
    return  (await api.post('/login', data)).data
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve,amount))

/* export async function signInRequest(data: SignInRequestData ){
    await delay()

    return {
        token: uuid(),
        user: {
            name: 'David Inacio',
            email: 'davidjunior051204@gmail.com',
            avatar_url: 'https://github.com/GitDavidJr.png'
        }
    }
} */

export async function recoverUserInformation(token) {

    console.log(token)

    // Aqui você passa o token de maneira correta no cabeçalho da requisição
    const response = await api.post('/protected-user', null, {
        headers: { Authorization: `Bearer ${token}` }
    });

    console.log(response)

    return response.data
}