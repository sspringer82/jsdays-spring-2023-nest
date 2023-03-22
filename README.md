# Hallo Nest

1. Setup

`npm i -g @nestjs/cli` 
`nest new my-fancy-app`
`cd my-fancy-app`
Für die Entwicklung: `npm run start:dev`
`npm start`

2. Database
`npm install @nestjs/typeorm typeorm sql.js`
- TypeORMModule.forRoot im App Module
- TypeORMModule.forFeature im Feature Module
- Entity erzeugen
- InjectRepository im Service

3. Authentifizierung
`npm i @nestjs/jwt @nestjs/passport passport passport-jwt passport-local`
`npm i -D @types/passport-jwt @types/passport-local`


# Links
- https://nestjs.com
- https://prettier.io/
- https://eslint.org/
- Swagger: https://docs.nestjs.com/openapi/introduction
