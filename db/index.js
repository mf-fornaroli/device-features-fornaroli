import * as SQLite  from 'expo-sqlite';

const db = SQLite.openDatabase('empresas.db');

export const init = () => {
 const promise = new Promise((resolve, reject) => {
  //4 parametros: 1. la instrucción, 2. las variables que se pasan a la instrucción, 3. función callback resolve, 4. funcion callback reject
  db.transaction((tx) => {
   tx.executeSql('CREATE TABLE IF NOT EXISTS empresas (id INTEGER PRIMARY KEY NOT NULL,   razonSocial TEXT NOT null, Cuit TEXT NOT null, ubicacion TEXT not null, telefono TEXT NOT NULL, email TEXT NOT NULL, artContratada TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)',
    [],
    () => { resolve() },
    (_, err) => { reject(err) })
  })
 })
 return promise;
};

export const insertAddress = (
 razonSocial,
 cuit,
 ubicacion,
 telefono,
 email,
 artContratada,
 lat,
 lng
) => {
 const promise = new Promise((resolve, reject) => {
  db.transaction((tx) => {
   tx.executeSql('INSERT INTO empresas (razonSocial, cuit, ubicacion, telefono, email, artContratada, lat, lng) VALUES (?,?,?,?,?,?,?,?)',
    [razonSocial, cuit, ubicacion, telefono, email, artContratada, lat, lng],
    (_, result) => resolve(result),
    (_, err) => reject(err)
   )
  })
 })
 return promise;
};