# Common setup

## Clone the repo and install the dependencies.

```sh
git clone https://github.com/olegs7/dashboard-server.git
cd dashboard-server
```

```sh
npm install
```

## Create a file .env

## Open .env and inject your credentials so it looks like this

PORT = 3000  
DB_CONN = 'your connection string to mongodb your application code'

## Create folders img-user and img-product

## To start the express server, run the following

```sh
npm run dev
```

Open http://localhost:3000 and take a look around.