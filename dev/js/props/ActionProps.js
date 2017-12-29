import {make, partial} from "@js/helpers/make"

class ActionProps{
    constructor(name, imgUrl, isCenter){
        this.actionName = name;
        this.imgUrl = imgUrl;
        this.isCenter = isCenter;
    }
};

const makeActionProps = partial(make, ActionProps);

export {ActionProps, makeActionProps};