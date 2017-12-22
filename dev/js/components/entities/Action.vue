<template>
    <div :class="classes">
        <img :src="url" :alt="actionName"/>
    </div>
</template>

<script>
    import ActionProps from "@js/props/ActionProps";

    export default {
        props: {
            actionProps: {
                type: ActionProps,
                required: true
            }
        },
        name: "action",
        data(){ return {}; },
        computed: {
            classes(){
                return{
                    "actionBar__action": true,
                    "actionBar__centerAction": this.isCenter
                }
            },
            actionName(){ return this.actionProps.actionName },
            url(){ return this.actionProps.imgUrl },
            isCenter(){ return this.actionProps.isCenter },
        }
    }
</script>

<style scoped>
    .actionBar__action{
        position: relative;
        flex: auto;
        display: inline-block;
    }
    
    .actionBar__action img{
        display: block;
        width: auto;
        height: 100%;
        
        margin: 0 auto;
        transform: scale(0.5);
        -webkit-transform: scale(0.5);
    }
    
    /*////////////////////////////////////////////////////////////////////////////////*/
    
    .actionBar__centerAction{
        border-radius: 100vh;
        background-color: white;
        box-shadow: 0 0 0.2vh 0.1vh rgba(0,0,0, 0.15);
    }
    
    .actionBar__action img{
        filter: drop-shadow(0 0.2vh 0.4vh rgba(0,0,0, 0.25));
    }
    
    /*////////////////////////////////////////////////////////////////////////////////*/
    
    .actionBar__action,
    .actionBar__action img{
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
    }
    
    .actionBar__action img{
        transition-property: filter, transform;
    }
    .actionBar__centerAction{
        transition-property: box-shadow;
    }
    
    .actionBar__action:hover img{
        filter: drop-shadow(0 0.2vh 0.5vh rgba(0,0,0, 0.35));
        transform: scale(0.52);
        -webkit-transform: scale(0.52);
    }
    
    .actionBar__centerAction:hover{
        box-shadow: 0 0 0.2vh 0.1vh rgba(0,0,0, 0.35);
    }
    
    .actionBar__centerAction:hover img{
        filter: drop-shadow(0 0 0.2vh rgba(0,0,0, 0.15));
    }
</style>