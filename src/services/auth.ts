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



export async function signInRequest(data: SignInRequestData ){

    console.log("Request")
    console.log(data)

    const response = await api.post('/login', data)

    console.log("Response")

    console.log(response)
    
    return  // aparentemente o cors pode esta dando erro, pois consigo fazer requisições http pelo thunder client ou insomnia, mas não consigo fazer pelo front-end
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

export async function recoverUserInformation() {
    await delay()
    return {
        user: {
            name: 'David Inacio',
            email: 'davidjunior051204@gmail.com',
            avatar_url: 'https://github.com/GitDavidJr.png'
        }
    }
}