import { Sequelize } from "sequelize";

const db = new Sequelize('neurona_platform', 'root', 'contra1234', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;