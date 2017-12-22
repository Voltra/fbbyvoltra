import Vue from "$vue"
import App from "@components/App"
import merge from "lodash.merge"

const defaults = {
    el: "#app-container",
    components: { App }
};

const createVue = (options, debug=false)=>{
    const finalOptions = merge(defaults, options);
    for(let component of Object.values(finalOptions["components"]))
        Vue.use(component);
    
    document.addEventListener("DOMContentLoaded", ()=>{
        const x = new Vue(finalOptions);
        if(debug)
            window.vue = x;
    });
    
    
    Vue.config.devtools = debug;
}

export default createVue;