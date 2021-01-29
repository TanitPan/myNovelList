# curly-octo-potato

## Installation

```bash
npm i
```

## Usage

Add configurations to `.env` file at the root of the project

```
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_HOST=localhost
MYSQL_DATABASE=sequelize
MYSQL_PORT=4000

JWT_SECRET=jwt_secret
PORT=3000
```

## Get Started

1. Start MySQL server

   ```bash
   docker-compose -f docker-compose.db.yml up
   ```

   _To stop_

   ```bash
   docker-compose -f docker-compose.db.yml down
   ```

2. Start Node server
   ```bash
   npm run dev
   ```

## Notes

To access to MySQL database from terminal

```bash
docker exec -it mysql bash
```

Once inside

```bash
mysql -uroot -ppassword
```
