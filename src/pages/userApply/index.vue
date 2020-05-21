<template>
    <div class="userApplyContainer bg-white">
      <div class="button bg-cyan"></div>
      <div class="img bg-white">
          <img src="/static/images/jianli2.png" alt="">
      </div>
      <div class="setp One " >
        <div class="one">
           <span class="one_info text-cyan">基本信息</span>
           <text class="cuIcon-writefill lg text-cyan " @click="toUserDetail"></text>
        </div>
        <div class="user_info">
            <div class="Info">
                <span>姓名：</span>
                <p>古悦</p>
            </div>
            <div class="Info">
                <span>专业：</span>
                <p>物联网工程</p>
            </div>
            <div class="Info">
                <span>年级：</span>
                <p>大二</p>     
            </div>
            <div class="Info">
                <span>学校：</span>
                <p>西南科技大学</p>          
            </div>
            <div class="Info">
                <span>联系方式：</span>
                <p>657115645</p>
            </div>
        </div>  
      </div>
      <div class="setp One  bg-white" >
        <div class="one">
           <span class="one_info text-cyan">个人技能</span>
           <text class="cuIcon-writefill lg text-cyan " @click="toUserHonor"></text>
        </div>
        <div class="user_skill">
          <div class="skill">
            <p class="cu-tag bg-red">MYSQl</p>
          </div>
          <div class="skill">
            <p class="cu-tag bg-red">视频剪辑</p>
          </div>
          <div class="skill">
            <p class="cu-tag bg-red">硬件制作</p>
          </div>
        </div>
      </div>  
      <div class="setp One  bg-white" >
          <div class="one">
              <span class="one_info text-cyan">个人荣誉</span>
              <text class="cuIcon-writefill lg text-cyan " @click="toUserHonor"></text>
          </div>
          <div class="user_honor">     
             <div class="honor">
                 <text class="cuIcon-title lg text-cyan"></text>
                 <p>微信小程序大赛全国三等奖</p>
             </div>
             <div class="honor">
                 <text class="cuIcon-title lg text-cyan"></text>
                 <p>西南科技大学最帅大学生</p>
             </div>   
          </div>
      </div>  
      <div class="setp One  bg-white" >
          <div class="one">
              <span class="one_info text-cyan">个人经历</span>
              <text class="cuIcon-writefill lg text-cyan " @click="toUserHonor"></text>
          </div>
          <div class="experience">
             <span>我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人</span>
        </div>  
      </div>  
      
    
    
    
    
    </div>

</template>

<script>

export default {
 data() {
  return {
        getdata:[]
  }
 },
 beforeMount(){
 wx.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: '#1cbbb4',
})
 },
 created(){
    this.getdatalist()
 },
 
methods:{
  toUserDetail(){
    wx.navigateTo({
      url: '/pages/userDetail/main',
    })
  },
  toUserHonor(){
    wx.navigateTo({
      url: '/pages/userHonor/main',
    })
  },
  getdatalist(){
       this.$flyio.post('/info',
       {  
   }
       ).then(res=>{
         console.log(res);
        this.getdata=res.data.list;
        for(let i =0; i<this.getdata.length; i++){
            this.getdata[i]['skills'] = this.getdata[i].skill.split('-');
            this.getdata[i]['prizes'] = this.getdata[i].prize.split('-');
            this.getdata[i]['stars'] = this.getdata[i].stars.split('-');
        }
       }).catch(error=>{
           console.log(error);
       })     
  }
}
}
</script>

<style >

.userApplyContainer{
  display: flex;
  flex-direction: column;
}
.button{
  position: relative;
  width: 100%;
  height: 200rpx;
  overflow: hidden; 
  border-radius: 0 0 100% 100%;
  z-index: 0;
}
.img{
  position: absolute;
  width: 150rpx;
  height: 150rpx;
  border-radius: 100rpx;
  margin-left: 40%;
  margin-top: 125rpx;
  z-index: 1;
  border: 1px solid #eee;
  
}
.img img{
  width: 100rpx;
  height: 100rpx;
  margin-left: 28rpx;
  margin-top: 30rpx;
}

.setp {
  align-content: center;
  z-index: 99; 
  margin-top: 100rpx;
}
.one {
  margin-left:40rpx;
  display: flex;
  flex-direction: row;
}
.cuIcon-writefill{
  position: absolute;
  margin-left: 440rpx;
  margin-top: 2rpx;
}
.one_info{
  font-size: 35rpx;
  font-weight: bold;
  letter-spacing: 5rpx;
  width: 25%;
  margin: auto;
  
}
.user_skill{
  margin-left: 80rpx;
  font-size: 30rpx;
  display: flex;
  flex-direction: row;
  letter-spacing: 2rpx;
  margin-top: 30rpx;
}

.user_info{
  margin-left: 80rpx;
  font-size: 30rpx;
  letter-spacing: 2rpx;
}
.user_honor{
  margin-left: 80rpx;
  font-size: 30rpx;
  display: flex;
  flex-direction: column;
  letter-spacing: 2rpx;;
  margin-top: 30rpx;
}

.Info{
  margin-top:20rpx;
  display: flex;
  flex-direction: row;
  margin-bottom: 30rpx;
}
.Info span{
  margin-top: 30rpx;
  margin-right: 20rpx;
  font-size: 30rpx;
  font-size: 32rpx;
}
.Info p{
  margin-top: 30rpx;
  font-size: 30rpx;
}
.skill{
  margin-top:20rpx;
  margin-bottom: 30rpx;
  margin-right: 90rpx;
}
.honor{
  margin-top:20rpx;
  margin-bottom: 30rpx;
  display: flex;
  flex-direction: row;
  line-height: 40rpx;
}
.cuIcon-title{
  margin-right: 20rpx;
}
.experience{
    margin:30rpx 50rpx;
    letter-spacing: 3rpx;
    text-indent: 2em;
    font-size: 30rpx;
}
</style>

