
const initialState = {
    maxId: 1,
    tasks:[
        {id: 1, name: 'default task'}
    ]
}


/**
 * reducer是一个纯函数，根据action返回新的状态
 */
export default function(state = initialState, action) {
    switch (action.type) {
        case 'addTask': {
            let newId = state.maxId + 1;
            let newItem = {
                id: newId, 
                name: action.payload
            }
            return {...state, maxId: newId, tasks: [...state.tasks, newItem]}
        }
        case 'removeTask': {
            let removeId = action.payload;
            return {...state, tasks: state.tasks.filter(item => item.id !== removeId)}
        }
        default:
            return state;
    }
}