import { Sequelize } from "sequelize";

const globalForSequelize = global as unknown as {sequelize?: Sequelize};


const sequelize = globalForSequelize.sequelize?? new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        dialect: 'mysql',
        dialectModule: require('mysql2'),
        logging: process.env.NODE_ENV === 'development',
    }

);

if (process.env.NODE_ENV !== 'production') {
    globalForSequelize.sequelize = sequelize;
}

export default sequelize