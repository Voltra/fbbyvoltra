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
                noFriendMessage: "Sadly, there is no friend to display here"
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