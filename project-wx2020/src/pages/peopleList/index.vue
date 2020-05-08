<template>
 <div class="peopleListContainer">
     <div class="peopleList bg-white" @click="toDetail" v-for="(item,i) in getdata" :key="i">
        <div class="peopleContainer">
            <div class="people_name">
                <p class="info_name">{{item.username}}同学</p>
            </div>
            <div class="people_info">
                <p class="info_grade">{{item.grade}}</p>
                <p class="info_major">{{item.major}}</p>
                <p class="info_school">{{item.school}}</p>
            </div>
            <div class="people_skill ">
                <p class="skill cu-tag bg-cyan round">{{item.prize}}</p>
                <p class="skill cu-tag bg-cyan radius">{{item.pCharacter}}</p>
            </div>
        </div>
        <div class="people-type">
                <p class="type ">{{item.wechat}}</p>
         </div>
    </div>
  
 </div>
</template>

<script>
export default {
 data() {
  return {
//    postdata:{

//   wxCondition:
//     {
//     },
//   pageSize:"2",
//    currentPage:"0"
//    },
   getdata:[]
  }
 },
 beforeMount(){
 wx.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: 'white',
})
 },
 created(){
this.getdatalist()
 },
methods:{
    toDetail(){
        wx.navigateTo({
              url: '/pages/peopleDetail/main'
        
        })
    },
    //请求数据
  getdatalist(){
    
       this.$flyio.post('/index',
       {
        "wxCondition":{},
        
   }
       ).then(res=>{
         console.log(res);
         this.getdata=res.data.list
       }).catch(error=>{
           console.log(error);
           
       })
    
         
  }
}
//   }
}
</script>

<style>
.peopleListContainer{
    padding: 10rpx;
}
.peopleList{
    margin-top: 10rpx;
    display: flex;
    flex-direction: row;
    border-radius: 10rpx;
    box-sizing: border-box; 
}
.peopleContainer{
    display: flex;
    flex-direction: column;
    margin: 20rpx;
    margin-left: 30rpx;
    width: 70%;
}
.people_name{
    font-size: 38rpx;
    font-weight: bold;
    letter-spacing: 2rpx;
    margin-top: 10rpx;
}
.info_name:first-letter{
    font-size: 45rpx;
    margin-right: 5rpx;
}
.people_info{
    margin-top: 20rpx;
    display: flex;
    flex-direction:row;
    font-size: 30rpx;
}
.info_grade{
    margin-right: 20rpx;
}
.info_major{
    margin-right: 20rpx;
}
.people_skill{
    margin-top: 20rpx;
    font-size: 30rpx;
}
.skill{
    margin-right: 20rpx;
     border-radius: 5rpx;
    box-sizing: border-box;
    line-height: 40rpx;
    padding: 5rpx 10rpx;
    border-radius: 8rpx;
}
.people-type{
    font-size: 35rpx;
    font-weight: bold;
    margin-top: 35rpx;
    text-align: right; 
}
.type{
    margin-right: 20rpx;
}
</style>
