# Inicialização

## Instalação de Dependências

Para iniciar com o projeto após download/clone execute o seguinte comando para inicializá-lo
>Utilizadores do Yarn
```sh
yarn
```
>Utilizadores do NPM
```sh
npm -i
```
Esse comando irá fazer a instalação das dependências apontadas no arquivo `package.json`

# Informações de Configurações adicionais
## para o `git`

Configurações relacionadas à utilização do git no projeto

### `lint-staged`
Configurar o projeto para fazer validações ou testes e rodar o eslint para correção de padronização do código

```[JSON]
"husky": {
    "hooks":{
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged":{
    "*.{js,jsx,ts,tsx}":["eslint --fix", "git add"]
  },
```

Para configurar e executar os testes automatizados:

```[JSON]
"lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      **"cross-env CI=true yarn test --bail --findRelatedTests",**
      "git add"
    ]
  },
```

O item **cross-env** refere-se a uma dependência de desenvolvimento que permite rodar comandos em multiplataformas (Windows/Unix) sem precisar de configurar as especificidades de cada SO.

O parâmetro **--bail** faz com que os testes sejam interrompidos quando encontrar o primeiro erro.

O parâmetro **--findRelatedTests** permite executar somente os testes relacionados aos arquivos alterados no commit e que foram adicionados no stage do commit.

**Fonte:**
> https://youtu.be/-c57D2kQffQ

### `commitlint`
O `commitlint` verifica se a sua mensagem de commit atende à convensão de formatação do commit. ([conventional commit format](https://conventionalcommits.org)).

Comumente, os padrões seguem as seguintes definições:

```sh
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

No dia a dia os exemplos podem ser:

```
chore: run tests on travis ci
```

```
fix(server): send cors headers
```

```
feat(blog): add comment section
```

Tipos comuns de acordo com [commitlint-config-conventional (based on the the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum) podem ser:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

**Fonte:**
> https://youtu.be/erInHkjxkL8

### Extensão recomenda para o `VS Code`

Para auxiliar nessa formatação foi utilizado o plugin para o VSCode [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) que guia na construção da mensagem de commit.

<img src="https://github.com/vivaxy/vscode-conventional-commits/blob/master/assets/docs/demo.gif" />

## para o `eslint`

### `eslint import-helper`

O Import Helper auxilia na padronização dos imports da aplicação.

Por padrão foram consideradas as seguintes regras:
```[JSON]
newlinesBetween: 'always',  # sempre saltar uma linha para cada grupo
  groups: [
    '/^react/',     # sempre importa os modulos do react primeiro
    'module',       # importa demais modulos utilizados
    '/^@shared/',   # importa libs que começam com @
    '/^./',         # importa os arquivos dentro da pasta src (ver #babel-import)

    # ordem de importação dos arquivos locais src
    # 1 - import dos arquivos de pasta pai
    # 2 - import de arquivos visinhos da mesma pasta
    # 3 - import dos arquivos index
    ['parent', 'sibling', 'index'],
  ],

  # Ordenação alfabética e ignorar o Case sensitive
  alphabetize: { order: 'asc', ignoreCase: true }
```

Configurações se encontram no arquivo `.eslintrc.js`

# Aditional Informations
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
