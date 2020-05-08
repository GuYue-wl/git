<template>
 <div class="UserDetailContainer">
     <div class="button bg-cyan">
        <text class="back cuIcon-pullleft lg text-white" @tap='back'></text>
        <text class="go cuIcon-pullright lg text-white" @tap='go'></text>
      </div>
      <div class="setp One bg-white">
        <div class="one">
           <p class="text-cyan">1 / 4</p>
           <span class="one_info text-cyan">基本信息</span>
        </div>
        <div class="about">
          <span>简单介绍一下自己吧</span>
        </div>
        <div class="user_info">
            <div class="Info">
                <p>姓名</p>
                <input type="text" class="name input" placeholder="请输入姓名" v-model="userdetail.username">
                <b class="cut"></b>
            </div>
            <div class="Info">
                <span>专业</span>
                <input type="text" class="major input" placeholder="例 会计专业" v-model="userdetail.major">
                <b class="cut"></b>
            </div>
            <div class="Info">
                <span>年级</span>
                <text class=" jiantou cuIcon-right lg text-gray" ></text>
                <input type="text" class="garde input" placeholder="例 大二" v-model="userdetail.grade">
                <b class="cut"></b>
            </div>
            <div class="Info">
                <span>学校</span>
                <text class=" jiantou cuIcon-right lg text-gray" ></text>
                <input type="text" class="school input" placeholder="例 西南科技大学" v-model="userdetail.school">
                <b class="cut"></b>
            </div>
            <div class="Info">
                <span>联系方式</span>
                <input  type="text" class="phone input" placeholder="请输入联系方式" v-model="userdetail.phone">
                <b class="cut"></b>
            </div>
        </div>
      </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
   userdetail:{
     username:'',
     major:'',
     grade:'',
     school:'',
     phone:''
   }
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
      wx.switchTab({
        url: '/pages/index/main',
      })
  },
     go(){
      wx.setStorageSync('onedata',this.userdetail)
      console.log(wx.getStorageSync('onedata'));
      
      wx.navigateTo({
          url: '/pages/userHonor/main',
      })
  },
}
}
</script>

<style >
.UserDetailContainer{
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
  height: 1000rpx;
  
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

.test{
  width: 80%;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 35rpx;
}
.about{
  margin-left:40rpx;
  margin-top: 20rpx;
  width: 90%;
  font-size: 32rpx;
  letter-spacing: 3rpx;
}
</style>
