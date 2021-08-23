module.exports = {
    port:8081,
    db:{
        database: process.env.DB_NAME || 'Vacuum',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options:{
            dialect: process.env.DIALEC || 'sqlite',
            storage: './Vacuum-db.sqlite'
        },
    },
    authentication:{
        jwtSecret: 'nodejs vuejs'
    }
}