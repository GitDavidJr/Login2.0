import { createContext, useEffect, useState } from "react";
import { signInRequest, recoverUserInformation } from "../services/auth";
import { parseCookies, setCookie } from "nookies";
import Router from "next/router";

type User = {
  name: string;
  email: string;
  avatar_url: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
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
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  });

  async function signIn({ email, password }: SignInData) {

    console.log(email, password);

    
    await signInRequest({ email, password })
    /*
    console.log(response)

    setCookie(undefined, "login2.0.token", response.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setUser(response.user);

    Router.push("/dashboard"); */
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
