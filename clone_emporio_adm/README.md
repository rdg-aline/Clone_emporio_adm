# Área administrativa_site empório 

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> 
</p>


## 💻 Sobre o projeto
8º projeto desenvolvido durante a trilha React JS do Campinas Teach Talenst 2020


## ⚙️ Funcionalidades
- [x] Administrador:
  - [x] Visualiza o número de produtos cadastrados e o número de usuários cadastrados (sendo estes: editor ou admin)
  - [x] Pode cadastrar, listar  e excluir qualquer usuário
  - [x] Pode cadastrar, listar  e excluir qualquer produtos
   

- [x] Editor:
  - [x] Visualiza o número de produtos cadastrados e o número de usuários cadastrados (sendo estes: editor ou admin)
  - [x] Pode cadastrar um produto


### 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta fake-api-emporio) 
2. Frontend (pasta clone_emporio_adm)

💡 Frontend  precisa que o Backend seja executado para funcionar.

## Pré-requisitos

Você vai precisar ter instalado em sua máquina as seguintes ferramentas:

-  *[Node.js](https://nodejs.org/en/)*
-  *[Git](https://git-scm.com)*



## 🧭 Rodando a aplicação 
#   Backend (servidor)
```bash

# Clone este repositório
$ git clone https://github.com/rdg-aline/Clone_emporio_adm.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd Backend\fake-api-emporio

# Instale as dependências
$ npm install

# Execute a aplicação
$ json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000
```


#  Frontend 
```bash

# Clone este repositório
$ git clone https://github.com/rdg-aline/Clone_emporio_adm.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd clone_emporio_adm

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm  start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

#  Seu primeriro acesso:

Em seu primeiro acesso, você deverá escolher um dos usuários abaixo para logar:

```bash
# administrador
 email: helen@facebook.com | senha: 123123

# editor
 email: mauricio@google.com | senha: 123123
```

## 🛠 Tecnologias

Ferramentas  usadas na construção do projeto:

-  **[React](https://reactjs.org/)**
-  **[TypeScript](https://www.typescriptlang.org/)**
-  **[React Icons](https://react-icons.github.io/react-icons/)**
-  **[Sass](https://sass-lang.com/)**
-  CSS
