export function assertType(variable, correctType, errMsg){
    if(typeof correctType != "string")
        throw new TypeError("The type given should be a String");
    if(typeof errMsg != "string")
        throw new TypeError("The error message should be a String");
    
    if(typeof variable != correctType)
        throw new TypeError(errMsg);
}

export function assertInstanceOf(object, desiredClass, errMsg){
    assertType(desiredClass, "function", "The desired class must be either a class or a constructor function");
    assertType(object, "object", "The object must be an Object/object (or null)");
    assertType(errMsg, "string", "The error message should be a String");
    
    if(!(object instanceof desiredClass))
        throw new TypeError(errMsg);
}

export function assertNotNull(variable, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    
    if(variable === null)
        throw new TypeError(errMsg);
}

export function assertTruthy(variable, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    
    if(!variable)
        throw new TypeError(errMsg);
}

export function assertFalsy(variable, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    
    if(variable)    
        throw new TypeError(errMsg);
}

export function assertEquivalent(value, expected, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    
    if(value != expected)
        throw new TypeError(errMsg);
}

export function assertEqual(value, expected, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    
    if(value !== expected)
        throw new TypeError(errMsg);
}

export function assertDifferent(value, expected, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    
    if(value == expected)
        throw new TypeError(errMsg);
}

export function assertNotEqual(value, expected, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    
    if(value === expected)
        throw new TypeError(errMsg);
}

export function assertIsInt(number, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    
    if(!Number.isInteger(number))
        throw new TypeError(errMsg);
}

export function assertPositive(number, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    assertType(number, "number", "The given number must be a Number");
    
    if(number < 0)
        throw new TypeError(errMsg);
}

export function assertNegative(number, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    assertType(number, "number", "The given number must be a Number");
    
    if(number > 0)
        throw new TypeError(errMsg);
}

export function assertZero(number, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    assertType(number, "number", "The given number must be a Number");
    assertEqual(number, 0, errMsg);
}

export function assertStrictlyPositive(number, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    assertType(number, "number", "The given number must be a Number");
    assertPositive(number, errMsg);
    assertNotEqual(number, 0, errMsg);
}

export function assertStrictlyNegative(number, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    assertType(number, "number", "The given number must be a Number");
    assertNegative(number, errMsg);
    assertNotEqual(number, 0, errMsg);
}

export function assertIsArray(variable, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    
    if(!Array.isArray(variable))
        throw new TypeError(errMsg);
}

export function assertIsObject(variable, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    assertType(variable, "object", errMsg);
    assertNotNull(variable, errMsg);
}

export function assertHasProperty(object, property, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    assertIsObject(object, "The given object must be non null Object/object");
    assertType(property, "string", "The given property must be a String");
    
    try{
        assertTruthy(object[property], errMsg);
    }catch(e){
        throw new TypeError(errMsg);
    }
}

export function assertHasProperties(object, properties, errMsg){
    assertType(errMsg, "string", "The error message should be a String");
    assertIsObject(object, "The given object must be non null Object/object");
    assertIsArray(properties, "'properties' must be an Array");
    
    properties.forEach(property => assertHasProperty(object, property, errMsg));
}