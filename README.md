# Configurações adicionais
## para o git

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

Fonte:
> https://youtu.be/-c57D2kQffQ
## para o eslint

# eslint import-helper

O Import Helper auxilia na padronização dos imports da aplicação.

Por padrão foram consideradas as seguintes regras:
```[JSON]
newlinesBetween: 'always',  # sempre saltar uma linha para cada grupo
  groups: [
    '/^react/',     # sempre importa os modulos do react primeiro
    'module',       # importa demais modulos utilizados
    '/^@shared/',   # importa libs que começam com @
    '/^~/',         # importa os arquivos dentro da pasta src (ver #babel-import)

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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
