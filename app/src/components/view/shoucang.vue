<template>
 <div class="wrapper">

        <div class="card" v-for="(item,index) in news" :key="index" @touchmove='toxqmove($event)' @touchend='toxqend(item.id)'>
            <p>{{item.title}}</p>
            <div><img :src="item.images" alt=""></div>
        </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 components: {},
 props: {},
 data () {
 return {
     news:[],
     endX:0,
     startX:0
 };
 },
 watch: {},
 computed: {},
 methods: {
toxqmove(e){
this.endX=e.touches[0].clientX;
console.log('yd');
},
toxqend(a){
    console.log(11111111111111);
    if(this.endX==0){
        console.log('cg');
      this.$router.push('/xiangqing/'+a)  
    }
}
 },
 mounted () {
     
     var arr=localStorage.getItem('arr')?JSON.parse(localStorage.getItem('arr')):[];
     this.news=arr
     console.log(arr);
 }
};
</script>
<style lang='stylus' scoped>
.wrapper
    width 100%
    height 100% 
    background #F4F6F2
    padding-top .3rem
    .card
        height 1.7rem
        margin .2rem
        margin-top 0
        background #fff
        border 0.01rem solid $cardborder
        border-radius .1rem
        display flex
        p
            flex 1
            padding .25rem
            font-size .3rem
            padding-top 0
        div
            width 1.2rem
            padding .25rem
            padding-left 0
            img
                width 100%
                height 100%
</style>
