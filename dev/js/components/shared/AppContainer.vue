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

<style scoped>
    #container{
        width: 100vw;
        height: 94vh;
        position: relative;
        display: block;
    }
</style>