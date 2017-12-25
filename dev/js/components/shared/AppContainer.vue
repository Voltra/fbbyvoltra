<script>
    import FriendList from "@components/shared/FriendList"
    
    export default {
        name: "app-container",
        props: {
            friends: {
                type: Array,
                required: true,
                default: []
            },
            responsive: {
                required: true
            }
        },
        render(h){
            return (
                <div id="container">
                    {this.$slots.default}
                    <transition appear name="fadeRight">
                        <FriendList friends={this.friends} responsive={this.responsive}/>
                    </transition>
                </div>
            );
        }
    };
</script>

<style scoped lang="scss">
    @import "../../../css/variables";
    @import "~compass-mixins/lib/compass";
    
    #container{
        width: $appContainerWidth;
        height: $appContainerHeight;
        position: relative;
        display: block;
    }
</style>