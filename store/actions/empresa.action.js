import {
 API_URL
} from "../../components/database";
import { insertAddress } from "../../db";
export const SELECT_EMPRESA = 'SELECT_EMPRESA';
export const ADD_EMPRESA = 'ADD_EMPRESA';
export const EDIT_EMPRESA = 'EDIT_EMPRESA';
export const REMOVE_EMPRESA = 'REMOVE_EMPRESA';

export const CONFIRM_EMPRESA = 'CONFIRM_EMPRESA';

export const ADD_EMPRESA_DB = ' ADD_EMPRESA_DB';

//seleccionar una empresa
export const selectEmpresa = (id) => ({
 type: SELECT_EMPRESA,
 idEmpresa: id
});

//agregar una empresa a la lista de empresas
export const addEmpresa = (empresa) => ({
 type: ADD_EMPRESA,
 empresa: empresa
});

export const removeEmpresa = (id) => ({
 type: REMOVE_EMPRESA,
 idEmpresa: id
});

export const confirmEmpresa = (payload) => {
 //sin thunk
 /*{
 type: CONFIRM_EMPRESA,
 payload
}*/

 //con thunk
 return async dispatch => {
  try {
   const response = await fetch(`${API_URL}/empresas.json`,
    {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify({
      idEmpresa,
      empresa: payload
     }),
    });
   
   const result = await response.json();
   //continuo el flujo redux llamando al dispatch con un objeto de acción
   dispatch({
    type: CONFIRM_EMPRESA
   })
  } catch (error) {
   console.log(error);
  }
 }
};

export const addEmpresaDb = (empresa) => {
 return async dispatch => {
  const result = await insertAddress(
   empresa.razonSocial,
   empresa.cuit,
   empresa.ubicación,
   empresa.telefono,
   empresa.email,
   empresa.artContratada,
   13.4,
   10.5
  );
  console.log('Resultado DB: ', result);

  dispatch({
   type: ADD_EMPRESA_DB, payload: {
    id: result.insertedId,
    razonSocial: empresa.razonSocial, 
    cuit : empresa.cuit,
    telefono: empresa.telefono,
    email: empresa.email,
    artContratada: empresa.artContratada,
    lat: 13.4,
    lng: 10.5
   
  }})
 }
};
