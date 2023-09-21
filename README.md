## Overview

(following to be moved to a different section)

Keycloak >

- new realm: dev

  - Real settings > General > Display name: Development

- new client: website
  - Settings
    - Client ID, Name
    - Valid redirect URIs: http://localhost:5173/\* (without \)
    - Web origins: +

## Dev Setup

1. Docker containers:postgres, pgadmin, and keycloak (commands available under Containers section)

2. Keycloak Configuration:
   - login to Keycloak admin portal: ()

## Containers

### Run on local machine

```
docker network create raji-network
```

```
docker run -d --name postgres \
      -p 5432:5432 \
      -e POSTGRES_USER=admin \
      -e POSTGRES_PASSWORD=password \
      -e POSTGRES_DB=keycloak \
      -v v_postgres:/var/lib/postgresql/data \
      --network=raji-network \
      postgres:16.0
```

```
docker run -d --name pgadmin \
      -p 8082:80 \
      -e PGADMIN_DEFAULT_EMAIL=admin@admin.com \
      -e PGADMIN_DEFAULT_PASSWORD=password \
      -v v_pgadmin:/var/lib/pgadmin \
      --network=raji-network \
      dpage/pgadmin4:7.7
```

1. Navigate to pgadmin on localhost, http://localhost:8082/ and login (admin@admin.com & password)

2. Select 'Add New Server' on the home page
   - General > Name: raji
   - Connection > Host name/address: postgres (since both containers are on the same docker network `raji-network`)
   - Connection > Port: 5432
   - Connection > Maintenance database: postgres
   - Connection > Username: admin
   - Connection > Password: password

```
docker run -d --name keycloak \
      -p 8081:8080 \
      -e KEYCLOAK_ADMIN=admin \
      -e KEYCLOAK_ADMIN_PASSWORD=password \
      -e KC_DB=postgres \
      -e KC_DB_URL_HOST=postgres \
      -e KC_DB_URL_PORT=5432 \
      -e KC_DB_USERNAME=admin \
      -e KC_DB_PASSWORD=password \
      -e KC_DB_SCHEMA=public \
      --network=raji-network \
      quay.io/keycloak/keycloak:22.0.3 \
      start-dev
```
