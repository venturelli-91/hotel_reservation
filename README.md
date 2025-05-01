# Smart Hospitality Booking Platform - Pousada Encanto da Serra 🏨

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Flowbite](https://img.shields.io/badge/Flowbite-FFDD00?style=for-the-badge&logo=flowbite&logoColor=black)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
[![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://github.com/pmndrs/zustand)
[![Env Variables](https://img.shields.io/badge/Environment--Variables-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)](https://nextjs.org/docs/basic-features/environment-variables)
![CORS](https://img.shields.io/badge/CORS-000000?style=for-the-badge&logo=mozilla&logoColor=white)

## 📝 Descrição

Este projeto é um sistema completo de reservas para a Pousada Encanto da Serra, integrando um frontend moderno e responsivo com um backend robusto para processamento e armazenamento de dados. Os clientes podem fazer reservas através de um formulário intuitivo, e todas as informações são armazenadas em um banco de dados PostgreSQL.

O frontend foi desenvolvido com Next.js, React, TypeScript, Tailwind CSS e Flowbite, oferecendo uma interface atraente e responsiva. O backend utiliza Express, Sequelize e PostgreSQL para criar uma API RESTful que processa e armazena as reservas de forma segura e eficiente.

## ✨ Screenshots

<p>
  <img src="https://github.com/venturelli-91/hotel_reservation/raw/main/Prints-ReadME/hotel1_project.png" alt="Screenshot 1" width="32%" />
  <img src="https://github.com/venturelli-91/hotel_reservation/raw/main/Prints-ReadME/hotel2_project.png" alt="Screenshot 2" width="32%" />
  <img src="https://github.com/venturelli-91/hotel_reservation/raw/main/Prints-ReadME/hotel3_project.png" alt="Screenshot 3" width="32%" />
</p>
<p>
  <img src="https://github.com/venturelli-91/hotel_reservation/raw/main/Prints-ReadME/hotel4_project.png" alt="Screenshot 4" width="32%" />
  <img src="https://github.com/venturelli-91/hotel_reservation/raw/main/Prints-ReadME/hotel5_project.png" alt="Screenshot 5" width="32%" />
  <img src="https://github.com/venturelli-91/hotel_reservation/raw/main/Prints-ReadME/hotel6_project.png" alt="Screenshot 6" width="32%" />
</p>

## 🔍 Funcionalidades

### Frontend

- **Formulário de Reserva**: Interface intuitiva para os clientes preencherem suas informações
- **Validação de Dados**: Verificação em tempo real dos dados inseridos pelo usuário
- **Design Responsivo**: Experiência consistente em dispositivos móveis, tablets e desktops
- **Feedback Visual**: Mensagens de confirmação e erro para manter o usuário informado

### Backend

- **API RESTful**: Endpoints para criar, ler, atualizar e deletar reservas
- **Persistência de Dados**: Armazenamento seguro das informações no PostgreSQL
- **Validação de Dados**: Verificação das informações antes de salvar no banco
- **Configuração Flexível**: Facilmente adaptável a diferentes ambientes através de variáveis de ambiente

## 🛠️ Arquitetura

O sistema segue uma arquitetura cliente-servidor moderna:

```
Reservation_Hotel/
├── frontend/                # Aplicação Next.js/React
│   ├── public/              # Arquivos estáticos
│   ├── src/                 # Código-fonte do frontend
│   │   ├── components/      # Componentes React
│   │   ├── services/        # Serviços de comunicação com a API
│   │   ├── store/           # Gerenciamento de estado com Zustand
│   │   └── ...
├── backend/                 # Servidor Express
│   ├── models/              # Modelos Sequelize
│   └── ...
```

## 🚀 Tecnologias Utilizadas

### Frontend

<p>
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg" width="48" height="48" alt="Next.js" />
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="48" height="48" alt="React" />
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="48" height="48" alt="TypeScript" />
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="48" height="48" alt="Tailwind CSS" />
  <img src="https://flowbite.com/docs/images/logo.svg" width="48" height="48" alt="Flowbite" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="Context API" width="48" height="48"/>
</p>

### Backend

<p>
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg" width="48" height="48" alt="Express" />
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="48" height="48" alt="PostgreSQL" />
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="48" height="48" alt="Node.js" />
  <img src="https://sequelize.org/img/logo.svg" width="48" height="48" alt="Sequelize" />
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="48" height="48" alt="TypeScript" />
  <img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" width="48" height="48" alt="dotenv" />
  <img src="https://i.imgur.com/6WSYgYm.png" width="48" height="48" alt="CORS" />
</p>

## 🏃‍♂️ Como Executar o Projeto

### Pré-requisitos

- Node.js (v14+)
- PostgreSQL
- npm ou yarn

### Configuração do Banco de Dados

1. Instale o PostgreSQL
2. Crie um banco de dados chamado `reservations`
3. Configure as credenciais no arquivo `.env` do backend

### Backend

```bash
# Navegue até o diretório do backend
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env com as variáveis necessárias:
# - Conexão com o banco de dados
# - Outras configurações sensíveis
# NUNCA compartilhe ou exponha este arquivo publicamente

# Teste a conexão com o banco de dados
npm run setup

# Inicie o servidor
npm run dev
```

### Frontend

```bash
# Navegue até o diretório do frontend
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse o aplicativo em http://localhost:3000.

## 📊 API Endpoints

- **POST /api/reservations**: Criar uma nova reserva
- **GET /api/reservations**: Listar todas as reservas
- **GET /api/reservations/:id**: Obter detalhes de uma reserva específica

## 🔧 Modelo de Dados

```typescript
// Modelo de Reserva
interface Reservation {
	id: number;
	nomeCompleto: string;
	email: string;
	telefone: string;
	dataEntrada: string;
	dataSaida: string;
	qtdPessoas: number;
	createdAt: Date;
	updatedAt: Date;
}
```

## 🌟 Funcionalidades Futuras

- **Painel Administrativo**: Interface para gerenciar reservas
- **Autenticação**: Sistema de login para administradores
- **Notificações por Email**: Envio automático de confirmações
- **Calendário Visual**: Visualização das datas disponíveis
- **Sistema de Pagamento**: Integração com gateways de pagamento

## 👨‍💻 Contribuindo

Faça um fork deste repositório e sinta-se à vontade para contribuir com esse projeto incrível =D.

## 📬 Contato

- **Desenvolvedor**: Aurélio Venturelli
- **LinkedIn**: [Perfil LinkedIn](https://www.linkedin.com/in/aurelioventurelli/)
- **GitHub**: [Perfil GitHub](https://github.com/venturelli-91)

## 📜 Licença

Este projeto é licenciado sob a MIT License. Consulte o arquivo LICENSE para mais informações.
