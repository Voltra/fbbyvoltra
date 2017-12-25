<script>
    import Action from "@components/entities/Action"

    export default {
        name: "action-bar",
        props: {
            actions : {
                type: Array,
                required: true
            }
        },
        render(h){
            return (
                <div id="actionBar">
                    {
                        this.actions.map((action, index)=>(
                            <Action key={index} action-props={action}/>
                        ))
                    }
                </div>
            );
        }
    }
</script>

<style scoped lang="scss">
    @import "~@css/variables";
    @import "~compass-mixins/lib/compass";
    
    #actionBar{
        position: relative;
        width: $actionBarWidth;
        height: $actionBarHeight;
        bottom: $actionBarHeight;

        @include display-flex;
        @include flex-direction(row);
        
        z-index: 3;
        cursor: pointer;
    }
    
    #actionBar{
        background-color: $primary;
        @include box-shadow(0 -0.2vh 0.4vh 0.2vh rgba(#000, 0.15));
    }
</style>