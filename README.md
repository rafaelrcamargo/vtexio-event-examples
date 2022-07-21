![icon](https://cdn-icons-png.flaticon.com/128/3658/3658773.png)

# README Template

Pequena descrição sobre o app e seus casos de uso.

## Importante!

Anotações importantes antes de seguir para a instalação do App.

## Instruções:

Instruções de uso do app e pontos importantes.

## Estrutura:

Estrutura para facilitar a navegação nos diretórios do app.

### Pastas:

```bash
- admin/
	- navigation.json
	- routes.json

- graphql/
	- types/
		- # ...
	- schema.graphql

- mdv2/
	- # Masterdata samples...

- messages/
	- en.json
	- es.json
	- pt.json

- node/
	- clients/
		- # Client methods...
	- middlewares/
		- # Middlewares for REST Api...
	- resolvers/
		- # Resolvers for GraphQL...
	- index.ts # Links, middlewares and resolvers
	- service.json # Routes and configs

- react/
	- components/
		- # ...
	- admin/
		- # Admin components...
	- store/
		- # Store components...
	- graphql/
		- # GraphQL queries and mutations...

- store/
	- interfaces.json
```

## Instalação no front-end:

A instalação deste app deve ser algo fluido e rápido de se fazer:

- Simplesmente adicione o app `avantivtexio.example@0.x` as peerDependencies do seu projeto.
- Execute no terminal o comando **vtex setup** para instalar o tipos.
  - `vtex setup`

...

## Usabilidade:

Importe o ...:

```ts
import { ... } from '...'
```

...

---

### **_Pronto, Seu app foi instalado com sucesso! :)_**

---

### TODOs:

- [x] ...

### Observações:

_Fique a vontade para fazer a melhoria que achar necessário, e considere abrir um pull request, para podermos ajudar a melhorar o app._
