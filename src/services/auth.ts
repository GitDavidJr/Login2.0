import { v4 as uuid } from "uuid";
import { api } from "./api";

type SignInRequestData = {
    email: string;
    password: string;
}

type SignUpData = {
    name: string;
    email: string;
    password: string;
    gitHub: string;
  };

type User = {
    name: string;
    email: string;
    avatar_url: string;
}

export async function signInRequest(data: SignInRequestData){
    
    return  (await api.post('/login', data)).data
}

export async function signUpRequest(data: SignUpData){
    
    return  (await api.post('/register', data)).data
}

export async function recoverUserInformation(token) {
    
    return (await api.get('/protected-user', {
        headers: { Authorization: `Bearer ${token}` }
    })).data;
}
