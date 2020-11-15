## 시작하기 (yarn)

```
$ yarn
$ yarn dev
```

## 시작하기 (npm)
```
$ npm install
$ npm start dev
```

### package.json
기본적으로 Next + Apollo 를 사용하기 위한 초기세팅
```json
{
  "name": "with-typescript",
  "version": "1.0.0",
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "type-check": "tsc",
    "codegen": "graphql-codegen --config codegen.yml"
  },
  "dependencies": {
    "@apollo/client": "^3.2.5",
    "graphql": "^15.3.0",
    "next": "latest",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
  },
  "devDependencies": {
    "@graphql-codegen/cli": "1.18.0",
    "@graphql-codegen/fragment-matcher": "1.17.8",
    "@graphql-codegen/typescript": "1.17.11",
    "@graphql-codegen/typescript-operations": "1.17.8",
    "@graphql-codegen/typescript-react-apollo": "2.0.7",
    "@types/node": "^12.12.21",
    "@types/react": "^16.9.16",
    "@types/react-dom": "^16.9.4",
    "@typescript-eslint/eslint-plugin": "^4.5.0",
    "@typescript-eslint/parser": "^4.5.0",
    "babel-loader": "^8.1.0",
    "eslint": "^7.11.0",
    "eslint-config-prettier": "^6.14.0",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-react": "^7.21.5",
    "prettier": "^2.1.2",
    "typescript": "4.0"
  },
  "license": "MIT"
}

```