import {make, partial} from "@js/helpers/make"
import ConnectionStatusProps from "@js/props/ConnectionStatusProps"

class FriendProps{
    constructor(name, ppUrl, status){
        if(typeof name != "string")
            throw new TypeError("A FriendProps's name must be a String");
        
        if(typeof ppUrl != "string")
            throw new TypeError("A FriendProps's ppUrl must be a String");
        
        if(!(status instanceof ConnectionStatusProps))
            throw new TypeError("A FriendProps's status must be a ConnectionStatusProps");
        
        this.name = name;
        this.ppUrl = ppUrl;
        this.status = status;
    }
}

const makeFriendProps = partial(make, FriendProps);

export {FriendProps, makeFriendProps};