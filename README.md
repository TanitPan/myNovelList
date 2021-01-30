# curly-octo-potato

## Installation

```bash
npm i
```

## Usage

Add configurations to `.env` file at the root of the project

```
DB_USER=root
DB_PASSWORD=password
DB_HOST=localhost
DB_DATABASE=sequelize
DB_PORT=3306
DB_DIALECT=mysql

JWT_SECRET=jwt_secret
PORT=3000
```

## Get Started

1. Start MySQL server

   ```bash
   docker-compose up -d
   ```

   _To stop_

   ```bash
   docker-compose down
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
