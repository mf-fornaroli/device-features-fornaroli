import { OBRAS } from '../../data/Obras';
import { ADD_OBRA, SELECT_OBRA } from '../actions/obra.action';

const initialState = {
    listaObras: OBRAS,
    filteredObras: [],
    selected: null
};

const ObrasReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_OBRA:
            const obra = action.obra;
            return {
                ...state,
                listaObras: [
                    ...state.listaObras,
                    obra
                ]
            }
        
        case SELECT_OBRA:
            const id = action.idObra
            const IndexObra = state.listaObras.findIndex(obra => obra.id === id);
            console.log("index obra reducer: ", IndexObra)

            if (IndexObra === -1) return state

            return { ...state, selected: state.listaObras[IndexObra] }
        
        default:
            return state;           
    }
    
};

export default ObrasReducer;
