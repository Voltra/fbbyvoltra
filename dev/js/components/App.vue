<script>
    import AppContainer from "@components/shared/AppContainer"
    import ActionBar from "@components/shared/ActionBar"
    
    import {makeActionProps} from "@js/props/ActionProps"
    import {makeFriendProps} from "@js/props/FriendProps"
    
    import responsive from "@js/helpers/responsive"
    
    export default {
        name: "app",
        data(){
            return {
                actions: [
                    makeActionProps("friend requests", "/assets/img/png/actionbar/off-friend.png", false),
                    makeActionProps("search", "/assets/img/png/actionbar/off-search.png", false),
                    makeActionProps("post", "/assets/img/png/actionbar/post.png", true),
                    makeActionProps("notifications", "/assets/img/png/actionbar/off-notif.png", false),
                    makeActionProps("menu", "/assets/img/png/actionbar/off-menu.png", false),
                ],
                friends: [
                    makeFriendProps("PINGAS", "/assets/img/png/av.png", "connected"),
                    makeFriendProps("Random Pelo", "/assets/img/png/av.png", "disconnected"),
                    makeFriendProps("Jean Denis", "/assets/img/png/av.png", "idle"),
                    makeFriendProps("Voltra Tonlaveur", "/assets/img/png/av.png", "connected"),
                    makeFriendProps("Peter Parker", "/assets/img/png/anti-venom.png", "idle"),
                    makeFriendProps("Bruce Wayne", "/assets/img/png/av.png", "idle"),
                    makeFriendProps("Ben Reilly", "/assets/img/png/av.png", "idle"),
                    makeFriendProps("Cindy Moon", "/assets/img/png/av.png", "idle"),
                ],
                responsive
            };
        },
        render(h){
            return (
                <div class="app-container">
                    <transition appear name="slideDown">
                        <AppContainer friends={this.friends} responsive={this.responsive}>
                            {this.$slots.default}
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