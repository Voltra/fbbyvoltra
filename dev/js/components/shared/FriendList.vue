<script>
    import Friend from "@components/entities/Friend"
    
    export default {
        name: "friend-list",
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
        data(){
            return {
                noFriendMessage: "Sadly, there is no friend to display here. Maybe none of your friend is using this application, maybe you should tell them to do so ;) !"
            };
        },
        render(h){
            if(!this.friends.length)
                return (
                    <div id="friendList">
                        <p class="no-friend">{this.noFriendMessage}</p>
                    </div>
                );
            else
                return (
                    <div id="friendList">
                        <transition-group appear tag="ul" name="zoomRight">
                            {
                                this.friends.map((friend, index)=>(
                                    <Friend key={index} friend={friend} responsive={this.responsive}/>
                                ))
                            }
                        </transition-group>
                    </div>
                );
        }
    };
</script>

<style scoped lang="scss">
    @import "~@css/variables";
    @import "~compass-mixins/lib/compass";
    
    #friendList{
        width: $friendListWidth;
        height: $friendListHeight;
        
        overflow: hidden;
        float: left;
        z-index: 2;
    }
    
    #friendList ul{
        display: block;
        width: 100%;
        height: 100%;
        
        overflow: hidden;
        overflow-y: auto;
    }
    
    #friendList{
        background-color: $bg;
        @include box-shadow(-0.2vh 0 0.2vh 0.1vh rgba(#000, 0.15));
    }
    
    #friendList ul{
        @include list-style(none);
    }
    
    .no-friend{
        font-size: 1em;
        //word-break: break-all;
        word-wrap: break-word;
        padding: $friendListPadding;
        
        color: $color;
    }
</style>