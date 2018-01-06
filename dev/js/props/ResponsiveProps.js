import {make, partial} from "@js/helpers/make"
import {assertType, assertIsObject, assertHasProperties, assertHasProperty} from "@js/helpers/type-safety"

class ResponsiveProps{
    constructor(breakpoint, sizeSource, orientationSource){
        assertType(breakpoint, "number", "The breakpoint must be a Number");
        assertIsObject(sizeSource, "The size source must be an Object");
        assertHasProperties(sizeSource, ["innerWidth", "innerHeight"], "The size source must have an 'innerHeight' and an 'innerWidth' property");
        assertIsObject(orientationSource, "The orientation source must be an Object");
        assertHasProperty(orientationSource, "orientation", "The orientation source must have an 'orientation' property");
        assertIsObject(orientationSource.orientation, "The orientation source's orientation property must be an object");
        assertHasProperty(orientationSource.orientation, "type", "The orientation source's orientation property must have a 'type' property");
        assertType(orientationSource.orientation.type, "string", "The 'type' property of the 'orientation' property of the orientation source must be a String")
        
        this.breakpoint = breakpoint;
        this.sizeSource = sizeSource;
        this.orientationSource = orientationSource;
    }
    
    breakpoint(){ return this.breakpoint; }
    
    width(){ return this.sizeSource.innerWidth; }
    height(){ return this.sizeSource.innerHeight; }
    
    orientation(){ return this.orientationSource.orientation.type; }
    isPortrait(){ return this.orientation().includes("portrait"); }
    isLandscape(){ return !this.isPortrait(); }
    
    isMobile(){
        return (this.width() <= this.height()) || this.isPortrait();
    }
    isDesktop(){ return !this.isMobile(); }
};

const makeResponsiveProps = partial(make, ResponsiveProps);


export {ResponsiveProps, makeResponsiveProps};