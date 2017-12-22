<template>
    <div class="app-container">
        <app-container :friends="friends">
            <slot></slot>
        </app-container>
        <action-bar :actions="actions"></action-bar>
    </div>
</template>

<script>
    import AppContainer from "@components/shared/AppContainer"
    import ActionBar from "@components/shared/ActionBar"
    
    import ActionProps from "@js/props/ActionProps"
    import FriendProps from "@js/props/FriendProps"
    
    
    
    export default {
        name: "app",
        components: { ActionBar, AppContainer },
        data(){
            return {
                actions: [
                    new ActionProps("a", "/assets/img/png/actionbar/off-friend.png", false),
                    new ActionProps("b", "/assets/img/png/actionbar/off-search.png", false),
                    new ActionProps("c", "/assets/img/png/actionbar/post.png", true),
                    new ActionProps("d", "/assets/img/png/actionbar/off-notif.png", false),
                    new ActionProps("d", "/assets/img/png/actionbar/off-menu.png", false),
                ],
                friends: [
                    new FriendProps("PINGAS", "/assets/img/png/av.png", "connected"),
                    new FriendProps("Random Pelo", "/assets/img/png/av.png", "disconnected"),
                    new FriendProps("Jean Denis", "/assets/img/png/av.png", "idle"),
                    new FriendProps("Voltra Tonlaveur", "/assets/img/png/av.png", "connected")
                ]
            };
        }
    };
</script>