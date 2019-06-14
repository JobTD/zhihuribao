<template>
 <div class="wrapper">
     <v-nav class="nav" :iscollect='iscollect' :a='ewaidata' :b='newsId' @save="collection()"></v-nav>
     <div class="box">
         <img :src="img" alt="">
     </div>
     <div></div>
     <div class="content" v-html='bo'></div>
 </div>

</template>

<script type="text/ecmascript-6">
import API from '../../commont/js/API'
import vNav from '../view/nav'
export default {
 components: {
     vNav
 },
 props: {},
 data () {
 return {
     cs:'123',
     img:'',
     bo:[],
     comments: '',
     long_comments: '',
     popularity: '',
     short_comments: '',
     ewaidata:[],
     newsId:'',
     title:'',
     iscollect:false
 };
 },
 watch: {},
 computed: {},
 methods: {
     collection(){
         var arr=localStorage.getItem('arr')?JSON.parse(localStorage.getItem('arr')):[];
         if(arr.some(item=>item.id==this.$route.params.id)){
                this.iscollect=false;
            for(var i=0;i<arr.length;i++){
                if(arr[i].id==this.$route.params.id){
                    arr.splice(i,1);
                    break;
                }
            }
         }else{// push
            this.iscollect=true;
            arr.push({
                title:this.title,
                images:this.img,
                id:this.$route.params.id
            })
         }
          localStorage.setItem('arr',JSON.stringify(arr));
     }
 },
 mounted () {
    var id=this.$route.params.id;
    var arr=localStorage.getItem('arr')?JSON.parse(localStorage.getItem('arr')):[];
    console.log(arr);
    if(arr.some(item=>item.id==this.$route.params.id)){
        this.iscollect=true;
    }else{
        this.iscollect=false;
    }
    // console.log(this.$route.params);
    
    this.newsId=id
    this.$http({
        url:API.news+id
    }).then(d=>{
    // console.log(d);
    this.title=d.data.title;
   this.img=d.data.images[0]
   this.bo=d.data.body
     }).catch()
     this.$http({
         url:API.ewai+id
     }).then(b=>{
        //  console.log(b)
         this.comments=b.data.comments
         this.long_comments=b.data.long_comments
         this.popularity=b.data.popularity
         this.short_comments=b.data.short_comments
         this.ewaidata=b.data
         
     })
 }
};
</script>

<style lang='stylus' scoped>
@import '../../commont/stylus/index.styl'

.wrapper
    width 100%
    .nav
        position fixed
        top 0
        left 0
        width 100%
    .box
        margin-top 1.2rem
        width 100%
        height 3.4rem
        img 
            display block
            width 100%
            height 100%
    .content
        width 100%
        >>>.content
            margin 0
        >>>.headline .img-place-holder
            height 0
        >>>.question-title
            margin 0
        >>>.avatar
            display inline-block
        >>>ol, ul
            list-style-type decimal 
</style>
