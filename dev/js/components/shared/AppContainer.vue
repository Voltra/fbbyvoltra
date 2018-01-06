<script>
    import FriendList from "@components/shared/FriendList"
    import noSlot from "@js/helpers/noSlot"
    
    const name = "app-container"
    export default {
        name,
        props: {
            friends: {
                type: Array,
                required: true,
                default: ()=>[]
            },
            responsive: {
                required: true
            }
        },
        render(h){
            if(!this.$slots.view)
                noSlot("view", name, noSlot.EXCEPTION);
            
            return (
                <div id="container">
                    {this.$slots.view}
                    <transition appear name="fadeRight">
                        <FriendList friends={this.friends} responsive={this.responsive}/>
                    </transition>
                </div>
            );
        }
    };
</script>

<style scoped lang="scss">
    @import "~@css/variables";
    @import "~compass-mixins/lib/compass";
    
    #container{
        width: $appContainerWidth;
        height: $appContainerHeight;
        position: relative;
        display: block;
    }
</style>