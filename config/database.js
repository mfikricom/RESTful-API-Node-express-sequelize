// import sequelize
import { Sequelize } from "sequelize";

// create connection
const db = new Sequelize('sequelize_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// export connection
export default db;