import Vue from "$es-vue"
import App from "@components/App"
import merge from "lodash.merge"
import responsive from "@js/helpers/responsive"


import "vue2-animate/dist/vue2-animate.min.css"

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
    window.responsive = responsive;
}

export default createVue;