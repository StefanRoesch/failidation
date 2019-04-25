# Setup

```
yarn
docker-compose up -d # start postgres
docker-compose up -d # run migrations
docker-compose run flyway -url=jdbc:postgresql://db:5432/compup -user=dbuser -password=password migrate
```
