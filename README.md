> ACESSE O REPOSITÓRIO DA DASHGEN EM: [https://github.com/giapsunb/DashGen](https://github.com/giapsunb/DashGen)

## Tabela de conteúdo:

1. [Informações Básicas](#informações-básicas)
1. [Criando o ambiente de Desenvolvimento](#criando-o-ambiente-de-desenvolvimento)
   1. [Build Backend](#build-backend)
   1. [Build Frontend](#build-frontend)
   1. [Boas práticas](#boas-práticas)
1. [Versionamento](#versionamento)
1. [Pesquisadores Responsáveis](#pesquisadores-responsáveis)
1. [Licença](#licença)

## Informações Básicas

> Projeto - GIAPS (MS/CIC/EST)

## Criando o ambiente de Desenvolvimento

A DashGen contém duas aplicações. O [backend](#build-backend) construído em python3 e o [frontend](#build-frontend) em React.

### Build Backend

> Para executar o backend você precisa de:

- [Python3](https://www.python.org/download/releases/3.0/)
- [venv](https://docs.python.org/3/library/venv.html)

Clone o backend

```sh
git clone --branch develop https://github.com/giapsunb/DashGen/ backend-dashgen
```

O primeiro passo é criar um ambiente virtual (_venv_). Com a _venv_ a aplicação terá um ambiente isolado para instalar as dependências do projeto

Entre na pasta do projeto

```sh
cd backend-dashgen
```

Criando a _venv_

```sh
python3 -m venv venv
```

Ativando a venv

```sh
source venv/bin/activate
```

Atualizando o pip

```sh
python -m pip install --upgrade pip
```

Instale as dependências

```sh
pip install -r requirements.txt
```

Rodando servidor de desenvolvimento

```sh
export FLASK_APP=src.main && export FLASK_ENV=development
```

Por fim, execute a aplicação

```sh
flask run
```

Pronto! A aplicação frontend está em execução, por padrão a aplicação está disponível na porta _5000_

**[⬆ Voltar para o topo](#tabela-de-conteúdo)**

### Build Frontend

> Para executar o frontend você precisa de:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com)

Clone repositório do frontend

```sh
git clone --branch dashgen-ui https://github.com/giapsunb/DashGen/ frontend-dashgen
```

Entre na pasta do projeto

```sh
cd frontend-dashgen
```

Instale as dependências

```sh
yarn install
```

Por fim, execute a aplicação

```sh
yarn start
```

Pronto! A aplicação frontend está em execução, por padrão a aplicação está disponível na porta _3000_

Instale as dependências

```sh
export REACT_APP_API_URL=http://localhost:5000
```

Por padrão a aplicação frontend espera que o backend esteja disponível na porta _5000_, para alterar este cenário basta configurar a variável de ambiente REACT_APP_API_URL

```sh
export REACT_APP_API_URL=http://localhost:5000
# Agora a aplicação vai procurar pelo pelo backend nesta URL
```

### Boas práticas

Seguimos algumas práticas para manter um padrão no código do projeto .

1 - No seu editor instale a extensão do [editorconfig](https://editorconfig.org/). Com o editorconfig o seu editor vai automaticamente seguir o padrão de formato de arquivo do _coding styles_ do projeto.

**[⬆ Voltar para o topo](#tabela-de-conteúdo)**

## Versionamento

Nós usamos [Semantic Versioning](http://semver.org/) para versionamento. Para mais versões disponíveis, veja [Versões](https://github.com/giapsunb/DashGen/tags).

## Pesquisadores Responsáveis

- [Flávio Vidal (CIC/UnB)](https://github.com/fbvidal)
- [Hudson dos Santos](https://github.com/hdusantos)
- [Davi Dupin](https://github.com/DaviDupin)
- [Higor Santos](https://github.com/HigorSantosCIC)

## Licença

Este projeto está licenciado sob a licença GPLv3 - consulte o arquivo [LICENSE](https://github.com/giapsunb/DashGen/blob/develop/LICENSE) para obter detalhes.

**[⬆ Voltar para o topo](#tabela-de-conteúdo)**
