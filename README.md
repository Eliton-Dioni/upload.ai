<h1 align="center" style="text-align: center;"> upSmart.Ai </h1> 
<p align="center"> 
  <a href="#project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#usage">Utilização</a>
</p> 
<h2 id="project">📁 Projeto</h2>

O upSmart.Ai é uma aplicação que permite o upload de vídeos, gera transcrições e usa prompts pré-configurados para criar descrições, títulos, resumos, perguntas e mais, com base no conteúdo dos vídeos. 
A aplicação utiliza as APIs da OpenAI para oferecer sugestões personalizadas de forma rápida e eficaz.

<h2 id="technologies">💻 Tecnologias</h2>

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* Node.js
* TypeScript
* Fastify
* Prisma
* Dotenv
* OpenAI
* Zod

<h2 id="usage">💡 Utilização</h2>

Para executar a aplicação localmente, siga os passos abaixo. Certifique-se de ter o Node.js e o npm instalados:

1 - Clone o repositório do projeto:

```bash
$ git clone https://github.com/seu-usuario/upSmart.Ai
```

2 - Acesse a pasta do projeto:

```bash
$ cd upSmart.Ai
```

3 - Instale as dependências necessárias:

```bash
$ npm install
```

4 - Execute as migrações de banco de dados:

```bash
$ npx prisma migrate dev
```

5 - Inicie o servidor localmente:

```bash
$ npm run dev
```

⚠️ Importante: Crie um arquivo .env seguindo o modelo de .env.example. Insira sua chave de API da OpenAI no campo OPENAI_KEY. Configure também o campo DATABASE_URL com o banco de dados que deseja utilizar.

Feito com ☕ by Eliton Dioni 👋🏾

<div style="display: flex;"> 
  <a href="[https://www.linkedin.com/in/seu-linkedin](https://www.linkedin.com/in/eliton-dioni/)" target="_blank">
    <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-right: 2vw" target="_blank">
  </a> 
  <a href="mailto:elitondioni.silva@gmail.com">
    <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" style="margin-right: 2vw" target="_blank">
  </a> 
  <a href="http://discordapp.com/users/eliton2802" target="_blank">
    <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" style="margin-right: 2vw" target="_blank">
  </a> 
  <a href="https://www.instagram.com/eliton_dioni/" target="_blank">
    <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank">
  </a>
</div>
