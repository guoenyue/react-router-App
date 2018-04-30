import {SET_VERSION,SET_TITLE,CONFIG} from "../STATIC_CONFIG";



function setTitle(state=CONFIG.title,action){
    let type=action.type;
    switch(type){
        case SET_TITLE:
            return action.title;
        break;
        default:
            return state;
        break;
    }
};

function setVersion(state=CONFIG.version,action){
    let type=action.type;
    switch(type){
        case SET_VERSION:
            return action.version;
        break;
        default:
            return state;
        break;
    }
}

function Reducers(state={},action){
    return {
        title:setTitle(state.title,action),
        version:setVersion(state.version,action)
    };
}


export default Reducers;