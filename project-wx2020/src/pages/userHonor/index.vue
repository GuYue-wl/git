<template>
 <div class="UserHonorContainer">
     <div class="button bg-cyan">
        <text class="back cuIcon-pullleft lg text-white" @tap='back'></text>
        <text class="go cuIcon-pullright lg text-white" @tap='go'></text>
     </div>
     <div class="setp Two bg-white" >
        <div class="one">
           <p class="text-cyan">2 / 4</p>
           <span class="one_info text-cyan">个人成就</span>
        </div>
        <div class="about">
          <span>让我们看到你的荣耀与经历吧</span>
        </div>
        <div class="user_info">
            <div class="Info">
                <span>个人技能</span>
                <div class="skill" v-for="(skill,i) of skills" :key='i'>
                  <div class="add">
                    <input  type="text" v-model="skills[i]" class="input" >  
                      <button class="cu-btn icon"role="button"aria-disabled="false" @click="AddSkillsList" v-if="i==0"> <text class="cuIcon-roundaddfill text-gray" ></text> </button>                   
                     <button class="cu-btn icon"role="button"aria-disabled="false" @click="Delete(i)"  v-else="i>0"><text class="cuIcon-roundclosefill text-gray" ></text> </button> 
                  </div>
                  <b class="cut"></b>
                </div>
            </div>
            <div class="Info">
                <span>个人奖项</span>
                <div class="skill" v-for="(honor,i) of honors" :key='i'>
                    <div class="add">
                      <input  type="text" v-model="honors[i]" class="input" >  
                      <button class="cu-btn icon"role="button"aria-disabled="false" @click="AddHonorsList" v-if="i==0"><text class="cuIcon-roundaddfill text-gray" ></text> </button>
                      <button class="cu-btn icon"role="button"aria-disabled="false" @click="removeHonorsList(i)" v-else="i>0"><text class="cuIcon-roundclosefill text-gray" ></text></button>
                    </div>
                    <b class="cut"></b>
                </div>
            </div>   
            <div class="Info">
                <span>个人介绍</span>
                <div class="backcolor">
                    <textarea type="text"  class="talk" placeholder="可以简单描述下您的个人经历或项目经历" v-model="mymessage"></textarea> 
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
    honors:[''],
    skills:[''],
    mymessage:''

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
          url: '/pages/userDetail/main',
      })
  },
     go(){
       const twodata= Object.assign(wx.getStorageSync('onedata'),{
       prize:this.honors.join('-'),
       skill:this.skills.join('-'),
       introduce:this.mymessage
    })   
    //console.log(twodata);
    wx.removeStorageSync('onedata');
    wx.setStorageSync('twodata',twodata)
      wx.navigateTo({
          url: '/pages/userTest/main',
      })
  },
   AddSkillsList(){
    if(this.skills.length<=3){
    this.skills.push('');
    }else{
      this.skills=this.skills
    }
        
        
  },
  Delete(i){
      this.skills.splice(i,1);
    
     
  },
   AddHonorsList(){
     if(this.honors.length<=3){
       this.honors.push('');
     }else{
      this.honors=this.honors

    }
       
  },
  removeHonorsList(i){
      this.honors.splice(i,1);
      
  },
}
}
</script>

<style >
.UserHonorContainer{
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
  height: 1300rpx;
  
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
.backcolor{
  margin-top: 20rpx;
  height: 200rpx;
  width: 90%;
  border: 1px solid #eee;
  background-color:ivory;
  
}
.talk{
  white-space: normal;
  word-break: break-all;
  word-wrap: break-all;
  width: 100%;
  letter-spacing: 2rpx;
  text-indent: 2em;
  margin-top: 15rpx ;
}

</style>
