# ds-final
112-2 distributed system final project

# database initialize
docker build -t postgres-db ./
docker run --name ds-final-psql -p 5432:5432 -d postgres-db

# To Start Backend
```
yarn server
```

# To Start Frontend
```
yarn start
```

# To migrate database
cd ./server
yarn migrate up