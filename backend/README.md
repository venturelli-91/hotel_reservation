# Backend do Sistema de Reservas

Versão simplificada com foco apenas no funcionamento do banco de dados.

## Pré-requisitos

- Node.js
- PostgreSQL

## Configuração

1. Instale as dependências:

   ```
   npm install
   ```

2. Configure as variáveis de ambiente:

   - Renomeie o arquivo `.env.example` para `.env`
   - Atualize as variáveis conforme sua configuração do PostgreSQL

3. Teste a conexão com o banco de dados:
   ```
   npm run setup
   ```

## Execução

Para iniciar o servidor:

```
npm run dev
```

## API Endpoint

- `POST /api/reservations` - Criar uma nova reserva
