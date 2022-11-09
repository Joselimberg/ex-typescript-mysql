
import express, { Application } from "express";
import userRoutes from "../routes/users";
import cors from "cors";

import db from "../db/connection";


class Server {


    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        // Métodos iniciales
        
        // Conexión a DB
        this.dbConnection();
        // Middlewares
        this.middlewares();
        // Definir rutas
        this.routes();
    }

    // Conectar base de datos
    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch ( error:any ) {
            throw new Error( error );
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.apiPaths.users, userRoutes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port } `);
        });
    }
}

export default Server;