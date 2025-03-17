# Login2.0

Este repositório serve para estudar conceitos de autenticação e login usando Next.js e Tailwind CSS, com foco em JWT (JSON Web Token). Esta é a parte 2, "Login2.0", de outra aplicação que também possui repositório no meu GitHub. A versão anterior utilizava localStorage para armazenar as informações de login, sendo mais suscetível a ataques.

## Tecnologias Utilizadas

- Next.js
- Tailwind CSS
- JWT (JSON Web Token)
- Fastify (Back-end)
- Prisma
- MongoDB (Banco de Dados)

## Objetivo

O objetivo deste projeto é aprimorar a segurança do processo de login, utilizando JWT para autenticação, ao invés de armazenar as informações de login no localStorage.

## Base de Estudos

Estou baseando os estudos deste projeto no vídeo [Next.js - Autenticação JWT com back-end próprio - Code/Drops #72 da Rocketseat](https://www.youtube.com/watch?v=pvrKHpXGO8E&t=2398s).

## Links Relacionados

- [Login - Versão 1](https://github.com/GitDavidJr/login-v1-frontend)
- [Back-end do Login2.0](https://github.com/GitDavidJr/login-v2-backend)

## Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/GitDavidJr/Login2.0.git
    ```
2. Instale as dependências:
    ```bash
    cd Login2.0
    npm install
    ```
3. Execute a aplicação:
    ```bash
    npm run dev
    ```

## Estado Atual e Propostas de Melhoria

Atualmente, o projeto permite apenas a criação de conta e autenticação básica. Para uma versão futura, planeja-se:

- Implementar tratamento de erros completo no front-end e back-end
- Finalizar o CRUD de usuários (atualmente só possui criação)
- Adicionar validação de formulários
- Implementar recuperação de senha
- Adicionar autenticação com providers (Google, GitHub)
- Implementar refresh token para melhor segurança e experiência do usuário

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Faça um fork do repositório, crie uma branch para suas alterações e envie um pull request.
