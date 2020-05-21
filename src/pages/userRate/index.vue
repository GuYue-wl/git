<template>
 <div class="UserRateContainer">
     <div class="button bg-cyan">
        <text class="back cuIcon-pullleft lg text-white" @tap='back'></text>
      </div>
      <div class="setp One bg-white">
        <div class="one">
           <p class="text-cyan">4 / 4</p>
           <span class="one_info text-cyan">自我评价</span>
        </div>
        <div class="about">
          <span>对自己进行简单的评价吧</span>
        </div>
        <div class="userRate">
            <div class="Rate">
                <p>沟通能力：</p>
                <my-rate value='0'  @onRate='myvalue' size='50rpx' length='5'/>
            </div>
            <div class="Rate">
                <p>性格评价：</p>
                <my-rate value='0'  @onRate='myvalue' size='50rpx' length='5'/>
            </div>
            <div class="Rate">
                <p>团队配合：</p>
                <my-rate  value='0'  @onRate='myvalue' size='50rpx' length='5'/>
            </div>
        </div>
        <button class=" bg-cyan test " role="button"aria-disabled="false" @click="toPsychological">提交</button>
        
      </div>
 </div>
</template>

<script>
import MyRate from '../../components/myRate';
export default {
    components:{
        MyRate
    },
 data() {
  return {
      childvalue:''
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
          url: '/pages/userTest/main',
      })
  },
    myvalue(value){
        this.childvelue=value
    }
}
}
</script>

<style >
.UserRateContainer{
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
.about{
  margin-left:40rpx;
  margin-top: 20rpx;
  width: 90%;
  font-size: 30rpx;
  letter-spacing: 3rpx;
}
.userRate{
    margin-left:80rpx;
    margin-top: 20rpx;
    display: flex;
    flex-direction: column;
}
.Rate{
    margin-top: 40rpx;
    display: flex;
    flex-direction: row;
}
.Rate p{
    margin-right: 60rpx;
    font-size: 35rpx;
    margin-top: 15rpx;
}
.test{
  width: 80%;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 35rpx;
  margin-top: 100rpx;
}


</style>
