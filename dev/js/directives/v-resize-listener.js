import responsive from "@js/helpers/responsive"
import {ResponsiveProps} from "@js/props/ResponsiveProps"

const VResizeListener = {
    install(Vue, options={responsive}){
        if(!options.responsive)
            throw new TypeError("Expected 'ResponsiveProps', is 'undefined' @options.responsive");
        
        if(!(options.responsive instanceof ResponsiveProps))
            throw new TypeError(`Expected 'ResponsiveProps', is ${typeof options.responsive}`);
        
        const r = options.responsive;
        
        Vue.directive("resize-listener", {
            bind(el, binding){
                const handler = binding.value;
                if(typeof handler != "function")
                    throw new TypeError("The event handler must be a function @v-resize-listener.bind");
                
                window.addEventListener("resize", handler);
                handler();
            },
            unbind(el, binding){
                const handler = binding.value;
                if(typeof handler != "function")
                    throw new TypeError("The event handler must be a function @v-resize-listener.unbind");
                
                window.removeEventListener("resize", handler);
            }
        });
    }
};

export default VResizeListener;