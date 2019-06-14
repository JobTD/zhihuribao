<template>
 <div class="wrapper" @touchstart.stop='start($event)'
     @touchmove.stop='move($event)' @touchend.stop='end()'>
     <div :class='classN' @touchstart='startb($event)' @touchmove='moveb($event)'  @touchend='endb()' ref="box">
         <div class="dl" @touchend.stop='endc($event)'>
             <div class="tou">
                 <div class="touTop">
                     <div></div><p>请登录</p>
                 </div>
                 <div class="touBot">
                     <div class="touBLef" id="sc">
                         <b class="iconfont icon-shoucang"></b><span  @touchend="tosc()">
                             我的收藏
                         </span>
                     </div>
                     <div class="touBRig">
                         <b class="iconfont icon-download-img"></b><span>
                             离线下载
                         </span>
                     </div>
                 </div>
                 
             </div>
             <div class="shou" @touchend='homeend($event)' @touchmove='homemove($event)'>
                 <b class="iconfont icon-shouye4"></b><span>首页</span>
             </div>
             <router-view></router-view>
         </div>
     </div>
     <div class="nav">
         <div class='navLeft'><b 
         class="iconfont icon-gengduocaidanxianxing" @touchstart='starta($event)' @touchmove='movea($event)' @touchend='enda()'></b><span>{{title}}</span></div>
         <div class='navRight'><b class="iconfont icon-gonggaotongzhi"></b><span class="iconfont icon-gengduozhanshi"></span></div>
     </div>
          <mt-swipe :auto="2000" class="banner">
            <mt-swipe-item  v-for="item in banner" :key='item.id'><img :src="item.image" alt="" @touchmove='toxqmove($event)' @touchend='toxqend(item.id)'>
            <p class="tit">{{item.title}}</p>
            </mt-swipe-item>
            <!-- <mt-swipe-item class="ban"><img src="http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg" alt="">
            <p class="tit">小事 · 医生的医德变样了吗？</p>
            </mt-swipe-item> -->
        </mt-swipe> 
    <div class="day" v-for="(item,index) in news" :key="index" @touchend='en()'  @touchmove='mo($event)'  @touchstart='st($event)'>
        <span class="time">{{item.date|timer1Filter}}</span>
        <div class="card" v-for="(litItem,zindex) in item.stories" :key="zindex" @touchmove='toxqmove($event)' @touchend='toxqend(litItem.id)'>
            <p>{{litItem.title}}</p>
            <div @touchstart='startt($event)' @touchend='endt()' @touchmove='movet($event)'><img :src="litItem.images" alt=""></div>
        </div>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
import API from '../../commont/js/API'
export default {
 components: {},
 props: {},
 data () {
 return {
     banner:[],
     news:[],
     time:'',
     title:'首页',
     g:new Date().valueOf(),
     f:24*60*60*1000,
     k:new Date().valueOf()+24*60*60*1000,
     startX:0,
     endX:0,
     startY:0,
     endY:0,
     classN:'yonghu'
 };
 },
 watch:{

 },
 computed: {},
  mounted () {
        var d = this.k
        d= new Date(d)
        var c = d.getFullYear()
        var a = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)
        var b = d.getDate()> 9 ? d.getDate(): '0' + (d.getDate())
        var da = c + a + b 

        var j = this.g
        j= new Date(j)
        var m = j.getFullYear()
        var n = j.getMonth() + 1 > 9 ? j.getMonth() + 1 : '0' + (j.getMonth() + 1)
        var p = j.getDate()> 9 ? j.getDate(): '0' + (j.getDate())
        var df = m + n + p 
        
     this.$http({
         url:API.index
     }).then(z=>{
        //  console.log(z);
         this.banner=z.data.top_stories
     })
     this.$http({
         url:API.date+da
     }).then(y=>{
        //  console.log(y);
         this.news.push(y.data)
         this.$http({
         url:API.date+df
     }).then(x=>{
        //  console.log(x); 
         this.news.push(x.data)
     })
     })
     
      
    //  window.addEventListener("scroll", this.scrollBottom);
    //  window.addEventListener("scroll", this.scroll);
var that = this;
 window.onscroll = function() {
      var wh =
        document.documentElement.clientHeight || document.body.clientHeight; //窗口的高度
      var st = document.documentElement.scrollTop || document.body.scrollTop; //上卷的距离

      var dh =
        document.documentElement.offsetHeight || document.body.offsetHeight;
      if (st < 200) {
        that.title = "首页";
      } else {
        var times = document.querySelectorAll(".time");
        for (var i = 0; i < times.length; i++) {
          if (times[i].getBoundingClientRect().top+ st < st + wh) {
              if(times[i-1]){
                  if(times[i-1].getBoundingClientRect().top){
                    that.title = times[i-1].innerHTML;
                  }
              }else{
                    that.title = times[i].innerHTML;
              }
            
          }
        }
      }
    };
 },
 methods: {
tosc(){
    this.$('#sc').css('color','yellow')
    this.$router.push('/index/shoucang')
},
    start(e){
        this.startX=e.touches[0].clientX;
        this.endX=0;
       
        
    },
    move(e){
        this.endX=e.touches[0].clientX;
        // console.log(this.endX);

    },
    end(){
        if(this.endX!=0){
            console.log(this.endX,this.startX);
            if(this.endX>this.startX+200){
                this.classN='yonghu show'
                this.$(".dl").css('display','block')
            }else if(this.endX+30<this.startX){
                this.classN='yonghu'
                this.$(".dl").css('display','none')
            }
        }
    },
    starta(e){
        this.startX=e.touches[0].clientX;
        this.endX=0;   
    },
    movea(e){
        this.endX=e.touches[0].clientX;
        // console.log(this.endX);

    },
    enda(){
         if(this.endX==0){
                this.classN='yonghu show'
                 this.$(".dl").css('display','block')
        }
    },
    startb(e){
        
        e.preventDefault();
    },
    moveb(e){
        e.stopPropagation()
        e.preventDefault();
    },
    endb(e){
        this.classN='yonghu'
        this.$(".dl").css('display','none')
    },
    endc(e){

    },
    st(e){
        this.startY=e.touches[0].clientY;
        this.endY=0;   
    },
    mo(e){
        this.endY=e.touches[0].clientY;
    },
    en(){
        if(this.endY!=0){
        if(this.endY+200<this.startY){
        var boxhight = this.$refs.box.clientHeight
        if(boxhight<=document.documentElement.clientHeight+document.documentElement.scrollTop+100){
           
        this.g=this.g-this.f
        var date=new Date(this.g)
        var c = date.getFullYear()
        var a = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
        var b = date.getDate()> 9 ? date.getDate(): '0' + (date.getDate())
        var db = c + a + b
        this.$http({
            url:API.date+db
        }).then(y=>{
         this.news.push(y.data)
     })
        }
            }
        var top=document.documentElement.scrollTop || document.body.scrollTop;
        var a = document.getElementsByClassName('day')[0]
       
        }
    },
homemove(e){
    this.endX=e.touches[0].clientX;
},
homeend(e){
 if(this.endX==0){
    //  this.classN='yonghu'
     this.$router.push('/index')
     this.$('#sc').css('color','#fff')
        // this.$(".dl").css('display','none')
 }
},
 //跳详情
toxqmove(e){
this.endX=e.touches[0].clientX;
console.log('hdjfh');

},
toxqend(a){
    if(this.endX==0){
        console.log('cg');
        
      this.$router.push('/xiangqing/'+a)  
    }
}
 }

};
</script>
<style lang='stylus' scoped>
@import '../../commont/stylus/index.styl'
.wrapper
    background $bgColor
    .yonghu
        height 100%
        width 100%
        
        position fixed
        z-index 3
        top 0
        left -100%
        transition left 0.4s;
        diplay none
    .show
        left 0
        transition all 0.4s;
        background rgba(0,0,0,0.4)
        .dl
            width 77%
            height 100%;
            background $fontColor
            z-index 99
            overflow hidden
            .tou
                height 15%;
                width 100%
                background $navColor
                z-index 3
                .touTop
                    div
                        float left
                        width .7rem
                        height .7rem
                        border-radius 50%
                        background url('http://depot.nipic.com/file/20161021/23640634_11415416727.jpg') no-repeat
                        background-size 100% 100%
                        margin-top .18rem
                        margin-left .32rem
                    p
                        float left  
                        font-size .32rem
                        color $fontColor     
                        margin-top .3rem
                        margin-left .22rem
                .touBot
                    width 100%
                    height 50%
                    display flex
                    .touBLef
                        flex 1
                        text-align center
                        padding-top .2rem
                        color $fontColor
                        // background red 
                        b
                            padding-right .3rem
                        span 
                            font-size .26rem

                    .touBRig
                        flex 1 
                        text-align center
                        padding-top .2rem
                        margin-right .1rem
                        color $fontColor
                        // background red 
                        b
                            padding-right .3rem
                        span 
                            font-size .26rem               
            .shou
                width 100%
                background $cardborder
                padding-bottom .1rem
                padding-left .3rem
                b
                    font-size .44rem
                    color $navColor
                    line-height .8rem
                span
                    font-size .3rem
                    color $navColor
                    line-height .3rem
                    padding-left .28rem
    .nav
        width 100%
        height $navH
        background $navColor
        position fixed
        left 0
        top 0
        z-index 2

        font-size .4rem
        .navLeft
            width 50%
            float left 
            text-align left
            padding-left .4rem
            b
                display block
                float left
                font-size .5rem
                color $fontColor
                line-height 1.3rem
            span
                float left
                display block
                font-size .38rem
                color $fontColor
                line-height 1.2rem
        .navRight
            float right
            text-align right
            padding-right .4rem
            b
                display block
                float left
                font-size .5rem
                color $fontColor
                line-height 1.3rem
            span
                margin-left .5rem
                float left
                display block
                font-size .44rem
                color $fontColor
                line-height 1.2rem
    .banner
        margin-top 1.2rem
        height 4rem
        width 100%
        img
            width 100%;
            height 100%
        .tit
            position absolute
            bottom .4rem
            left 0
            width 100%;
            text-align center
            font-size .32rem
            color $fontColor
    .card
        height 1.7rem
        margin .2rem
        background $fontColor
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
    .time
        display block
        padding-left .2rem
        padding-top .2rem
        font-size .22rem 
        line-height .5rem
        color #877E7E
</style>