

const initialState = {
    result: 1
  };
  
/**
 * reducer是一个纯函数，根据action返回新的状态
 */
export default function(state = initialState, action) {
    switch (action.type) {
        case 'add': {
            return {result: state.result + 1}
        }
        case 'subtract': {
            return {...state, result: state.result - 1}
        }
        default:
            return state;
    }
}