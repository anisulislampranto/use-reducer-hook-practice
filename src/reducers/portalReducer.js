export const portalReducer = (state, action) =>{
    switch (action.type) {
        case 'ADD_PETEIENT':
            const adding = {
                name: action.name,
                id: action.name + state.peteients.length
            }
            const newPateints = [...state.peteients, adding]
            return{
                ...state,
                peteients: newPateints
            }
            break;
        case 'REMOVE_PETEIENT':
            console.log(action);
            const removed = state.peteients.filter(pateint => pateint.id !== action.id);
            return {
                ...state,
                peteients: removed
            }    
        default:
            break;
    }
}