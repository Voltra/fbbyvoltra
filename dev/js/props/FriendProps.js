import {make, partial} from "@js/helpers/make"
import ConnectionStatusProps from "@js/props/ConnectionStatusProps"
import {assertType, assertInstanceOf} from "@js/helpers/type-safety"

class FriendProps{
    constructor(name, ppUrl, status){
        assertType(name, "string", "A FriendProps's name must be a String");
        assertType(ppUrl, "string", "A FriendProps's ppUrl must be a String");
        assertInstanceOf(status, ConnectionStatusProps, "A FriendProps's status must be a ConnectionStatusProps");
        
        this.name = name;
        this.ppUrl = ppUrl;
        this.status = status;
    }
}

const makeFriendProps = partial(make, FriendProps);

export {FriendProps, makeFriendProps};