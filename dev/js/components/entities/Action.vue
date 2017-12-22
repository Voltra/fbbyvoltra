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
    
    .actionBar__centerAction{
        border-radius: 100vh;
        background-color: white;
        box-shadow: 0 0 0.2vh 0.1vh rgba(0,0,0, 0.15);
    }
</style>