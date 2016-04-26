import { Promise } from 'bluebird';
import fs from 'fs';
import path from 'path';

// QAoi9ft8PgQn(A

const Hapi = require('hapi');

export default async function () {
  try {
    const server = new Hapi.Server();
    const readdir = Promise.promisify(fs.readdir);
    const readfile = Promise.promisify(fs.readFile);
    Promise.promisifyAll(server);

    server.connection({
      port: 9003
    });

    // Register plugin
    let registers = [{
      register: require('hapi-async-handler')
    }]

    await server.registerAsync(registers);

    // Add route to server
    let routeFolders = await readdir('./routes');
    let routes = [];

    for (let folder of routeFolders) {
      let routes = require(path.resolve(__dirname, 'routes', folder)); 
      
      for (let route of routes) {
        await server.route(route)
      }
    }

    await server.startAsync();
    console.log('Server start at', server.info);
  } catch (e) {
    console.log(e.stack);
  }
}