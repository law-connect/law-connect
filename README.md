# Law Connect

### Executando o projeto para desenvolvimento

**Configurar banco de desenvolvimento (PostgreSQL).** Pode ser utilizado o `docker-compose` presente no projeto.

```
docker compose up -d
```

**Configurar as variáveis de ambiente.** Clonar o `.env.example` para `.env` e ajustar o que for necessário.

```
cp .env.example .env
```

**Instalar as dependências:**

```
npm i
```

**Inicializar o banco de dados.**
Migrations:
```
npx prisma migrate dev
```
Seed:
```
npx prisma db seed
```

**Executar o projeto:**

```
npm run dev
```


**Credenciais para desenvolvimento:**
OAB: `12345`
Senha: `12345`
