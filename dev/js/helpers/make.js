import partial from "lodash.partial"

function make(Class, ...args){
    return new Class(...args);
}

export {make, partial};