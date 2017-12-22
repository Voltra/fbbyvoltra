export default {
    breakpoint(){
        return 768;
    },
    width(){
        return window.innerWidth;
    },
    height(){
        return window.innerHeight;
    },
    orientation(){
        return screen.orientation.type;
    },
    isPortrait(){
        return this.orientation().includes("portrait");
    },
    isLandscape(){
        return !this.isPortrait();
    },
    isMobile(){
        return (this.width() < this.breakpoint()) || this.isPortrait();
    },
    isDesktop(){
        return !this.isMobile();
    }
};