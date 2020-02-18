import {BUY_CAKE} from './CakeType'

const initialState ={
    numberOfCake:10

}
 const CakeReducer = (state=initialState, action) =>{
    switch (action.type) {
        case BUY_CAKE:
            return{
                ...state,
                numberOfCake: state.numberOfCake - 1
            }
            break;
    
        default:
            return state
            break;
    }

}
export default CakeReducer;