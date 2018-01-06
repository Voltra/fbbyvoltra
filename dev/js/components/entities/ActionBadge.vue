<script>
    export default {
        name: "action-badge",
        props: {
            value: {
                type: Number,
                required: false,
                default: 0
            }
        },
        computed: {
            formattedValue(){
                const value = Math.abs( Math.round(this.value) );
                
                if(value > 9)
                    return "9+";
                else
                    return `${value}`;
            }
        },
        render(h){
            return (
                <div class="badge" v-show={this.value}>
                    <span>{this.formattedValue}</span>
                </div>
            );
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@css/variables";
    @import "~compass-mixins/lib/compass";
    
    .badge{
        position: absolute;
        top: $badgeTop;
        right: 50%;
        
        width: $badgeDimension;
        height: $badgeDimension;
        line-height: calc(#{$badgeDimension} - 1px);
        
        text-align: center;
        
        @include border-radius(100vh);
        background-color: $alertColor;
        @include box-shadow(0 0 0.4vh 0.2vh rgba(#000, 0.25));
        @include transform(translate3d(120%, 0, 0) scale(0.9));
    
    
        & span{
            //font-size: $badgeFontSize;
            margin: 0 auto;
            color: $alt-color;
            display: block;

            @include transform-origin(center);
            @include scale(0.7);
        }
    }
    
    @media (min-width: 768px) and (max-width: 960px){}
    
    @media (max-width: 768px), (orientation: portrait){
        .badge{
            width: calc(2 * #{$badgeDimensionMobile});
            height: calc(2 * #{$badgeDimensionMobile});
            line-height: calc((2 * #{$badgeDimensionMobile}) - 1px);
            
            & span{
                @include scale(0.7);
            }
        }
    }
</style>