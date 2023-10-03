import db from './db.js';
import jsonServer from 'json-server'

jsonServer
const server = jsonServer.create()
const router = jsonServer.router(db());
const middleware = jsonServer.defaults();

server.use(middleware)

server.use(router)

server.listen(3000,()=>console.log("server is running"))