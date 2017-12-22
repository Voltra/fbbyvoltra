<template>
    <div id="actionBar">
        <action v-for="(action, index) in actions" :key="index" :action-props="action"></action>
    </div>
</template>

<script>
    import Action from "@components/entities/Action"
    import ActionProps from "@js/props/ActionProps"

    export default {
        name: "action-bar",
        props: {
            actions : {
                type: Array,
                required: true
            }
        },
        components: { Action }
    }
</script>

<style scoped>
    #actionBar{
        position: relative;
        width: 100%;
        height: 6vh;

        display: flex;
        flex-direction: row;
        
        z-index: 3;
    }
    
    #actionBar{
        background-color: #3b5998;
        box-shadow: 0 -0.2vh 0.4vh 0.2vh rgba(0,0,0, 0.15);
    }
</style>