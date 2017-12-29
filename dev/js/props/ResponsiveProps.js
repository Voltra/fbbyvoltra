import {make, partial} from "@js/helpers/make"

class ResponsiveProps{
    constructor(breakpoint, sizeSource, orientationSource){
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