<template>
    <div id="friendList">
        <transition-group v-if="friends.length" tag="ul" name="fade">
            <friend v-for="(friend, index) in friends" :key="index" :friend="friend"></friend>
        </transition-group>
        <p v-else class="no-friend">Sadly, there is no friend to display here</p>
    </div>
</template>

<script>
    import Friend from "@components/entities/Friend"
    import FriendProps from "@js/props/FriendProps"
    
    export default {
        name: "friend-list",
        components: { Friend },
        props: {
            friends: Array,
            required: true,
            default: ()=>[]
        }
    };
</script>

<style scoped>
    #friendList{
        width: 20%;
        min-height: 100%;
        height: auto;
        
        overflow: hidden;
        float: left;
        z-index: 2;
    }
    
    #friendList ul{
        display: block;
        width: 100%;
        min-height: 100%;
        height: auto;
        
        overflow: hidden;
        overflow-y: auto;
    }
    
    #friendList{
        background-color: #e9ebee;
        box-shadow: -0.2vh 0 0.2vh 0.1vh rgba(0,0,0, 0.15);
    }
    
    #friendList ul{
        list-style: none;
    }
    
    .no-friend{
        font-size: 1em;
        word-break: break-all;
        padding: 5%;
        
        color: #3c3f41;
    }
</style>