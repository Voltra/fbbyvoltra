<template>
    <div id="home"></div>
</template>

<script>
    export default {
        name: "home"
    };
</script>

<style scoped lang="scss">
    @import "~@css/variables";
    @import "~compass-mixins/lib/compass";
    
    #home{
        display: block;
        width: $contentWidth;
        height: $contentHeight;
        
        overflow: hidden;
        overflow-y: auto;
        float: left;
    }
    
    #home{
        background-color: $bg;
    }
</style>