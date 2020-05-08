<template>
    <div class="indexContainer ">
        <div class="searchContanier bg-cyan padding radius shadow-blur">
            <p class="indexText">伯乐</p>
            <div class="search">
                 <text class="cuIcon-search "></text>
                 <input class="text-grey" confirm-type="search" type="text" placeholder="搜索" placeholder-class="placeholder"></input>
            </div>
        </div>
        <div class="showContanier">
            <div class="word">
                <b ></b>
                <span class=" jiesao text-grey">在这里可以搜到</span>
                <b></b>
            </div>
            <div class="iconlist">
                <div class="icon">
                    <div class="backcolor bg-grey light">
                        <text class="cuIcon-friendadd ser "></text>
                    </div>
                    <div class="about">
                        <p class="text-grey">找人</p>
                    </div>
                </div>
                 <div class="icon">
                    <div class="backcolor bg-grey light">
                        <text class="cuIcon-upstage ser "></text>
                    </div>
                    <div class="about">
                        <p class="text-grey">比赛</p>
                    </div>
                </div>
                 <div class="icon">
                    <div class="backcolor bg-grey light">
                        <text class="cuIcon-community ser "></text>
                    </div>
                    <div class="about">
                        <p class="text-grey">交流</p>
                    </div>
                </div>
                <div class="icon">
                    <div class="backcolor bg-grey light">
                        <text class="cuIcon-crown ser "></text>
                    </div>
                    <div class="about ">
                        <p class="text-grey">大佬</p>
                    </div>
                </div>
                <div class="icon">
                    <div class="backcolor bg-grey light">
                        <text class="cuIcon-group ser "></text>
                    </div>
                    <div class="about">
                        <p class="text-grey">团队</p>
                    </div>
                </div>
                <div class="icon">
                    <div class="backcolor bg-grey light">
                        <text class="cuIcon-newshot ser "></text>
                    </div>
                    <div class="about">
                        <p class="text-grey">项目</p>
                    </div>
                </div>
            </div>
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
    
}
}
</script>

<style >
page{
  height: 100%;
  }


.indexContainer{
    display: flex;
    flex-direction: column;
    
    
}
.searchContanier{
    height: 220rpx;
    width: 100%;
   
}
.indexText{
    font-size: 64rpx;
    margin-left: 45rpx;
    font-weight: bold;
    letter-spacing: 10rpx;
    margin-top: 15rpx;
}
.search{
    margin-top: 25rpx;
    box-sizing: border-box;
    height: 64rpx;
    border-radius: 100rpx;
    width:90%;
    font-size: 32rpx;
    background-color: #f5f5f5;
    line-height: 32rpx;
    display: flex;
    flex-direction: row;
    margin-left: 40rpx;
    color: #333333;
    vertical-align: middle;
}
 .cuIcon-search{
    margin-top: 15rpx;
    margin-left: 15rpx;
    margin-right: 20rpx;
    font-size: 35rpx;
}
.backcolor{
    width: 80rpx;
    height:80rpx;
    border-radius: 100rpx;
    z-index: -1;
}
.word{
    font-size: 30rpx;
    letter-spacing: 3rpx;
}
.jiesao{
    margin-left: 20rpx;
    margin-top:50rpx ;
    display: inline-block;
    vertical-align: middle;
    width: 215rpx;

}
.word b{
    background: #DBDBDB;
    display: inline-block;
    margin-top: 50rpx;
    width: 230rpx;
    margin-left: 20rpx;
    height: 1rpx;
    overflow: hidden;
    vertical-align: middle;
}
.ser{
    z-index: 99;
    line-height: 80rpx;
    margin-left: 20rpx;
    font-size: 45rpx;
}
.about{
    margin-top: 15rpx;
    font-size: 30rpx;
    letter-spacing: 3rpx;
    margin-left: 13rpx;
    
}
.iconlist{
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
}
.icon{
    display: flex;
    flex-direction: column;
    margin-left: 120rpx;
    margin-top: 80rpx;
}

</style>
