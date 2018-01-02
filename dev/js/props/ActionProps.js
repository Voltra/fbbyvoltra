import {make, partial} from "@js/helpers/make"

class ActionProps{
    constructor(name, imgUrl, isCenter=false){
        if(typeof name != "string")
            throw new TypeError("The name of an ActionProps must be a String");
        
        if(typeof imgUrl != "string")
            throw new TypeError("The ActionProps's image's URL must be a String");
        
        if(typeof isCenter != "boolean")
            throw new TypeError("The center property of an ActionProps must be a Boolean");
        
        this.actionName = name;
        this.imgUrl = imgUrl;
        this.isCenter = isCenter;
    }
};

const makeActionProps = partial(make, ActionProps);

export {ActionProps, makeActionProps};