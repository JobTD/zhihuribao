<template>
 <div class="wrapper">
      <div class="left">
       <span class="iconfont icon-fanhui"  @touchmove='tosymove($event)' @touchend='tosyend()'></span><span class="pincount">{{a}}条点评</span>  
     </div>
     <div class='right'>
         <span class="iconfont icon-edit"></span>
     </div>
 </div>
 
</template>

<script type="text/ecmascript-6">
export default {
 components: {},
 props:['a'],
 data () {
 return {
    endX:0,
    startX:0
 };
 },
 watch: {},
 computed: {},
 methods: {
     
     tosymove(e){
        this.endX=e.touches[0].clientX;
     },
     tosyend(){
        if(this.endX==0){
        this.$router.go(-1) 
        }
     }
 },
 mounted () {}
};
</script>
<style lang='stylus' scoped>

@import '../../commont/stylus/index.styl'
.wrapper
    height $navH
    background $navColor
    position fixed
    top 0;
    left 0;
    .left
        font-size .33rem
        width 50%
        line-height 1.2rem
        color $fontColor
        float left
        span
            margin-left .5rem
        
    .right
        text-align right
        width 50%
        line-height 1.2rem
        color $fontColor
        float left
        span 
            margin-right .40rem
</style>
