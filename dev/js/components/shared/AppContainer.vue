<template>
    <div id="container">
        <slot></slot>
        <friend-list :friends="friends"></friend-list>
    </div>
</template>

<script>
    import FriendList from "@components/shared/FriendList"
    
    export default {
        name: "app-container",
        props: {
            friends: {
                type: Array,
                required: true,
                default: []
            }
        },
        components: { FriendList }
    };
</script>

<style scoped>
    #container{
        width: 100vw;
        height: 94vh;
        position: relative;
        display: block;
    }
</style>