import {SET_VERSION,SET_TITLE} from "../STATIC_CONFIG";


function setVersion(version){
    return {
        type:SET_VERSION,
        version:version
    };
}

function setTitle(title){
    return {
        type:SET_TITLE,
        title:title
    };
}


export {setVersion,setTitle};