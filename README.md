# Samuel Vieira - Desafio técnico Diário Associado

<h1>Para inicializar o projeto , abra o terminal no diretório desejado e cole os seguintes comandos:</h1>

```
git clone https://github.com/samuel-vieira-dev/diarios-associados.git
```

```
cd diarios-associados/client
```

```
yarn install
```

```
yarn start
```

<h1>Depois disso a aplicação em <b>React</b> vai abrir. Logo após, abra outro terminal e cole os seguintes comandos:</h1>

```
cd diarios-associados/server
```

```
python -m venv .venv
```

```
.venv/Scripts/Activate
```

```
pip install -r requirements.txt
```

```
python app.py
```

<h3>Rotas criadas</h3>

# Coleção para utilizar no Postman disponibilizada
```
Nome do arquivo: Routes.postman_collection.json
```

POST - http://127.0.0.1:5000/register JSON: { "username":"teste", "password":"teste" }
POST - http://127.0.0.1:5000/login JSON: { "username":"teste", "password":"teste" }
GET - http://127.0.0.1:5000/@me Exibe sessão atual do usuário logado (cookies server-side)
POST - http://127.0.0.1:5000/logout Faz logout da sessão do usuário logado
POST - http://127.0.0.1:5000/create-post JSON: { "title":"Título da Publicação", "hour":"23:58", "thumbnail":"caminho da imagem aws/drive" }
GET - http://127.0.0.1:5000/feed Exibe os posts de todos os usuários