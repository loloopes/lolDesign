# Desafio LolDesign app para calcular precos de ligacoes

Essa e uma aplicacao simples contendo `JavaScript`, `ReactJS` e `NodeJS + express`.

O BackEnd possui apenas um endpoint, `POST em http://localhost:3001/calculator` que recebe as informacoes das ligacoes e calcula o preco com ou sem o plano.

O FrontEnd, que vai rodar em `http://localhost:3000/calculator`, consiste de duas tabelas (ligacoes e resultados) e um form onde sao preenchidas as informacoes das ligacoes.



 ```bash
    |___telzir-backend
    |   |_controller        => Camada responsavel por receber a requisicao, e enviar os dados ao service
    |   |_middleware        => diretorio onde se encontra o middleware que lida com possiveis falhas
    |   |_server            => diretorio onde se encontra o servidor
    |   |_service           => Camada responsavel pelo processamento de dados advindos do controller
    |___telzir-frontend
    |   |_public            => Diretorio onde se encontra o index.html, pagina do react
    |   |_src
    |       |_components    => Diretorio onde se encontra os componentes da aplicacao frontend
    |       |_images        => Diretorio onde se encontram as imagens do projeto
    |       |_pages         => Diretorio onde se encontram as paginas da aplicaco 
    |       |_service       => Diretorio onde se encontra os dados como os planos disponiveis e lista telefonica
    |       |_tests         => Diretorio onde se encontram os testes automatizados da app frontend
 ```

## Requerimentos

- npm ^8.1.0
- node ^16.13.0
- docker ^20.10.7 (opcional)
- docker-compose ^1.25.5 (opcional)

## Rodando o Aplicativo

### Docker Compose 

Rode o comando na raiz do projeto:

```bash
docker-compose up
```
Apos entrar com docker-compose up a aplicacao vai estar no ar e pronta para uso em `http://localhost:3000/calculator`.

### Rodando sem o Docker Compose

Instale as dependencias tanto no diretorio front-end quanto back-end, para isso entre os seguintes comandos:

```bash
cd telzir-backend
npm install

cd front-end
npm install
```
Apos instaladas as dependencias voce devera rodar `npm start` tanto no diretorio back-end quanto front-end para que o aplicativo funcione na sua totalidade.

Depois de iniciado a aplicacao esta pronta para uso em `http://localhost:3000/calculator`.