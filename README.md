# Minha Aplicação CRUD em ReactJS

Bem-vindo ao repositório da minha aplicação CRUD desenvolvida em ReactJS! Esta aplicação foi criada para demonstrar minhas habilidades em React e o uso de tecnologias modernas para criar uma experiência web dinâmica.

## Sobre o Projeto

Este projeto é uma ferramenta web que permite realizar operações básicas de criação, leitura, atualização e exclusão (CRUD) de dados. Com ela, você pode adicionar novos itens, visualizar informações existentes, editar detalhes e excluir registros, tudo de forma intuitiva e responsiva.

## Funcionalidades

- Adicionar novos itens
- Visualizar detalhes dos itens
- Editar informações dos itens
- Excluir itens

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construir interfaces de usuário
- Axios: Cliente HTTP para fazer requisições ao servidor
- Tanstack Query: Biblioteca para gerenciamento de estados em aplicações React
- React Hook Form: É uma lib de gerenciamento de formulários que controla os dados dos componentes utilizando o conceito de REF de forma que não depende do estado do componente.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `src/components/`: Componentes da aplicação, incluindo o "Card", "Form", "Header", "Loading" e o "Update".
- `src/page/`: Componentes da aplicação, incluindo a "Home.
- `src/utils/`: Utilitários e arquivos de configuração, como a API, Mutations, Query e o ProviderQuery.
- `src/`: App.js o index.js e o arquivo Router.js, e os CSS App.css e index.css

## Como Executar

1. Clone este repositório.
2. Instale as dependências utilizando o comando `npm install`.
3. Inicie a aplicação com `npm start`.
4. Acesse a aplicação em seu navegador no endereço `http://localhost:3000`.

## Instalação do JSON Server:

1. Primeiro, você precisa instalar o JSON Server.
Isso pode ser feito usando o npm (Node Package Manager), que geralmente é instalado junto com o Node.js. Abra o terminal e execute o seguinte comando:

Copy code

`npm install json-server -D`

O -D ira instalar apenas em ambiente de desenvolvimento.
Este comando instalará o JSON Server em seu projeto ReactJS.

## Criando um arquivo JSON com seus dados:

2. Agora, você precisa criar um arquivo JSON que servirá como seu banco de dados simulado. Este arquivo conterá os dados que você deseja acessar e manipular em seu aplicativo ReactJS. Por exemplo, você pode criar um arquivo chamado db.json e adicionar alguns dados a ele:

### json

Copy code

````
```

{
  "posts": [
    { "id": 1, "title": "Hello World", "body": "This is my first post!" },
    { "id": 2, "title": "React is awesome", "body": "I love working with React!" }
  ]
}

```
````

Salve este arquivo na raiz do seu projeto ReactJS.

## Iniciando o servidor JSON:

3. Agora que você tem seu arquivo JSON pronto, você pode iniciar o JSON Server. Abra o terminal na pasta onde está localizado o seu arquivo db.json e execute o seguinte comando:

Copy code

`json-server --watch db.json --port 3001`

Isso iniciará o servidor JSON e disponibilizará seus dados em uma API RESTful em http://localhost:3001. O parâmetro --watch observa qualquer alteração no arquivo db.json e atualiza automaticamente os dados do servidor.

## Acessando os dados no seu aplicativo ReactJS:

4. Agora que o servidor JSON está em execução, você pode acessar os dados em seu aplicativo ReactJS usando solicitações HTTP. Por exemplo, você pode usar a biblioteca Axios para fazer solicitações GET, POST, PUT e DELETE para o servidor JSON e manipular os dados conforme necessário em seu aplicativo ReactJS.

Por exemplo, para fazer uma solicitação GET para obter todos os posts, você pode fazer algo assim em seu componente React:

### javascript

Copy code

````
```

import axios from 'axios';

axios.get('http://localhost:3001/posts')
  .then(response => {
    console.log(response.data); // Aqui você terá acesso aos dados dos posts
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });

```
````

### Lembre-se de substituir http://localhost:3001 pelo URL do seu servidor JSON, se for diferente.


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue se encontrar algum problema ou para enviar um pull request com melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

