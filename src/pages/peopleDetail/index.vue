<template>
 <div class="peopleDetailContainer">
     <div class="peopleDetail bg-white">
            <div class="people_info">
                <div class="name">
                    <text class="cuIcon-newsfill lg text-cyan "></text>
                    <p>{{peopleDetail.username}}同学</p>
                </div>
                <div class="info">
                    <div class="garde">
                        <p >{{peopleDetail.grade}}</p>
                    </div>
                    <div class="major">
                        <p>{{peopleDetail.major}}</p>
                    </div>
                    <div class="school">
                        <p>{{peopleDetail.school}}</p>
                    </div>
                </div>
                <div class="people_skill">
                    <div class="skill_Info">
                        <text class="cuIcon-squarecheck lg text-cyan"></text>
                        <p>个人技能 ：</p>
                    </div>
                    <div class="skillList">
                         <p v-for="(skill,idx) in peopleDetail.skills" :key="idx" class="skill cu-tag bg-cyan">{{skill}}</p>
                    </div>
                </div>  
            </div> 
         <div class="people-type">
             <p>{{peopleDetail.type}}</p>
         </div>       
     </div>
     <div class="peopleRate bg-white">
         <div class="Rate_info" v-for="(star,idx) in peopleDetail.stars" :key="idx">
             <text class="lg text-cyan" :class="'cuIcon-' + Name[idx]" ></text>
             <p>{{starName[idx]}} ：</p>
             <my-rate :value='star' readonly='false' @onRate='myvalue' size='40rpx' length='5'/>
         </div>
     </div>
     <div class="peopleHonor bg-white">
         <div class="honor_info">
            <text class="cuIcon-upstagefill lg text-cyan"></text>
            <p>个人荣耀 </p>
            <span class="cut"></span>
         </div>
         <div class="honor">
             <div class="info" v-for="(prize,idx) in peopleDetail.prizes" :key="idx">
                 <text class="cuIcon-title lg text-cyan"></text>
                 <p>{{prize}}</p>
             </div>
        </div>    
     </div>
     <div class="peopleHonor bg-white">
         <div class="honor_info">
            <text class="cuIcon-newshotfill lg text-cyan"></text>
            <p>个人经历 </p>
            <span class="cut"></span>
         </div>
         <div class="experience">
             <span>{{peopleDetail.introduce}}</span>
        </div>    
     </div>
     <div class="peopleHonor bg-white">
         <div class="honor_info">
            <text class="cuIcon-newshotfill lg text-cyan"></text>
            <p>个人经历 </p>
            <span class="cut"></span>
         </div>
         <div class="experience">
             <span>我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人我是西南科技大学最帅的人</span>
        </div>    
     </div>
     <div class="share_button bg-white">
         <button class="get_contact cu-btn block bg-cyan margin-tb-sm lg"  @tap="showModal" data-target="DialogModal2"><text class="cuIcon-communityfill bg-cyan "></text>联系对方</button>
         <button class="share cu-btn block bg-white margin-tb-sm lg" open-type = 'share' role="button" aria-disabled="false"><text class="cuIcon-share ">分享</text></button>
         
     </div>

     <div class="cu-modal" :class="modalName=='DialogModal2'?'show':''">
			<div class="cu-dialog">
				<div class="cu-titile bg-cyan ">
					<div class="content">联系对方</div>
					<div class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</div>
				</div>
				<div class="padding-xl">
					联系方式：657115645
				</div>
				<div class="cu-bar bg-white">
					<div class="action margin-0 flex-sub text-cyan " >
						<text class="cuIcon-copy"></text>复制</div>
					<div class="action margin-0 flex-sub text-cyan solid-left" @tap="hideModal">取消</div>
					<div class="action margin-0 flex-sub  solid-left" @tap="hideModal">确定</div>
				</div>
			</div>
		</div>
     </div>
    
 </div>
</template>

<script>
import MyRate from '../../components/myRate';
export default {
 data() {
  return {
      modalName: null,
      childvalue:'',
      peopleDetail:{},
      starName:['沟通能力','性格指数','团队配合度'],
      Name:['message','wefill','link']
  }
 },
 components:{
        MyRate
    },
 
 beforeMount(){
    wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#1cbbb4',
    })
 },
 mounted(){
     this.peopleDetail=JSON.parse(this.$mp.query.peopleItem)
 },

onShareAppMessage(){
        return{
            title:'伯乐',
            path:"/pages/peopleDetail/main",
            
        }
     },


methods:{
    showModal(e) {
				this.modalName = e.currentTarget.dataset.target
            },
    hideModal(e) {
				this.modalName = null
            },
    myvalue(value){
        this.childvelue=value
    }
}
}
</script>

<style >
.peopleDetailContainer{
    padding: 10rpx;
    display: flex;
    flex-direction: column;
}
.peopleDetail{
    margin-top: 20rpx;
    display: flex;
    flex-direction: row;
    border-radius: 10rpx;
    box-sizing: border-box; 
}
.people_info{
    width: 75%;
    margin-left: 30rpx;
}
.name{
    display: flex;
    flex-direction: row;
    margin-top: 20rpx;
    font-size: 35rpx;
    font-weight: bold;
}
.name text{
    margin-right: 10rpx;
    line-height: 35rpx;
    margin-top: 8rpx ;
    
}
.name:first-letter{
    font-size: 40rpx;
}
.info{
    display: flex;
    flex-direction: row;
    font-size: 30rpx;
    margin-top: 30rpx;
    line-height: 40rpx;
}
.garde{
    margin-right: 20rpx;
}
.major{
    margin-right: 20rpx;
}
.people_skill{
    margin-top: 30rpx;
    line-height: 35rpx;
    font-size: 30rpx;
    margin-bottom: 40rpx;
    display: flex;
    flex-direction: row;
}
.skill_Info{
    display: flex;
    flex-direction: row;
    margin-right: 5rpx;
    line-height: 30rpx;
}
.skill_Info text{
    margin-right: 10rpx;
}
.skill{
    margin-right: 10rpx;
    padding: 5rpx 10rpx;
    border-radius: 8rpx;
    
}
.people-type{
    margin-top: 20rpx;
    color: red;
    font-size: 35rpx;
    font-weight: bold;
}
.peopleRate{
    margin-top: 10rpx;  
}
.Rate_info{
    margin-left: 30rpx;
    margin-top: 30rpx;
    font-size: 30rpx;
    line-height: 40rpx;
    display: flex;
    flex-direction: row;
    margin-bottom: 30rpx;
}
.Rate_info p{
    margin-right: 5rpx;
    width: 28%;
}
.Rate_info text{
    margin-right: 10rpx;
}
.peopleHonor {
     margin-top: 10rpx;
     font-size: 30rpx;
     display: flex;
     flex-direction: column;
}
.honor_info {
    margin-top: 30rpx;
    display: flex;
    flex-direction: row;
    margin-left: 30rpx;
    line-height: 40rpx;
    color: #000;
    font-size: 32rpx;
}
.honor_info text{
    margin-right: 10rpx;
}
 .honor{
    display: flex;
    flex-direction: column;
    margin-top: 10rpx;
    margin-bottom: 30rpx;
    margin-left: 30rpx;
}

.honor p{
    margin-left: 5rpx;
}
.honor text{
    margin-left: 30rpx;
    margin-top: 4rpx;
}
.cut{
    position: relative;
    margin: 21rpx auto;
    width: 70%;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 16px;
    color: rgba(101, 101, 101, 1);
}
.experience{
    margin:30rpx 50rpx;
    letter-spacing: 3rpx;
    text-indent: 2em;
}
.share_button{
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 92%;
    width: 100%;
}
.get_contact{
    width: 70%;
    height:80rpx;
    margin-top:10rpx;
    margin-bottom: 10rpx;
    margin-left: 30rpx;
    font-size: 35rpx;
    letter-spacing: 3rpx;
}
.cuIcon-communityfill{
    margin-right: 15rpx;
}
.share{
    width: 30%;
    height:80rpx;
    margin-top:10rpx;
    margin-bottom: 10rpx;
    margin-right: 30rpx;
}
.share text{                                                                                                              
    display: flex;
    flex-direction: column;
    font-size: 26rpx;
    margin-top: 5rpx;
}
.cu-dialog{
    width: 550rpx;
    height: 330rpx;
    border-radius: 10rpx;
    box-sizing: border-box; 
}
.cu-titile{
    display: flex;
    flex-direction: row;
    line-height: 40rpx;
    font-size: 36rpx;
    letter-spacing: 3rpx;
    height: 90rpx;
}
.content{
    margin-top: 30rpx;
    margin-bottom: 30rpx;
    margin-left: 200rpx;
    margin-right:140rpx ;
}
.action{
    margin-top: 30rpx;
    margin-bottom: 30rpx;
    font-weight: bold;
}
.padding-xl{
    margin-top: 55rpx;
    font-size: 32rpx;
    height: 100rpx;
}
.cu-bar{
    height: 90rpx;
    font-size: 32rpx;
}
</style>

