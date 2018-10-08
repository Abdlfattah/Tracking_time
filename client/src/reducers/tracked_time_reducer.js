export default function(state={},action){
    switch (action.type) {
        case 'GET_TRACKED_TIME':
            return {
                ...state,
                get:action.payload
            }
        case 'POST_TRACKED_TIME':
            return {
                ...state,
                post:action.payload
            }
        default:
            return {...state}
    }

}