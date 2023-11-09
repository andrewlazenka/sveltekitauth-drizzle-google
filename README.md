# sveltekitauth-drizzle-google

Reproduction repo

## Install

```bash
npm i

# copy & fill out details
cp .env.example .env
cp wrangler.example.toml wrangler.toml

npm run drizzle:generate
npm run drizzle:up
npm run db:migrate

# opens at http://localhost:8788
npm run watch
```

## Error Repro Steps

1. Sign in
2. Session is established, user + associated records written to DB
3. Sign out
4. Sign in
5. Error screen + message in console

```
OAuthAccountNotLinked: Another account already exists with the same e-mail address
```
