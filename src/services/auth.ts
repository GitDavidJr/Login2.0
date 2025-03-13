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
    
    return await api.post('/login', data) // aparentemente o cors pode esta dando erro, pois consigo fazer requisições http pelo thunder client ou insomnia, mas não consigo fazer pelo front-end
}
export async function recoverUserInformation() { // passa o token
    return {
        user: {
            name: 'David Inacio',
            email: 'davidjunior051204@gmail.com',
            avatar_url: 'https://github.com/GitDavidJr.png'
        }
    }
}