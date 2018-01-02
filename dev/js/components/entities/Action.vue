<script>
    import {ActionProps} from "@js/props/ActionProps";
    
    import "@css/tooltip.scss"

    export default {
        props: {
            action: {
                type: ActionProps,
                required: true
            }
        },
        name: "action",
        computed: {
            classes(){
                return{
                    "actionBar__action": true,
                    "actionBar__centerAction": this.isCenter
                }
            },
            actionName(){ return this.action.actionName },
            url(){ return this.action.imgUrl },
            isCenter(){ return this.action.isCenter },
            tooltipData(){
                return {
                    content: `${this.actionName}`,
                    placement: "top"
                };
            }
        },
        render(h){
            return (
                <div class={this.classes} v-tooltip={this.tooltipData}>
                    <img src={this.url} alt={this.actionName}/>
                </div>
           );
        }
    }
</script>

<style scoped lang="scss">
    @import "~@css/variables";
    @import "~compass-mixins/lib/compass";
    
    .actionBar__action{
        position: relative;
        @include flex(auto);
        display: inline-block;
        
        & img{
            display: block;
            width: auto;
            height: 100%;

            margin: 0 auto;
            @include scale(0.5);
        }
    }
    
    /*////////////////////////////////////////////////////////////////////////////////*/
    
    .actionBar__action{
        background-color: $primary;
        
        & img{
            @include filter( drop-shadow(0 0.2vh 0.4vh rgba(#000, 0.25)) );
        }
    }
    
    .actionBar__centerAction{
        @include border-radius(100vh);
        background-color: white;
        @include box-shadow(0 0 0.2vh 0.1vh rgba(#000, 0.15));
    }
    
    /*////////////////////////////////////////////////////////////////////////////////*/
    
    .actionBar__action,
    .actionBar__action img{
        @include transition-duration($transitionDuration);
        @include transition-timing-function(ease-in-out);
    }
    
    .actionBar__action img{
        @include transition-property(filter, transform);
    }
    .actionBar__centerAction{
        @include transition-property(box-shadow);
    }
    
    .actionBar__action:hover img{
        @include filter( drop-shadow(0 0.2vh 0.5vh rgba(#000, 0.35)) );
        @include scale(0.52);
    }
    
    .actionBar__centerAction:hover{
        @include box-shadow(0 0 0.2vh 0.1vh rgba(#000, 0.35));
        
        & img{
            @include filter( drop-shadow(0 0 0.2vh rgba(#000, 0.15)) );
        }
    }
</style>