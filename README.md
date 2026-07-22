# Lista de Contatos P3R

Aplicação criada com React, Vite, Redux Toolkit e styled-components para cadastrar, buscar, editar e remover contatos em uma interface com visual temático.

## Visão geral

O projeto permite:

- adicionar contatos com nome, e-mail e telefone;
- buscar contatos por nome, e-mail ou telefone;
- editar um contato diretamente na lista;
- remover contatos da base;

## Tecnologias

- React 19
- Vite
- Redux Toolkit
- React Redux
- styled-components

## Estrutura do projeto

```
src/
	App.jsx
	main.jsx
	styles.js
	components/
		ContactForm.jsx
		ContactForm.styles.js
		ContactList.jsx
		ContactList.styles.js
		ContactCard.jsx
		ContactCard.styles.js
		SearchBar.jsx
		SearchBar.styles.js
	store/
		contactSlice.js
		store.js
	utils/
		maskPhone.js
```

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Execute a verificação de lint:

```bash
npm run lint
```

Visualize o build localmente:

```bash
npm run preview
```

## Funcionalidades

### Cadastro de contatos

O formulário principal cria um novo contato com um identificador gerado a partir do horário atual.

### Busca

A busca filtra a lista em tempo real pelos campos nome, e-mail e telefone.

### Edição

Ao clicar em editar, o contato entra em modo de edição diretamente no card. A confirmação salva as alterações no Redux.

### Remoção

O botão de remover exclui o contato da lista imediatamente.

## Observações

- O layout e os estilos foram organizados por componente para facilitar manutenção e expansão.
