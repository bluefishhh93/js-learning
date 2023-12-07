import { TYPE_LOG} from "../constants.js";

function logger(log, type = TYPE_LOG){
    console[type](log);
}

export default logger; //mot module chi export duoc 1 cai default 
