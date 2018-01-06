import {make, partial} from "@js/helpers/make"
import {assertType, assertIsInt, assertPositive} from "@js/helpers/type-safety"

class ActionProps{
    constructor(name, imgUrl, notifAmount=0, isCenter=false){
        assertType(name, "string", "The name of an ActionProps must be a String");
        assertType(imgUrl, "string", "The ActionProps's image's URL must be a String");
        assertType(notifAmount, "number", "The amount of notifications of an ActionProps must be a Number");
        assertIsInt(notifAmount, "The amount of notifications must be an Integer");
        assertPositive(notifAmount, "The amount of notifications must be positive")
        assertType(isCenter, "boolean", "The center property of an ActionProps must be a Boolean");
        
        this.actionName = name;
        this.imgUrl = imgUrl;
        this.isCenter = isCenter;
        this.notifAmount = notifAmount;
    }
};

const makeActionProps = partial(make, ActionProps);

export {ActionProps, makeActionProps};