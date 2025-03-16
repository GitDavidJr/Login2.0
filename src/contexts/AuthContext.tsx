import { createContext, useEffect, useState } from "react";
import { signInRequest, recoverUserInformation, signUpRequest } from "../services/auth";
import { parseCookies, setCookie } from "nookies";
import Router from "next/router";

type User = {
  name: string;
  email: string;
  avatar_url: string;
};

type SignUpData = {
  name: string;
  email: string;
  password: string;
  gitHub: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignInData) => Promise<void>;
};

type Response = {
  token: string;
  user: User;
};


export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "login2.0.token": token } = parseCookies();

    if (token) {
      recoverUserInformation(token).then((response) => {
        setUser(response.user);
      });
    }
  });

  async function signIn({ email, password }: SignInData) {

    
    const response = await signInRequest({ email, password })

    setCookie(undefined, "login2.0.token", response.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setUser(response.user);

    Router.push("/dashboard"); 
  }

  async function signUp({ name, email, password, gitHub }: SignUpData) {

    const response = await signUpRequest({ name, email, password, gitHub })

    setCookie(undefined, "login2.0.token", response.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setUser(response.user);

    Router.push("/dashboard"); 
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
