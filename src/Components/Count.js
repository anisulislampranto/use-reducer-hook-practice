import React, { useReducer } from 'react';

const countState = {
    click:0,
    count:0,
    active:true

}

const countReducer = (state, action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return{
                ...state,
                count: state.count + 1
            }
            break;
        case 'DECREMENT':
             return{
                ...state, 
                count: state.count - 1
             }

        default:
            return state;
            break;
    }
}

const Count = () => {
    
    const [state, dispatch] = useReducer(countReducer, countState);




    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increase</button>
            <button onClick={()=> dispatch({type:'DECREMENT'})}>Decrease</button>
        </div>
    );
};

export default Count;