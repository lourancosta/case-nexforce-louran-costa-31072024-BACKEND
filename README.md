# Case-NexForce-Louran-Costa-31072024 BACKEND

Este repositório destina-se a entrega do backend case NexForce.

O CRUD se refere a uma plataforma para cadastro e gerenciamento de parceiros, onde usuários poderão registar interesse se tornar um parceiro NexForce. Neste repositório encontra-se o código destinado ao ao back-end da aplicação.

---

## Banco de Dados

O banco de dados utilizado na aplicação é o MongoDB, para utilizado-lo em sua versão do projeto, crie um cluster chamado partners e em seguida adicione as seguintes variáveis de ambiente em seu projeto.

```
PORT=8000
MONGODB_URL=mongodb+srv://SEU_ENDERECO_APOS_CARACTER_@
MONGODB_USERNAME=SEU_USERNAME
MONGODB_PASSWOWRD=SUA_SENHA
```

Após a configuração, se tudo estiver correto, ao executar em modo de desenvolvimento ou não a mensagem "connected to mongodb!" será apresentada.

---

## Como executar em modo de desenvolvimento

Para executar em modo de desenvolvimento execute o comando:

```
npm run start:dev
```

Para executar a API basta executar:

```
npm run start
```

Abra o [http://localhost:8000/api/partners](http://localhost:8000/api/partners) no navegador para verificar o status da API em execução.

---
## Métodos API
A API da aplicação possui os métodos GET, POST, PATCH, DELETE onde:

Retorna todos os parceiros cadastrados
```
GET - http://localhost:8000/api/partners
```
Retorna informações do parceiro passado no parametro da requisição:
```
GET - http://localhost:8000/api/partners/ID_PARCEIRO
```

Registra um novo cadastro de parceiro:
```
POST - http://localhost:8000/api/partners

body:
 {
    "name": "COMPANY_NAME",
    "domain": "COMPANY_DOMAIN",
    "phone": "COMPANY_PHONE",
    "city": "COMPANY_CITY",
    "country": "COMPANY_COUNTRY"
 }

```
Atualiza o cadastro do parceiro passado no parametro da requisição:
```
PATCH - http://localhost:8000/api/partners/ID_PARCEIRO

body com informações atualizavéis:
 {
    "name": "COMPANY_NAME",
    "domain": "COMPANY_DOMAIN",
    "phone": "COMPANY_PHONE",
    "city": "COMPANY_CITY",
    "country": "COMPANY_COUNTRY"
 }

```
Deleta o parceiro passado no parametro da requisição:
```
DELETE - http://localhost:8000/api/partners/ID_PARCEIRO
```

---

## Script Python para Análise de Dados

O script tem como finalidade analisar e mostrar a quantidade parceiros por país, trazendo do que mais possui para o que menos possui.

Para executar o script é necessário ter o python instalado em seu ambiente. Após a instalação, acesse a pasta do script pelo terminal e digite o comando:

```
python3 data-analysis.py
```

Ao executar o comando, será mostrado no terminal o resultado da análise, por exemplo:

```
            name         country
0       NexForce          Brasil
1           Meta          Canada
2         Google  Estados Unidos
3        Netflix  Estados Unidos
4        HubSpot  Estados Unidos
5     SalesForce  Estados Unidos
6      Microsoft  Estados Unidos
7         Nubank          Brasil
8  Disney Europa          Franca

country
Estados Unidos    5
Brasil            2
Canada            1
Franca            1

```

Em seguida, será gerado no mesmo diretório, um arquivo REPORT.JSON com o resultado da análise.
