<script>
    import AppContainer from "@components/shared/AppContainer"
    import ActionBar from "@components/shared/ActionBar"
    
    import ActionProps from "@js/props/ActionProps"
    import FriendProps from "@js/props/FriendProps"
    
    import responsive from "@js/helpers/responsive"
    
    
    
    export default {
        name: "app",
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

<style scoped>
    .app-container{
        background-color: #e9ebee;
    }
</style>