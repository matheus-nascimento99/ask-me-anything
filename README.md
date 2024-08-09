# Ask Me Anything

**Ask Me Anything** é uma aplicação full-stack que permite a criação e gestão de salas de perguntas sobre temas variados. Desenvolvida no curso de GO + React da Rocketseat, a aplicação combina tecnologias modernas para uma experiência de usuário interativa e em tempo real.

## Funcionalidades

- **Criação e gestão de salas de perguntas:** Permite criar salas e enviar perguntas.
- **Atualizações em tempo real:** Utiliza WebSockets para garantir que todos os participantes vejam atualizações instantaneamente (novas perguntas, curtidas, respostas, etc.).
- **Sistema de perguntas e respostas:** Usuários podem fazer perguntas, responder e curtir perguntas.

## Tecnologias Utilizadas

### Frontend

- **React:** Biblioteca JavaScript para criar interfaces de usuário.
- **React Query:** Gerenciamento de estado e requisições de dados.
- **React Router DOM:** Gerenciamento de roteamento e navegação entre páginas.
- **Sonner:** Exibição de mensagens de feedback (toasts).
- **Lucide React:** Biblioteca de ícones para uma interface mais intuitiva.

### Backend

- **Golang (Go):** Linguagem de programação para criar a API e a lógica de backend.
- **WebSocket:** Comunicação em tempo real entre cliente e servidor.

### Banco de Dados

- **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional para persistência de dados.

### Orquestração

- **Docker e Docker Compose:** Utilizados para a criação e gerenciamento de containers, facilitando o desenvolvimento e a implantação.

## Instalação e Configuração

### Pré-requisitos

- **Docker:** Certifique-se de que o Docker e o Docker Compose estão instalados na sua máquina.
- **Go:** Certifique-se de que o Go está instalado para rodar o backend.

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/ask-me-anything.git
   cd ask-me-anything
  ```
# Configuração do Projeto

Este documento fornece as instruções para configurar e iniciar o projeto **Ask Me Anything**. Siga os passos abaixo para iniciar o backend, subir os containers e configurar o frontend.

## Inicie o Backend

1. Navegue até o diretório raiz do projeto.

2. Inicie o backend com o seguinte comando:

   `go run ./cmd/wsrs/main.go`

   Isso iniciará o servidor backend. Certifique-se de que todas as dependências do Go estão instaladas e que o servidor está funcionando corretamente.

## Suba os Containers

1. Abra um novo terminal e navegue até o diretório do projeto.

2. Suba os containers usando o comando:

   `docker-compose up`

   Este comando usará o arquivo `docker-compose.yml` para configurar e iniciar os containers, incluindo o banco de dados PostgreSQL e outros serviços necessários.

## Configuração do Frontend

1. Navegue até o diretório do frontend.

2. Instale as dependências do projeto frontend executando:

   `npm install`

3. Inicie o frontend com o comando:

   `npm run dev`

   Isso iniciará o servidor de desenvolvimento para o frontend.

## Acesse a Aplicação

Abra seu navegador e vá para [http://localhost:3000](http://localhost:3000) para acessar a aplicação.

---

Se você encontrar problemas ou precisar de assistência adicional, consulte o [README.md](./README.md) ou abra uma issue no repositório.
