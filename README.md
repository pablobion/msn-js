<h1 align="center">Windows Live Messenger (MSN) JS 💬</h1>


<h3 align="center" justify="center">🔎&nbsp;&nbsp;&nbsp;A antiga rede de relacionamentos do windows.</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/pablobion/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Pablo%20Bion-%23FF9000">
  </a>
</p>


<img  src="preview-github/desktop-phone.png" alt="preview">

&nbsp;
&nbsp;
&nbsp;
### Demo: [Clique Aqui](https://msn-js.vercel.app/)
&nbsp;
&nbsp;
&nbsp;

## 📽 Sobre o projeto

Projeto WEB responsivo para reproduzir o windows live messenger em web.
O Windows live Messenger foi um dos mensageiro mais famosos da internet, que foi descontinuado em 15 de março de 2013.

O MSN foi o mais usado no mundo com mais de 230 milhões de usuários. No Brasil, o serviço atingiu mais de 75% dos usuários da internet, que significava mais de 34 milhões de usuários no país.

Este projeto foi feito para relembrar o mensageiro e matar um pouco da saudade.

Ele foi feito com reactJS, node e socket.io.

#### Funcionalidades
- [X] Acesso ao msn
- [X] Conversar com outras pessoas
- [X] Mostrar janelinha ao ficar online
- [X] Mostre o que você está ouvindo no spotify (New!)
- [X] Mudar subnick, Status, avatar
- [X] Mudar tema
- [X] Chamar atenção
- [X] Multi Chats
- [X] Msn sounds
- [X] Aumentar e mover a janela de chat
- [X] Troque de idioma
- [X] Winks 
- [X] Emoticons



## 🚀 Tecnologias

Tecnologias que usei para desenvolver esse projeto no front-end

- [ReactJS](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [React icons](https://react-icons.github.io/react-icons/)
- [React Hook Form](https://react-hook-form.com/)
- [Socket.io](https://socket.io/)
- [react-notification-system](https://www.npmjs.com/package/react-notification-system)
- [interactjs](https://interactjs.io/)



## 💻 Como começar 


**Clonando repositório**

```bash
$ git clone https://github.com/pablobion/msn-js
 && cd msn-js
```

**Instalando as dependências**

```bash
$ cd backend && yarn

$ cd frontend && yarn
```



**Iniciando**

Configurando ips.
 <details>
 Há duas parametrizações a serem consideradas, é necessário mudar o ip nas configurações do frontend e backend.
 
Frontend/src/configs/config_connections.js
  Dentro desse arquivo terá o campo de colocar o ip, no caso é o ip do servidor, onde ele está hospedado.
  
Há também uma confiuração para fazer a sincronização com o spotify funcionar, para mostrar na lista de contatos a musica que está escutando
<details>


  Crie um app no spotify api
  https://developer.spotify.com/dashboard
  Ao criar o spotify irá fornecer duas chaves, client e secret.

  Também é necessário configurar o redirecionamento de url, colocando a url onde está hospedado seu servidor.
  Exemplo.
   
      http://localhost:80/routes/spotify/callback
      http://msn-js.herokuapp.com/routes/spotify/callback
    
  Feito isso, será necessário colocar o client_id e o client_secret no arquivo de configuração na pasta do backend
  
  Backend/configs/config.js
    Dentro desse arquivo terá o campo de colocar o ip, no caso é o ip do servidor, onde ele está hospedado. E informar as duas chaves.
  
</details>
  
  
 </details>


```bash

$ cd backend && yarn start

$ cd frontend && yarn start

```




---

Feito por Pablo Bion.

 &nbsp;[Veja meu linkedin](https://www.linkedin.com/in/pablobion/)


Agradecimentos ao @AndroidWG, samu obrigado pelos assets!

