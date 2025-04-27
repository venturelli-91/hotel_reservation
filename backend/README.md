# Backend do Sistema de Reservas de Hotel

## Scripts de Teste

O projeto inclui scripts para testar a conexão com o banco de dados:

### 1. Teste de Conexão Básica

O script `test-connection.ts` realiza um teste básico de conexão ao PostgreSQL:

```bash
npx ts-node test-connection.ts
```

Este teste verifica se é possível estabelecer uma conexão com o banco de dados PostgreSQL e mostra informações básicas como versão e nome do banco.

### 2. Teste de Modelos e Tabelas

O script `test-db-models.ts` verifica a estrutura do banco de dados:

```bash
npx ts-node test-db-models.ts
```

Este teste:

- Verifica se a conexão está funcionando
- Lista todas as tabelas existentes no banco
- Verifica se existem suítes cadastradas e mostra um exemplo

## Configuração do Banco de Dados

A configuração do banco de dados está definida em `db.ts` e utiliza as seguintes variáveis de ambiente:

- `DB_HOST`: Hostname do servidor PostgreSQL (padrão: "localhost")
- `DB_PORT`: Porta do servidor PostgreSQL (padrão: 5432)
- `DB_USER`: Nome de usuário PostgreSQL (padrão: "postgres")
- `DB_PASSWORD`: Senha do PostgreSQL
- `DB_NAME`: Nome do banco de dados (padrão: "reservations")

## Executando o Servidor

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

## Problemas Comuns

Se encontrar problemas de conexão:

1. Verifique se o serviço PostgreSQL está em execução
2. Confirme se as credenciais no arquivo `.env` estão corretas
3. Verifique se o banco de dados "reservations" existe
4. Execute os scripts de teste para diagnóstico
