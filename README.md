# E-commerce utilizando React & Redux

A proposta do projeto final do curso `AceleraDev - React` promovido [Codenation](https://www.codenation.dev/). Utilizando os conhecimentos ampliados no decorrer do curso, a proposta é construir um e-commerce todo em React e com gerenciamento de estado pelo Redux.

## Como utilizar

O projeto desenvolvido está no diretório [`/web`](https://github.com/thiagojacinto/aceleradev-react-redux-ecommerce/tree/master/web), então navegue no caminho após clonar este repositório e dê partida no servidor local, com npm ou yarn já que foi utilizado o [create-react-app](https://create-react-app.de) para gerir as configurações iniciais, digitando:

```
cd web
npm start
```
E então acessar diretamente pelo navegador de preferência o endereço http://localhost:3000.

## Objetivo

Como um profissional front-end, você será responsável por desenvolver as principais funcionalidades de um e-commerce de moda feminina, o RIO_NEGRO, garantindo a melhor experiência possível para os usuários interagirem com os produtos.

## Regras

- Deve implementar as funcionalidades apresentadas nos wireframes / layouts.
- Deve ser mobile first, possuindo uma experiência satisfatória tanto em mobile quanto em desktop.
- Deve consumir a API do catálogo de produtos.
- O estado global da aplicação deverá ser gerenciado com Redux
- Deve ser um SPA (Single Page Application).
- Todos os produtos da API devem ser exibidos.
- Utilize BEM CSS para escrever os estilos.
- Deve-se fazer deploy do projeto, servindo-o no Netlify.
- Não utilize frameworks CSS como Bootstrap, Foundation e afins.

## Requisitos

### Obrigatórios:
- Para cada item do catálogo de produtos as seguintes informações devem estar na página:

  - Imagem
  - Nome
  - Preço
  - Status “Em promoção”
  - Preço promocional (se disponível)
  - Tamanhos disponíveis
  - Selo “Promoção”
  - Deve ser possível adicionar itens por tamanho no carrinho de compras.

- Deve ser possível visualizar os itens adicionados no carrinho de compras, exibindo imagem, nome, preço e quantidade.
- Deve ser possível remover itens do carrinho de compras.

### Opcionais:
- O carrinho de compras deve persistir entre reloads de página.
- Alguns produtos não tem todos os tamanhos disponíveis, mostre apenas os tamanhos disponíveis em estoque.
- Implemente a funcionalidade de busca em tempo real.

## Deploy

Link para protótipo disponível online => https://rio-negro-store.netlify.app/

## Autor

> Thiago Jacinto
