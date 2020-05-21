<template>
 <div class="UserTestContainer">
     <div class="button bg-cyan">
        <text class="back cuIcon-pullleft lg text-white" @tap='back'></text>
        <text class="go cuIcon-pullright lg text-white" @tap='go'></text>
     </div>
     <div class="setp Three bg-white" >
        <div class="one">
           <p class="text-cyan">3 / 4</p>
           <span class="one_info text-cyan">属性测试</span>
        </div>
        <div class="about">
          <span>您愿意花费3分钟测试您在团队中的属性</span>
        </div>
        <div class="img">
          <img src="/static/images/test.png" alt="">
        </div>
        <button class=" bg-cyan test " role="button"aria-disabled="false" @click="toPsychological">点击进入团队位置测试</button>
      </div>
 </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 beforeMount(){
 wx.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: '#1cbbb4',
})
 },
methods:{
  back(){
      wx.navigateTo({
          url: '/pages/userHonor/main',
      })
  },
     go(){
      wx.navigateTo({
          url: '/pages/userRate/main',
      })
  },
  toPsychological(){
     wx.navigateTo({
              url: '/pages/psychological_test/main'
        })
  }
}
}
</script>

<style >
.UserTestContainer{
  display: flex;
  flex-direction: column;
}
.button{
  font-size: 64rpx;
  height: 200rpx;
 
}
.back{
  margin-top: 10rpx;
  float: left;
  margin-left: 10rpx;
  width: 50%;
}
.go{
  margin-top: 10rpx;
  float: right;
  margin-right: 10rpx;
}
.setp {
  position: absolute;
  width: 95%;
  align-content: center;
  margin: 100rpx 20rpx;
  border-radius: 10rpx;
  border: 1px solid #eee;
  z-index: 99;
  height: 1200rpx;
  
}
.one {
  margin-top: 20rpx;
  margin-left:40rpx;
  display: flex;
  flex-direction: column;
}
.one p{
  font-size: 30rpx;
  letter-spacing: 5rpx;
  font-weight: bold;
  width: 20%;
}
.one p:first-letter{
  font-size: 50rpx;
}
.one_info{
  font-size: 35rpx;
  margin-top: 12rpx;
  font-weight: bold;
  letter-spacing: 5rpx;
  width: 25%;
}

.user_info{
  margin-left: 40rpx;
  font-size: 30rpx;
  letter-spacing: 2rpx;
}
.Info{
  margin-top:20rpx;
  display: flex;
  flex-direction: column;
}
.input{
  font-size: 33rpx;
  
  margin-top: 15rpx;
  color: black;
}
.jiantou{
  position: absolute;
  margin-left: 580rpx;
  margin-top: 65rpx;
}
.cut{
    background: #DBDBDB;
    margin-top: 15rpx;
    width: 90%;
    height: 1rpx;
    overflow: hidden;
    vertical-align: middle;
}

.add{
  display: flex;
  flex-direction: row;
}
.cu-btn{
  width: 40rpx;
  height: 40rpx;
  border-radius: 500rpx;
  padding: 0;
  position: absolute;
  margin-left: 580rpx;
  margin-top: 20rpx;
}
.about{
  margin-left:40rpx;
  margin-top: 20rpx;
  width: 90%;
  font-size: 32rpx;
  letter-spacing: 3rpx;
}
.test{
  width: 80%;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 35rpx;
}
.img{
  margin-top: 50rpx;
}


</style>
