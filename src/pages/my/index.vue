<template>
 <div class="myContainer">   
     <div class="userContainer nav-li bg-cyan">
            <div v-if="isShow" class="index">
                <img :src="userInfo.avatarUrl" alt="" class="img_user">
                <p  class="user_name">{{userInfo.nickName}}</p>
            </div>
            <div v-else class="index">
                <img src="/static/images/personal.png" alt="" class="img_user">
                <Button  class="user_name2" open-type="getUserInfo" @getuserinfo="getUserInfo">登录</Button>
            </div>
     </div> 
     <div class="userother">
         <div class="product_about bg-white" >
            <span>产品说明</span>
            <text class="cuIcon-right lg text-gray"></text>
         </div>
         <div class="product_about bg-white" >
            <span>产品说明</span>
            <text class="cuIcon-right lg text-gray"></text>
         </div>
     </div>
 </div>
</template>

<script>
export default {
    data(){
        return{
            userInfo: {},
            isShow: false

        }
    },
    beforeMount(){
       this.handleGetUserInfo()
      
        wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#1cbbb4',
        })
        wx.setNavigationBarTitle({
        title: '我的'
})

    },
    methods:{
     

    handleGetUserInfo(){
        wx.getUserInfo({
          success: (data) => {
            console.log(data);
            // 更新data中的数据
            this.userInfo = data.userInfo
            this.isShow = true;
          },
          fail: () => {
            console.log('获取失败');
          }
        })
      },
   getUserInfo(data){
       console.log(data)
        // 判断用户是否授权
        if(data.mp.detail.rawData){
          // 用户授权
          this.handleGetUserInfo()
        }
      },
    }
    
}
</script>

<style >
.userContainer{
  
    width: 100%;
    height: 400rpx;
    
}
.img_user{
    width: 150rpx;
    height: 150rpx;
    border-radius: 100rpx;
    vertical-align: middle;
    margin-left: 40%;
    margin-top: 100rpx;
    z-index: 99;
    
}
.index{
    display: flex;
    flex-direction: column;
}
.user_name{
    font-size: 32rpx;
    height: 100rpx;
    margin-left:38%;
    max-width:200rpx;
    line-height:60rpx;
    margin-top: 30rpx;
}
.user_name2{
    font-size: 32rpx;
    height: 60rpx;
    margin-left:41%;
    max-width:200rpx;
    line-height:60rpx;
    margin-top: 30rpx;

}
.userother{
    padding-top: 40rpx;
}
.product_about{
        width:96%;
        height:80rpx;
        line-height:80rpx;
        margin:5rpx auto;
        border-radius: 10rpx;
        box-sizing: border-box;    
}
.product_about span{
     font-size: 32rpx;
    margin-left: 20rpx;
}
.cuIcon-right{
    font-size: 32rpx;
    float:right;
}

</style>
