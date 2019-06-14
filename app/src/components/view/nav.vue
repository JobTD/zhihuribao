<template>
 <div class="wrapper">
     <div class="left">
       <span class="iconfont icon-fanhui"  @touchmove='tosymove($event)' @touchend='tosyend()'></span>  
     </div>
     <div class='right'>
         <span class="iconfont icon-fenxiang" @touchmove='tkmove($event)' @touchend='tkend($event)'></span>

         <span :class="[iscollect?'iconfont icon-shoucang red':'iconfont icon-shoucang']" @touchstart='save()'></span>

         <span class="iconfont icon-pinglun" @touchmove='topinmove($event)' @touchend='topinend(b)'>&nbsp;{{a.comments}}</span>
         <span :class="Cdz" @touchmove='dzmove($event)' @touchend='dzend()'><i>{{a.popularity|dianzanFilter}}</i></span>
     </div>
     <div :class='Name' @touchstart.prevent='tstart($event)' @touchmove.prevent='tmove($event)' @touchend.prevent='tend($event)'>
         <div class="sb" @touchmove.stop='ttmove($event)' @touchend.stop='ttend($event)'>
             <div class="bdsharebuttonbox" data-tag="share_1">
                <a class="bds_mshare" data-cmd="mshare"></a>
                <a class="bds_qzone" data-cmd="qzone" href="#"></a>
                <a class="bds_tsina" data-cmd="tsina"></a>
                <a class="bds_baidu" data-cmd="baidu"></a>
                <a class="bds_renren" data-cmd="renren"></a>
                <a class="bds_tqq" data-cmd="tqq"></a>
	            <a class="bds_more" data-cmd="more">更多</a>
	            <a class="bds_count" data-cmd="count"></a>
            </div>
             <h5>分享</h5>
             <div class="fenx">
             <div>
                 <b class="iconfont icon-weibo"></b>
                 <span>微博</span>
             </div>
               <div>
                 <b class="iconfont icon-pengyouquan"></b>
                 <span>朋友圈</span>
             </div>
               <div>
                 <b class="iconfont icon-qq"></b>
                 <span>QQ</span>
             </div>
               <div>
                 <b class="iconfont icon-weixindenglu "></b>
                 <span>微信</span>
             </div>
               <div>
                 <b class="iconfont icon-fenxiang_yinxiangbiji"></b>
                 <span>印象笔记</span>
             </div>
              <div>
                 <b class="iconfont icon-youdaoyunbiji"></b>
                 <span>有道云笔记</span>
             </div>
              <div>
                 <b class="iconfont icon-gengduo"></b>
                 <span>更多</span>
             </div>
             </div>
             
         </div>
     </div>
 </div>
 
 
</template>

<script type="text/ecmascript-6">
import API from '../../commont/js/API'
import Arry from '../commont/Arry'
export default {
    props:['a','b','iscollect'],
 components: {
     
 },
 data () {
 return {
     endX:0,
     startX:0,
     Csc:'iconfont icon-shoucang',
     Cdz:'iconfont icon-dianzan3',
     Name:'zz'
 };
 },
 watch: {},
 computed: {},
 methods: {
     save(){
         this.$emit('save')
     },
tosymove(e){
    this.endX=e.touches[0].clientX;
},
tosyend(){
if(this.endX==0){
    this.$router.go(-1) 
}
},
scmove(e){
   this.endX=e.touches[0].clientX; 
},
scend(){
if(this.endX==0&&this.Csc=='iconfont icon-shoucang'){

 this.Csc='iconfont icon-shoucang red'
}else if(this.endX==0&&this.Csc=='iconfont icon-shoucang red'){

 this.Csc='iconfont icon-shoucang'
}
 },
 dzmove(e){
   this.endX=e.touches[0].clientX; 
},
dzend(){
if(this.endX==0&&this.Cdz=='iconfont icon-dianzan3'){
     Arry.arry.push(this.b)
    this.Cdz='iconfont icon-dianzan3 red'
    this.a.popularity=Number(this.a.popularity)+1
}else if(this.endX==0&&this.Cdz=='iconfont icon-dianzan3 red'){
      for(var i = 0; i < Arry.arry.length; i++) {
       if(Arry.arry[i] == this.b) {
        Arry.arry.splice(i, 1);
     }
   }
    this.Cdz='iconfont icon-dianzan3'
    this.a.popularity=Number(this.a.popularity)-1
}
},
topinmove(e){
  this.endX=e.touches[0].clientX; 
},
topinend(id){
    if(this.endX==0){
    this.$router.push('/pinlun/'+id)     
    }
},
tkmove(e){
    this.endX=e.touches[0].clientX;
},
 tkend(e){
if(this.endX==0){
    //   if(e.stopPropagation){
    //      e.stopPropagation()
    //      }else{
    //   e.cancelBubble=true;
    //     }
    this.$('.zz').fadeIn()
}
 },
 tstart(e){
        this.startX=e.touches[0].clientX;
        this.endX=0;
 },
 tmove(e){
    this.endX=e.touches[0].clientX;
},
 tend(e){
if(this.endX==0){
     if(e.stopPropagation){
        e.stopPropagation()
    }else{
        e.cancelBubble=true;
         }
    this.$('.zz').fadeOut()
}else{

}
 },
 ttmove(e){
 this.endX=e.touches[0].clientX;
},
ttend(e){
    if(this.endX==0){
        if(e.stopPropagation){
        e.stopPropagation()
    }else{
        e.cancelBubble=true;
         }
    }
}
},
mounted () {
    console.log(Arry.arry);
    console.log(this.b);
   var index = Arry.arry.indexOf(this.b); 
   console.log(index);
    if (index > -1) {
        this.Cdz='iconfont icon-dianzan3 red'
    this.a.popularity=Number(this.a.popularity) 
}
 }
}
</script>
<style lang='stylus' scoped>
@import '../../commont/stylus/index.styl'
.wrapper
    height $navH
    background $navColor
    .zz
        width 100%;
        height 100%
        padding-top 50%
        background rgba(0,0,0,0.2)
        position fixed
        top 0;
        left 0;
        display none
        z-index 2
        .sb
            background #fff
            width:71%
            height 40%
            margin-left 10%
            z-index 3
            padding 4%
            h5
                font-size .33rem
                font-weight 500
            .fenx
                width 100%
                overflow hidden
                div
                    width 29%
                    padding 1.5%
                    float left
                    b
                        font-size .8rem
                        display block
                        text-align center
                        line-height 1.2rem
                        color #49C749
                    .icon-youdaoyunbiji
                        color #91ABF7
                    .icon-qq
                        color #495CC7
                    .icon-weibo
                        color #FF3C01
                    span
                        display block
                        font-size .10rem
                        text-align center
                        line-height .1rem

    .show
        display block
    .left
        width 30%
        line-height 1.2rem
        color $fontColor
        float left
        span
            margin-left .5rem
        
    .right
        text-align center
        width 70%
        line-height 1.2rem
        color $fontColor
        float left
        span 
            margin-left .40rem
            i
                color white
        .red
            color red
        .a
            list-style none
        </style>