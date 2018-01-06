import Vue from "$es-vue"
import App from "@components/App"
import VTooltip from "v-tooltip"
import VResizeListener from "@js/directives/v-resize-listener"

import merge from "lodash.merge"
import responsive from "@js/helpers/responsive"


import "vue2-animate/dist/vue2-animate.min.css"
import removeSpinnerLord from "spinner-lord"

const defaults = {
    el: "#app-container",
    components: { App, VTooltip, VResizeListener },
    mounted: removeSpinnerLord.bind(null, $)
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
};

export default createVue;