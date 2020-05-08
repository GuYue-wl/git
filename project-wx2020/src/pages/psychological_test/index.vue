<template>
    <div class="testContainer" >
        <div class="backColor bg-cyan"></div>
        <div class="container bg-white" >
            <p class="container_p">题目信息</p>
            <p v-for="(item,index) in questionsArry" :key="index" v-show="index==flag" class="container_p2">{{index+1}}.
                {{item}}</p>
            <ul class="list-group">
                <li class="list-group-item" v-for="(item,index) in chooseArry" :key="index" v-show="index==flag">
                    <template v-for='(value,indexs) in item' >
                        <li :key="indexs" class="list-group-item-li" @click="getChoose(index,indexs)"  :class="{'chooseStyle':indexs==styleFlag&&myclass=='chooseStyle'}">{{value}}</li>
                   </template>
                <div style="display:flex;flex-direction: row;">
                    <button type="primary" class="btn btn-info btn-sm" @click="backQuestion(index)" v-show="flag!=0">上一题</button>
                    <button type="primary" class="btn btn-success btn-sm" @click="nextQuestion(index)" v-show="flag!=questionsArry.length-1">下一题</button>
                    <button type="primary" class="btn btn-mybtstyle btn-sm" @click="submit()" v-show="flag==questionsArry.length-1">提交</button>
                </div>
                </li>
            </ul>
         </div>   
    </div>
</template>

<script>

export default {

        data: { //数据
            myclass:'chooseStyle',
            flag:0,//做题标记
            progress:"",//进度条宽度,
            styleFlag:960519152,//选中的标记 
            answerMap:new Map(),  
            questionsArry: ["在约会中，我通常", "我倾向拥有", "你心情低落时怎样让自己振作起来", "你参与社交聚会时",
                             "你喜欢一个人独自享受空闲时光，或则在安静的家庭环境中放松", "选择你较喜欢的词", "当你放假时，你多数会", "比起对现实的细节的把握，你更擅长于宏观思考",
                             "你时常因为生命中遇到的某些复杂情况而迷惑不解","我比较倾向于","相对之下，我更喜欢","我更愿意被看作是","你更愿把 ____作为朋友?","选择你较喜欢的词","当和某人分手时","当我不同意我朋友的想法时",
                             "认识我的人倾向形容我为","你认为任何事情都可以被分析","选择你较喜欢的词","下列哪一个评价更适合你","你在做一个决定时，更多地会 ____?","在第一次约会中","我选择的生活比校倾向于：",
                             "我是这样喜欢____的人","我是这类型的人","把事物收拾得有条理，你就会感到高兴","在项目或任务中，我更大的优势在于","选择你较喜欢的词"],
            chooseArry: [["A:整体来说蛮健谈的", "B:较安静，和很熟的人聊天才会比较舒服"],
                        ["A:很多认识的人和很亲密的朋友", "B:一些很亲密的朋友和一些认识的人"],
                        ["A: 聚会，谈天，出游", "B:沉思，看书，看电影"],
                        ["A:总是能认识新朋友", "B:只跟几个亲密挚友呆在一起"],
                        ["A:是这样", "B:不是"],
                        ["A:演说", "B:写作"],
                        ["A:参观著名景点", "B:花时间逛博物馆和一些较为幽静的地方"],
                        ["A:是的", "B:不是"],
                        ["A:是的", "B:不，我很少想太多，关注实际"],
                        ["A: 畅想未来，为未来做计划和准备", "B:关注当下发生的事"],
                        ["A:灵感和推理", "B:确定而有形的事物"],
                        ["A:有想法的人", "B:务实的人"],
                        ["A:有头脑的人", "B:脚踏实地的人"],
                        ["A:总结", "B:捕捉 "],
                        ["A:虽然受伤，一旦下定决心我会直截了当", "B:自己深陷情绪中，很难抽身"],
                        ["A:我通常毫无保留，并且对我的朋友直言", "B:我尽可能地避免伤害对方"],
                        ["A: 逻辑和明确", "B:热情和敏感"],
                        ["A:是的", "B:不，我不认为每件事都是有前因后果的"],
                        ["A:严谨", "B:热心"],
                        ["A:理智的人", "B:性情中人"],
                        ["A:权衡实际的得失", "B:考虑其他人的感受"],
                        ["A: 若我所约的人来迟了，我会很不高兴", "B:不在乎，因为我自己也常常迟到"],
                        ["A: 有计划和日程表", "B:随性自然"],
                        ["A: 比较决绝然", "B:开放我的选择并且持续收集信息"],
                        ["A:喜欢专心于一件事情直到完成", "B:享受同时进行好几件事情"],
                        ["A:是的", "B:不，我习惯自由自在和随意"],
                        ["A: 事先制定完备计划", "B:遇到问题时灵活应对"],
                        ["A:一丝不苟", "B:不拘小节"],
                        ]

        },
        beforeMount(){
            wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#1cbbb4',
            })
            },
        methods: {   //方法
            
            //上一题
            backQuestion(index){  
                this.myclass='chooseStyle'
                if(this.flag==0){//当下标为0时，停止--
                    this.flag=0;
                }else{
                    this.flag--;
                }
                //修改进度条进度
                this.progress=Math.round((this.flag*100/(this.questionsArry.length-1)));
                //还原
                //this.styleFlag=960519152;
                this.styleFlag=this.answerMap.get(index-1);
            },
            //下一题
            nextQuestion(index){
                //console.log("这是下标为"+index+"的题");   
                this.myclass=''           
                if(this.answerMap.get(index)>=0){
                    if(this.flag==this.questionsArry.length-1){ //当下标和题目数组长度-1相等时，重置此标记为数组长度，防止数组超出范围
                        this.flag=this.questionsArry.length-1; //小标要比长度少一位，所以把长度-1 把值给下标
                    }else{
                        this.flag++;             
                    }
                    if(this.answerMap.get(this.flag)===undefined){
                        this.myclass=''
                    }else{
                        this.myclass='chooseStyle'
                    }
                   
                    //如果是最后一条则进行弹出框提示已经完成 
                    if(index==this.questionsArry.length-1){
                          console.log(this.answerMap);
                          let answerInfo="";
                          for(let[key,val] of this.answerMap){
                                console.log(key+"******"+val);
                                //answerInfo+="下标为"+key+"的题目,选项下标为"+val+"***********";
                                answerInfo+=(val+1);
                          }
                        //   alert(answerInfo)
                          console.log(answerInfo);
                          const lasttest=Object.assign(wx.getStorageSync('twodata'),{pCharacter:answerInfo}) 
                          this.submittotal(lasttest)
                          
                    }else{
                        //如果不是最后一条值则把下一题的下标给他
                        /**this.styleFlag=this.answerMap.get(index+1);**/
                    }
                }         
            },
            //选择
            getChoose(index,indexs){

                this.myclass='chooseStyle';
                
                this.styleFlag=indexs;
                
                this.answerMap.set(index,indexs);
            },
            //提交
            submit(){
                //判断最后一题是否做了
                this.nextQuestion(this.questionsArry.length-1);  
            },
            //向后端提交
           async submittotal(data){
               console.log(data);
               
               const res=await this.$flyio.post('/register',data)
               console.log(res);
               if(res){
                     wx.switchTab({
                       url: '/pages/index/main',
                          })
               }
               
            }
        },
        
}
</script>

<style >
.testContainer{
    display: flex;
    flex-direction: column;
}
.backColor{
    width: 100%;
    height: 200rpx;
    z-index: -1;
}
.container{
     position: absolute;
     width: 95%;
     align-content: center;
     margin: 100rpx 20rpx;
     border-radius: 10rpx;
     border: 1px solid #eee;
     z-index: 99;
    margin-bottom: 50rpx;
}
.container_p{
    font-weight: bold;
    font-size: 45rpx;
    align-content: center;
    margin: 40rpx 260rpx;
}
.container_p2{
    font-size: 35rpx;
    margin-left: 20rpx;
    margin-top: 30rpx;
}
.list-group-item-li{
    background-color:whitesmoke;
    margin:40px auto;
    font-size: 25rpx;
    letter-spacing: 2rpx;
    border-radius:20px;
    padding: 2rpx 20rpx;
    line-height: 80rpx;
    height: 80rpx;
    width:70%
}
.chooseStyle{
    background: #1cbbb4;
}
.btn{
    margin-bottom: 30rpx;
    font-size: 38rpx;
    width: 200rpx;
    height: 80rpx;
    line-height: 80rpx;
}

</style>
