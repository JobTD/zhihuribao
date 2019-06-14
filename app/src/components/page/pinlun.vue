<template>
 <div class="wrapper">
     <v-pinnav :a='long.length+short.length' class="vpinnav"></v-pinnav>
     <div class="box">
         <div class="chang">
             <div class="tou">
                 {{long.length}}条长评
             </div>
             <div class="baozuo" v-if='long.length==0'>
                 <img src="../../../static/css/shafa.jpg" alt="" >
                 </div>
                 <ul class="conUl">
                 <li class="changLi" v-for="item in long" :key="item.id">
                       <div class="changLef"><img :src="item.avatar" alt="">
                       </div>
                       <div class="changRig">
                           <h4>{{item.author}}</h4>
                           <h5>{{item.content}}</h5>
                           <span>{{item.time|timer2Filter}}</span>
                       </div>
                 </li>
                 </ul>
         </div>
         <div class="duan">
             <div class="tou">
                 <span>{{short.length}}条短评</span><b class="iconfont icon-xiala3"  
                 v-if='show==false' @click="target()"></b>
                 <b class="iconfont icon-shouqi"  
                 v-if='show==true' @click="show = !show"></b>
             </div>
                <div class="baozuo" v-if='short.length==0'>
                 <img src="../../../static/css/shafa.jpg" alt="" >
                 </div>
         <transition>  
              <ul class="conUl" id="cc" v-show="show">
                 <li class="duanLi" v-for="item in short" :key="item.id">
                       <div class="duanLef"><img :src="item.avatar" alt="">
                       </div>
                       <div class="duanRig">
                           <h4>{{item.author}}</h4>
                           <h5>{{item.content}}</h5>
                           <span>{{item.time}}</span>
                       </div>
                 </li>
                 </ul>
            </transition>
         </div>
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
import API from '../../commont/js/API'
import vPinnav from '../view/pinnav'
export default {
 components: {
     vPinnav
 },
 props: {},
 data () {
 return {
    long:[],
    short:[],
    show:false,
    endX:0,
    startX:0
 };
 },
 watch: {},
 computed: {},
 methods: {
     //bounceInDown
     //bounceOutDown
    //  moveyc(e){
    //     this.endX=e.touches[0].clientX;
    //  },
    //  endyc(){
    //     if(this.endX==0){
    //         this.boxshow=!boxshow
    //     }
    //  }
    target(){
         this.show=!this.show
    }
 },
 mounted () {
     var nId=this.$route.params.id
     this.$http({
         url:API.pinlun+nId+'/long-comments'
     }).then(d=>{
         console.log(d);
         this.long=d.data.comments
     }).catch()
     this.$http({
         url:API.pinlun+nId+'/short-comments'
     }).then(e=>{
         console.log(e);
         this.short=e.data.comments
     }).catch()
 }
};
</script>
<style lang='stylus' scoped>
.vpinnav
    width 100%
.box
    padding-top 1.2rem
    .chang
        width 100%
        .tou
            border-bottom .01rem solid #999 
            font-size .16rem
            color #777777
            line-height .7rem
            padding-left .2rem
        .baozuo
            width 100%
            height 9rem
            img 
                width 100%
                height 100%
        .conUl
            padding 0
            .changLi
                border-bottom 1px solid #999
                padding .3rem
                display flex
                .changLef
                    width .6rem
                    img
                        width .5rem
                        height .5rem
                        border-radius 50%
                .changRig
                    flex 1
                    h4
                        font-size .16rem
                    h5
                        padding-top .2rem
                        margin 0
                        font-size .16rem
                        font-weight 400
                    span
                        display block
                        font-size .12rem
                        color #E4E5E5
                        padding-top .2rem

    .duan
        width 100%
        .tou
            border-bottom .01rem solid #999 
            font-size .16rem
            color #777777
            line-height .7rem
            height .7rem
            padding-left .2rem
            padding-right .2rem
            span 
                float left
            b
                float right
        .v-enter
            height: 0;
        .v-leave-to 
            height: 0;
        .v-enter-active 
            transition: height 0s;
        .v-leave-active
            transition: height 0s;
        .v-enter-to
            height: 100%;
        .v-leave
            height: 100%;
        .conUl
            padding 0
            .duanLi
                border-bottom 1px solid #999
                padding .3rem
                display flex
                .duanLef
                    width .6rem
                    img
                        width .5rem
                        height .5rem
                        border-radius 50%
                .duanRig
                    flex 1
                    h4
                        font-size .16rem
                    h5
                        padding-top .2rem
                        margin 0
                        font-size .16rem
                        font-weight 400
                    span
                        display block
                        font-size .12rem
                        color #E4E5E5
                        padding-top .2rem
</style>
