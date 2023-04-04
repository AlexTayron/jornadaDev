# Clone TikTok

Este projeto foi criado pela equipe Ebac
Aqui iremos desenvolver um projeto fullStack utilizando react Js e Firebase


### - Iniciando 

Nosso projeto sera desenvolvido utilizando a ferramenta vscode

* Baixe o vscode
* https://code.visualstudio.com/

* baixe o Node
* https://nodejs.org/en/download


 -No vscode instale lagumas extensoes para auxiliar.

* HTML
* https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css

* JS
* https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets

* React 
* https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

## Criando o Projeto
* Abra o terminal e digite o comando 
* npx create-react-app ./
* npm start para iniciar o projeto

 - Instale o material UI React
* npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

## Integração Com Firebase

- Apos criar seu projeto no console do firebase
* Instale as depedencias
* npm install firebase

### Deploy no firebase
* npm install -g firebase-tools
* firebase login
- se der erro no windows use o seguinte comando
 *  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
apos a inserção do comando, digite S ou Y 
* firebase init
* digite S ou Y
* navegue ate Hosting : Configure files for firebase...
* selecione a opção com espaço e dê enter
* selecione a opção - Use an existing project
* Selecione o projeto TIKTOK
* Em diretorio , em frente (public). Escreva build
* Em seguida digite yes,e No
* Digite npm run build
- aguarde ate terminar o processo
* Digite firebase deploy


###https://tiktok-projeto-ebac.web.app/




