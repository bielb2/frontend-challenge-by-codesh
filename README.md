# Pharma Inc

## How to run

```sh
# Clone this project
$ git clone https://github.com/bielb2/frontend-challenge-by-codesh

# Enter in folder
cd frontend-challenge-by-codesh

# Install all deps
npm install or yarn

# To run
npm run dev or yarn dev

# The app will start in <http://localhost:3000>
```

## Technologies

The main technologies used in the construction of this project:

<a href="https://vuejs.org/">
<img width="50" title="Vue" alt="Vue" src="https://camo.githubusercontent.com/c8f91d18976e27123643a926a2588b8d931a0292fd0b6532c3155379e8591629/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67">
</a> &#xa0; &#xa0;

<a href="https://eslint.org">
  <img  width="50" title="Eslint" alt="Eslint" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png">
</a> &#xa0; &#xa0;

<br>
<br>

# Front-End Challenge [pt-BR] ✅

Desafio concluído, especificações sobre conclusão e considerações finais logo abaixo.

## Introdução

Este é um desafio para testar seus conhecimentos de Front-end;

O objetivo é avaliar a sua forma de estruturação e autonomia em decisões para construir algo escalável utilizando um framework moderno javascript.

Você está livre para usar React.js ou Vue.js ou Angular 8+ no desenvolvimento da solução deste tech challenge.

[SPOILER] As instruções de entrega e apresentação do challenge estão no final deste Readme (=

### Instruções iniciais obrigatórias

- Utilizar o seu github pessoal para publicar o desafio. Confirme que a visibilidade do projeto é pública (não esqueça de colocar no readme a referência a este challenge);

## Case

A empresa Pharma Inc, está trabalhando em um projeto em colaboração com sua base de clientes para facilitar a gestão e visualização da informação dos seus pacientes de maneira simples e objetiva em um Dashboard onde podem listar, filtrar e expandir os dados disponíveis.
O seu objetivo nesse projeto, é trabalhar no desenvolvimento do Front end que consumirá a API da empresa Pharma Inc seguindo os requisitos propostos neste desafio.

## Recursos

1. Estudar a documentação da REST API: https://randomuser.me/documentation
2. Utilizar React.js ou Vue.js ou Angular 8+ para construir a solução do Challenge;
3. Utilizar Frameworks CSS ou estilo proprio, recomendamos alguns como:

   - Tailwind CSS: https://tailwindcss.com/
   - Material UI: https://material-ui.com/
   - Angular Material: https://material.angular.io/
   - Bootstrap: https://getbootstrap.com/
   - Bulma: https://bulma.io/

4. Trabalhar em um repositório em seu usuário ou utilizar o seu github pessoal (não esqueça de colocar no readme a referência a este challenge);

## Lista de Pacientes

A tela inicial do projeto será um lista de pacientes que deverá conter um buscador para facilitar filtrar todos os que são exibidos na lista, proposta:

![List users](assets/list.png)

Para obter os dados, utilizaremos a API do Random User:

- https://randomuser.me/api/

Exemplo da resposta:

```json
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Alea",
        "last": "Christoffersen"
      }
    }
  ],
  "info": {
    "seed": "2f10116f1799d353",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}
```

Além de realizar a request, devemos aplicar alguns filtros na API:

- O resultado da API deve ser armazenado em um estado global. (Pode ser utilizado Redux, Context, Vuex ou tecnologia equivalente do framework utilizado)
- Limitar cada requisição da página em 50 resultados para não sobrecarregar a API.
- Adicionar o parâmetro de paginação para controlar o `Loading more`

### Visualizar paciente

Na coluna de ações da tabela, existe o botão visualizar para expandir os dados dos pacientes. Seguir o modelo proposto:

![View user](assets/view.png)

Devemos exibir os seguintes campos do paciente: ✅

- Imagem ✅
- Nome completo ✅
- Email ✅
- Gênero ✅
- Data de nascimento ✅
- Telefone ✅
- Nacionalidade ✅
- Endereço ✅
- ID (Número de identificação) ✅
- URL para compartilhamento ✅

### URL para compartilhar paciente ✅

Ao acessar a aplicação diretamente por essa URL a aplicação deve abrir o modal com as informações do paciente.

- A URL deve conter o ID do paciente ❌
- Abrir o modal com as informações do paciente ao acessar a aplicação por essa URL

***NOTA: A API randomiza os pacientes, ou seja, o ID do link não é o mesmo após o próximo fetch.

## Extras

Além do desafio proposto com as duas telas, temos alguns diferenciais:

- **Diferencial 1** Adicionar um filtro por Gênero na tabela; ✅
- **Diferencial 2** Configurar o buscador para poder filtrar por nome e nacionalidade; ✅ ***NOTA: API não tem filtro por nome
- **Diferencial 3** Adicionar o paginador rota para facilitar compartilhar o link e manter a posição na lista; ✅
- **Diferencial 4** Escrever Unit Tests ou E2E Test na Lista de Pacientes. Escolher a melhor abordagem e biblioteca; ❌
- **Diferencial 5** Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps; ❌

## Readme do Repositório

- Deve conter o título do projeto ✅
- Uma descrição sobre o projeto em frase ✅
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas ✅
- Como instalar e usar o projeto (instruções) ✅
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore) ✅
- Se está usando github pessoal, referencie que é um challenge by coodesh ✅

## Finalização e Instruções para a Apresentação

Avisar sobre a finalização e enviar para correção.

1. Confira se você respondeu o Scorecard da Vaga que chegou no seu email;
2. Confira se você respondeu o Mapeamento Comportamental que chegou no seu email;
3. Acesse: [https://coodesh.com/challenges/review](https://coodesh.com/challenges/review);
4. Adicione o repositório com a sua solução;
5. Grave um vídeo, utilizando o botão na tela de solicitar revisão da Coodesh, com no máximo 5 minutos, com a apresentação do seu projeto. Foque em pontos obrigatórios e diferenciais quando for apresentar.
6. Adicione o link da apresentação do seu projeto no README.md.
7. Verifique se o Readme está bom e faça o commit final em seu repositório;
8. Confira a vaga desejada;
9. Envie e aguarde as instruções para seguir no processo. Sucesso e boa sorte. =)

## Suporte

Use a [nossa comunidade](https://coodesh.com/desenvolvedores#community) para tirar dúvidas sobre o processo ou envie um e-mail para contato@coodesh.com.
