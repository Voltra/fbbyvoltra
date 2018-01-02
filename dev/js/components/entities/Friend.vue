<script>
    import {FriendProps} from "@js/props/FriendProps"
    import {ResponsiveProps} from "@js/props/ResponsiveProps"
    import ConnectionStatusProps from "@js/props/ConnectionStatusProps"

    import "@css/tooltip.scss"
    
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
                    "connected": this.status === ConnectionStatusProps.CONNECTED,
                    "idle": this.status === ConnectionStatusProps.IDLE,
                    "disconnected": this.status === ConnectionStatusProps.DISCONNECTED,
                }
            },
            
            name(){ return this.friend.name; },
            ppUrl(){ return this.friend.ppUrl; },
            alt(){ return `Profile picture of ${this.friend.name}` },
            status(){ return this.friend.status; },

            tooltipData(){
                const classes = Object.keys(this.classes)
                .filter(className => this.classes[className])
                .join(" ");
                
                return {
                    content: `${this.name}&nbsp;<i class="${classes}"></i>`,
                    placement: "left"
                };
            }
        },
        methods: {
            handleResize(){
                this.shouldDisplayName = this.responsive.isDesktop();
            }
        },
        render(h){
            return (
                <li class={this.classes} v-tooltip={this.tooltipData} v-resize-listener={this.handleResize}>
                    <div class="img-container">
                        <img src={this.ppUrl} alt={this.alt}/>
                    </div>
                    <div class="name-container" v-show={this.shouldDisplayName}>
                        <p>{ this.name }</p>
                    </div>
                </li>
            );
        }
    };
</script>

<style scoped lang="scss">
    @import "~@css/variables";
    @import "~compass-mixins/lib/compass";
    
    li.friend{
        @include display-flex;
        @include flex-direction(row);
        
        max-height: $friendListItemHeight;
        position: relative;
        
        overflow: hidden;
        padding: $friendListPadding;
        
        cursor: pointer;
        
        
        & img,
        & .img-container{
            height: $friendListItemImageDimension;
            width: $friendListItemImageDimension;
            object-fit: cover;
            object-position: center;
            @include flex(1);
            margin: auto;
        }
        
        & .name-container{
            flex: 4;
            //margin-left: $friendListPadding;
            padding: $friendListPadding;

            @include display-flex;
            @include flex-direction(column);
            @include align-content(center);
            @include justify-content(center);
        }
        
        & p{
            font-size: 100%;
            text-overflow: ellipsis;
        }
    }
    
    /*////////////////////////////////////////////////////////////////////////////////*/
    li.friend{
        border-left: 1px solid transparent;
        
        & img{
            @include border-radius($appHeight);
            border: 1px solid transparent;
            @include box-shadow(0 0 0.4vh 0.2vh rgba(#000, 0.15));
        }
    }
    
    @mixin color-bg($color, $opacity:0.69){
        border-color: $color;
        color: rgba($color, $opacity);
    }
    
    li.friend.connected,
    li.friend.connected img{
        @include color-bg($connectedColor);
    }
    
    li.friend.idle,
    li.friend.idle img{
        @include color-bg($idleColor);
    }
    
    li.friend.disconnected,
    li.friend.disconnected img{
        @include color-bg($disconnectedColor);
    }
    
    li.friend{
        @include box-shadow(0 0.2vh 0.4vh 0 rgba(#000, 0.15));
    }
    
    /*////////////////////////////////////////////////////////////////////////////////*/
    
    li.friend{
        @include transition-property(height, padding, box-shadow, border-width);
        
        & .name-container{
            @include transition-property(margin-left, height);
        }
        
        & img{
            @include transition-property(height, box-shadow, border);
        }
    }
    
    li.friend,
    li.friend .name-container{
        @include transition-duration($transitionDuration);
        @include transition-timing-function(ease-in-out);
    }
    
    li.friend:hover{
        padding: $friendListHoverPadding;
        @include box-shadow(0 0.2vh 0.4vh 0 rgba(#000, 0.35));
        border-width: 3px;
        
        & .name-container{
            margin-left: $friendListHoverPadding;
        }
        
        & img{
            @include box-shadow(0 0 0.4vh 0.2vh /*rgba(#000, 0.35)*/);
        }
    }
</style>