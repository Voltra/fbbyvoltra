import {Enum} from "enumify"

class ConnectionStatusProps extends Enum{}

ConnectionStatusProps.initEnum({
    CONNECTED: {
        get str(){ return ()=>"connected"; }
    },
    IDLE: {
        get str(){ return ()=>"idle"; }
    },
    DISCONNECTED: {
        get str(){ return ()=>"disconnected"; }
    }
});

export default ConnectionStatusProps;