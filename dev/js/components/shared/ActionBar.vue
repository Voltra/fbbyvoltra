<template>
    <div id="action_bar">
        <action v-for="action in actions" :action-name="action.actionName" :img-url="action.imgUrl"></action>
    </div>
</template>

<script>
    import Action from "@components/shared/Action"
    import ActionProps from "@js/ActionProps"

    export default {
        props: {
            actions : {
                validator(value){
                    if(!isArray(value))
                        return false;

                    return value.reduce(function(acc, elem){
                        return acc && (elem instanceof ActionProps);
                    }, true);
                }
            }
        },
        name: "action-bar",
        components: { Action }
    }
</script>

<style scoped>
#action_bar{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

}
</style>