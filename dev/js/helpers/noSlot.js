function noSlot(slotName, componentName, exception=false){
    if(typeof slotName != "string")
        throw new TypeError("The slot's name must be a String");
    
    if(typeof componentName != "string")
        throw new TypeError("The component's name must be a String");
    
    if(typeof exception != "boolean")
        throw new TypeError("The exception flag must be a Boolean");
    
    
    const msg = `No content was provided for slot "${slotName}" in component "${componentName}"`;
    
    
    if(exception)
        throw new Error(msg);
    else
        console.error(msg);
    
}

noSlot.EXCEPTION = true;
noSlot.CONSOLE = false;

export default noSlot;