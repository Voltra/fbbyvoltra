import {make, partial} from "@js/helpers/make"

class FriendProps{
    constructor(name, ppUrl, status){
        this.name = name;
        this.ppUrl = ppUrl;
        this.status = status;
    }
}

const makeFriendProps = partial(make, FriendProps);

export {FriendProps, makeFriendProps};