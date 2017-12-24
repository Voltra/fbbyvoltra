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

<style scoped>
    #actionBar{
        position: relative;
        width: 100%;
        height: 6vh;

        display: flex;
        flex-direction: row;
        
        z-index: 3;
        cursor: pointer;
    }
    
    #actionBar{
        background-color: #3b5998;
        box-shadow: 0 -0.2vh 0.4vh 0.2vh rgba(0,0,0, 0.15);
    }
</style>