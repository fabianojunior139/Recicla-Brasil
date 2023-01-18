 <h1 align="center">Recicla +Brasil ♻</h1>
 <p>Este sistema foi feito para apresentação do meu TCC na faculdade apresentado no dia 08 de Dezembro de 2022.</p>
 <p>Esta aplicação web tem como proposta mostrar para a comunidade, de forma prática e rápida, as empresas de reciclagem que compram materiais recicláveis que estão mais próximas do usuário logado</p>

## 🖥 Preview
https://youtu.be/lIMbT8WGJWU

## :heavy_check_mark: Features
- [x] Sistema de login
- [x] Cadastro, Lista, Edição e Exclusão de produtos 
- [x] Cadastro, Lista, Edição e Exclusão de 2 tipos de usuário (Empresa e Usuário Comum)
- [x] Cadastro, Lista, Edição e Exclusão de Endereço dos usuários
- [x] Proteção de rotas do back-end (Json Web Token)
- [x] Filtros de pesquisa: por nome do produto, por nome da empresa e por categoria


## ⚡ Tecnologias
<div align="center"> 
  <img alt="Fabiano-HTML" height="50" width="50" src="https://camo.githubusercontent.com/89a4f052af35af3ae91139b0da6496483e00d4fb645589fc4d26cf95b42f8454/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d706c61696e2d776f72646d61726b2e737667">
  <img alt="Fabiano-CSS" height="50" width="50" src="https://camo.githubusercontent.com/b3ce9472d369cacc72c37b7be98298b051836c138eada89587178fbd41939043/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d706c61696e2d776f72646d61726b2e737667">
  <img alt="Fabiano-Js" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img alt="Fabiano-Ts" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img alt="Fabiano-React" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img alt="Fabiano-PostreSQL" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
  <img alt="Fabiano-NODE" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
</div> 

## ⚙ Como rodar a aplicação? 

### 1° Passo - Criação do banco de dados
Basta acessar o arquivo que está na pasta abaixo, copiar todo o conteúdo e criar as tabelas utilizando o banco de dados <strong>PostgreSQL</strong>

> api/recicla_brasil.db
<br>

### 2° Passo - Inicializar a API
Existem várias formas de rodar a API, uma delas é utilizar 2 terminais do vscode dentro do mesmo projeto: um para rodar o back-end, e outro para rodar o front-end. Caso não saiba como utilizar vários terminais simultaneamente, basta clicar <a href="https://www.alura.com.br/artigos/como-utilizar-terminal-integrado-visual-studio-code#:~:text=Pela%20interface%20gr%C3%A1fica%3A,depois%20selecione%20o%20terminal%20desejado.">aqui</a>.

Abra o projeto na pasta recicla+brasil, depois entre na pasta api e digite o comando que faz a API iniciar, como no exemplo:
```ts
cd api    
yarn dev   
```
<br>

### 3° Passo - Inicializar o Front-end
Com a API rodando, abra outro terminal, depois basta entrar na pasta front-end e rodar o comando que faz o front-end inicializar, como no exemplo: 
```ts
cd frontend   
yarn dev
```
<br>

### 4° Passo - Abrir no navegador
Após iniciar a API e o Front-end, basta clicar no link segurando o ctrl (ou copiar e colar no seu navegador de preferência), geralmente o React disponibiliza o projeto na seguinte URL abaixo: 
```ts
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
<br>

## 📃 Documentação
No link a seguir está disponibilizado a documentação referente a este TCC, incluindo toda a modelagem do sistema e os diagramas que facilitaram o desenvolvimento desta aplicação web: https://drive.google.com/file/d/1rSybVQaKIiLLDGhSVx5f-kWpRyrBVll8/view?usp=sharing

