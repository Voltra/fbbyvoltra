<script>
    import FriendProps from "@js/props/FriendProps"
    import ResponsiveProps from "@js/props/ResponsiveProps"
    
    export default {
        name: "friend",
        props: {
            friend: {
                type: FriendProps,
                required: true
            },
            responsive: {
                type: ResponsiveProps,
                required: true
            }
        },
        data(){
            return {
                shouldDisplayName: true
            }
        },
        computed: {
            classes(){
                return {
                    "friend": true,
                    "connected": this.status === "connected",
                    "idle": this.status === "idle",
                    "disconnected": this.status === "disconnected",
                }
            },
            
            name(){ return this.friend.name; },
            ppUrl(){ return this.friend.ppUrl; },
            alt(){ return `Profile picture of ${this.friend.name}` },
            status(){ return this.friend.status; }
        },
        methods: {
            handleResize(){
                this.shouldDisplayName = this.responsive.isDesktop();
            }
        },
        mounted(){
            window.addEventListener("resize", this.handleResize);
            this.handleResize();
        },
        beforeDestroy(){
            window.removeEventListener("resize", this.handleResize);
        },
        render(h){
            return (
                <li class={this.classes} title={this.name}>
                    <img src={this.ppUrl} alt={this.alt}/>
                    <div class="name-container" v-show={this.shouldDisplayName}>
                        <p>{ this.name }</p>
                    </div>
                </li>
            );
        }
    };
</script>

<style scoped>    
    li.friend{
        display: flex;
        flex-direction: row;
        
        min-height: 16%;
        position: relative;
        
        overflow: hidden;
        padding: 5%;
        
        cursor: pointer;
    }
    
    li.friend img{
        max-height: 90%;
        max-width: 20%;
        object-fit: cover;
        object-position: center;
        flex: 1;
        
        margin: auto;
    }
    
    .name-container{        
        flex: 4;
        margin-left: 5%;
        
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    
    li.friend p{
        font-size: 100%;
        text-overflow: ellipsis;
    }
    
    /*////////////////////////////////////////////////////////////////////////////////*/
    li.friend{
        border-left: 1px solid transparent;
    }
    
    li.friend img{
        border-radius: 100vh;
        border: 1px solid transparent;
        box-shadow: 0 0 0.4vh 0.2vh rgba(0,0,0, 0.15);
    }
    
    li.friend.connected,
    li.friend.connected img{
        border-color: #11b449;
        color: #11b449;
    }
    
    li.friend.idle,
    li.friend.idle img{
        border-color: #f6bc1e;
        color: #f6bc1e;
    }
    
    li.friend.disconnected,
    li.friend.disconnected img{
        border-color: slategrey;
        color: slategrey;
    }
    
    li.friend{
        box-shadow: 0 0.2vh 0.4vh 0 rgba(0,0,0, 0.15);
    }
    
    /*////////////////////////////////////////////////////////////////////////////////*/
    
    li.friend{
        transition-property: height, padding, box-shadow, border-width;
    }
    
    li.friend .name-container{
        transition-property: margin-left, height; 
    }
    
    li.friend img{
        transition-property: height, box-shadow;
    }
    
    li.friend,
    li.friend .name-container{
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
    }
    
    li.friend:hover{
        padding: 8%;
        box-shadow: 0 0.2vh 0.4vh 0 rgba(0,0,0, 0.35);
        border-width: 3px;
    }
    
    li.friend:hover .name-container{
        margin-left: 8%;
    }
    
    li.friend:hover img{
        box-shadow: 0 0 0.4vh 0.2vh rgba(0,0,0, 0.35);
    }
</style>