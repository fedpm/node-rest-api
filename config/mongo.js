const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log('** Conexion exitosa **')

    
    } catch (err) {
        console.log('** Error de conexion **'+err)
    }

};

module.exports = dbConnect