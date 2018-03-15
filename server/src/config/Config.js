module.exports ={
    port:process.env.PORT || 8081,
    db:{
        database:proess.env.DB_NAME || 'example',
        database:proess.env.DB_USER || 'example',
        database:proess.env.DB_PASS || 'example',
    }
}