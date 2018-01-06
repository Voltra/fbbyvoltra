<script>
    import AppContainer from "@components/shared/AppContainer"
    import ActionBar from "@components/shared/ActionBar"
    
    import {makeActionProps} from "@js/props/ActionProps"
    import {makeFriendProps} from "@js/props/FriendProps"
    import ConnectionStatusProps from "@js/props/ConnectionStatusProps"
    
    import responsive from "@js/helpers/responsive"
    import noSlot from "@js/helpers/noSlot"
    
    
    const name = "app";
    export default {
        name,
        data(){
            return {
                actions: [
                    makeActionProps("friend requests", "/assets/img/png/actionbar/off-friend.png"),
                    makeActionProps("search", "/assets/img/png/actionbar/off-search.png"),
                    makeActionProps("post", "/assets/img/png/actionbar/post.png", 0, true),
                    makeActionProps("notifications", "/assets/img/png/actionbar/off-notif.png", 90),
                    makeActionProps("menu", "/assets/img/png/actionbar/off-menu.png"),
                ],
                friends: [
                    makeFriendProps("PINGAS", "/assets/img/png/av.png", ConnectionStatusProps.CONNECTED),
                    makeFriendProps("Random Pelo", "/assets/img/png/av.png", ConnectionStatusProps.DISCONNECTED),
                    makeFriendProps("Jean Denis", "/assets/img/png/av.png", ConnectionStatusProps.IDLE),
                    makeFriendProps("Voltra Tonlaveur", "/assets/img/png/av.png", ConnectionStatusProps.CONNECTED),
                    makeFriendProps("Peter Parker", "/assets/img/png/anti-venom.png", ConnectionStatusProps.IDLE),
                    makeFriendProps("Bruce Wayne", "/assets/img/png/av.png", ConnectionStatusProps.IDLE),
                    makeFriendProps("Ben Reilly", "/assets/img/png/av.png", ConnectionStatusProps.IDLE),
                    makeFriendProps("Cindy Moon", "/assets/img/png/av.png", ConnectionStatusProps.IDLE),
                ],
                responsive
            };
        },
        render(h){
            if(!this.$slots.view)
                noSlot("view", name, noSlot.EXCEPTION);
            
            return (
                <div class="app-container">
                    <transition appear name="slideDown">
                        <AppContainer friends={this.friends} responsive={this.responsive}>
                            <template slot="view">{this.$slots.view}</template>
                        </AppContainer>
                    </transition>
                    <transition appear name="slideUp">
                        <ActionBar actions={this.actions}/>
                    </transition>
                </div>
            );
        }
    };
</script>

<style scoped lang="scss">
    @import "~@css/variables";
    //@import "~compass-mixins/lib/compass";
    
    .app-container{
        background-color: $bg;
    }
</style>