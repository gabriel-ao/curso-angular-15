# MinhasFinancas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



executar o db.json
json-server --watch db.json

http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/profile



  

// Dashboard entradas, saidas e saldo

// cadastro de categorias {id, titulo, descricao } = CRUD tela de cadastro, atualizacao, listagem de categorias e exclusao

// entrada ou saida { id, descricao, tipo, valor, status { pago, pendente }}



## Criando serviço em sherad
ng g s shared/base/http-base


## Criando serviço dashboard
ng g s features/dashboard/service/dashboard



## Entradas
ng g m features/entradas --routing
ng g c features/entradas/components/list
ng g c features/entradas/components/formulario
ng g s features/entradas/service/entradas