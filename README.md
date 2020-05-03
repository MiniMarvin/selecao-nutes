# Seleção Nutes  
Esse é um webapp construído para a seleção do Núcleo de Telemedicina da UFPE(NUTES). Se trata de uma aplicação simples de gerenciamento de contas de usuários, onde é possível realizar operações de CRUD sobre usuários com uma interface simplificada. O estilo de design escolhido é o Material Design e são aplicados conceitos para tornar a aplicação responsiva. 

## Tecnologias
### Frontend
Para o desenvolvimento da interface gráfica foi utilizado angular para gerenciar os componentes conforme os requisitos definidos no projeto. Os frameworks de Angular utilizados foram:
 - **Angular**: framework para desenvolvimento da solução de forma acelerada
 - **Material Angular**: implementações simplificadas do material design e de seus componentes
 - **Angular Router**: router para garantir que a aplicação seria uma SPA(Single Page Aplication), evitando o comportamento de carregamento em transições de página
 - **HttpClient**: implementação para realizar requisições rest  
  
O mecanismo utilizado para comunicação do webapp com a API REST foi o mecanismo de polling, o que permite o funcionamento da interface gráfica com um comportamento relativamente reativo, embora cause uma grande sobrecarga de rede, o que teria como uma feature a ser desenvolvida futuramente a implementacão de um websocket para reduzir essa carga de rede e bateria nos dispositivos.  
  
### API REST
Para a construção da API REST foram utilizadas as seguintes tecnologias:  
 - **Java**: a linguagem de programação utilizada para construir o backend
 - **Spring Boot**: framework utilizado para disponibilizar as rotas REST.
 - **Spring JPA**: framework utilizado para se comunicar com o banco de dados através de um módulo do Hibernate 
 - **Spring Security**: para proteger as rotas de user com um token de autenticação

## Features e projetos futuros
As features aqui discutidas são parte do escopo planejado do desenvolvimento do projeto, constando com as atividades que deveriam ser realizadas e as que estavam planejadas para desenvolvimento caso mais tempo fosse disponibilizado:
 - [x] API REST para os usuários
 - [x] Adicionar uma validação na API
 - [ ] Criação de contas com senhas e roles
 - [x] Interface de visualização de usuários
 - [x] Criar usuário na interface gráfica
 - [x] Deletar usuário na interface gráfica
 - [x] Atualizar usuário na interface gráfica
 - [ ] Filtrar a lista de usuários na tela principal
 - [ ] Adicionar uma tela de login

## Informações extras do desenvolvedor  
Minha maior experiência não é como desenvolvedor Java ou desenvolvedor Angular e sim como desenvolvedor mobile, na realidade nunca havia utilizado o Java para desenvolvimento web, também não utilizava angular, o framework de desenvolvimento web que costumava utilizar para o backend era o express do NodeJS e o de front o VueJS. Então acabei precisando aprender as tecnologias o que acabou prejudicando um pouco o deesenvolvimento do produto, mas foi muito divertido poder testar tecnologias que não utilizava, pois já havia utilizado VueJS e ReactJS anteriormente mas nunca angular e foi muito bom ter a experiência de sentir como o framework funciona.  
