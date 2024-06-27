
# Rank Currency
Uma pequena aplicação que lista criptomoedas e as salva em um banco de dados, que permite por meio de um sistema de voto, visualiza-las em um ranking de popularidade.

Funcionalidades
Sistema de rankiamento da favorita a menos favorita. 

## Stack utilizada

**Front-end:** ReactJs, chakra-ui.

**Back-end:** Python 3.11.4, MySql 8.0.34.









## Funcionalidades

- Clicando no botao voce adciona um voto a sua moeda favorita.
- Sistema de rankiamento da mais favorita para a menos favorita.


## Documentação da API


```http
 /cryptocurrencies
```

| Parâmetro   || Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `GET` || Para consultar todas as moedas |


```http
  /cryptocurrencies/id
```

| Parâmetro   || Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `POST`      ||Retorna somente uma moeda |

```http
 /criptocurrencies/vote/id
```

| Parâmetro   || Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `POST`      ||Adciona 1 voto na moeda que for selecionada |

```http
  /rankings
 ```

| Parâmetro   || Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `POST`      ||Retorna o ranking das moeda do maior para o menor |










# Variáveis de Ambiente


## Back-end

### Mysql connector 
https://dev.mysql.com/doc/connector-python/en/connector-python-installation-binary.html
```bash
$> pip install mysql-connector-python
```
### FlaskCors 
```bash
$> pip install flask-cors
```
https://flask-cors.readthedocs.io/en/latest/


### Flask 
```bash
$> pip install Flask
```
https://pypi.org/project/Flask/

## Front-end : 
```bash
$> npm install
```
### Disigner System 
```bash
$> npm i @chakra-ui/react
```
https://chakra-ui.com/getting-started

## Rodando localmente

- Clone o projeto

```bash
  git clone https://github.com/Maicon-MK/Rank3byNoxpay.git
```

- Entre no diretório do projeto

```bash
  cd Rank3
```
fronted
```bash
  cd frontend
```
Backend
```bash
  cd backend
```

- Instale as dependências

```bash
  npm install
```
```bash
  pip install mysql-connector-python
```
```bash
  pip install flask-cors
```

```bash
  npm i @chakra-ui/react
```
```bash
  npm i @chakra-ui/icons
```


## **Inicie o servidor**
  **Na pasta frontend**
```bash
  npm start
```
**Na pasta beckend**
```bash
  python __main__.py
```
- Para exporta o arquivo mysql:
 Abra o mysql > Conect  ao banco > Clique em **SERVER** > Data import > Selecione a pasta onde esta o arquivo mysql > start import.
 

## Tela de vote
 <img src='/readmimag/vote.jpg'/>

## Tela de ranking
 <img src='/readmimag/ranking.jpg'/>

